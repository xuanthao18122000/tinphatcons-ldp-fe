# Sử dụng Node.js 20 Alpine để giảm kích thước image
FROM node:20-alpine AS base

# Cài đặt dependencies cần thiết cho Alpine
RUN apk add --no-cache libc6-compat

# Cài đặt pnpm
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

WORKDIR /app

# ============================================
# Stage 1: Dependencies
# ============================================
FROM base AS deps

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Cài đặt dependencies
# Không dùng --frozen-lockfile vì lockfile có thể outdated
RUN pnpm install --no-frozen-lockfile

# ============================================
# Stage 2: Builder
# ============================================
FROM base AS builder

WORKDIR /app

# Copy dependencies từ stage trước
COPY --from=deps /app/node_modules ./node_modules

# Copy toàn bộ source code
COPY . .

# Disable telemetry của Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Build ứng dụng
RUN pnpm build

# ============================================
# Stage 3: Runner (Production)
# ============================================
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Tạo user và group để chạy app (security best practice)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy build output
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Chuyển sang user nextjs (không chạy với root)
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start Next.js
CMD ["pnpm", "start"]

