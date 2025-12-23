# Hướng dẫn Deploy với Docker

## Yêu cầu
- Docker Engine 20.10+
- Docker Compose 2.0+

## Cài đặt Docker trên Ubuntu/Debian

```bash
# Update package index
sudo apt update

# Cài đặt dependencies
sudo apt install -y ca-certificates curl gnupg lsb-release

# Thêm Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Setup repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Cài đặt Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Verify installation
docker --version
docker compose version

# Thêm user vào docker group (không cần sudo)
sudo usermod -aG docker $USER
newgrp docker
```

## Build và chạy

### 1. Build Docker image

```bash
# Build image
docker build -t tinphatcons-ldp:latest .

# Hoặc dùng docker compose
docker compose build
```

### 2. Chạy container

```bash
# Chạy với docker compose (khuyến nghị)
docker compose up -d

# Hoặc chạy trực tiếp
docker run -d \
  --name tinphatcons-ldp \
  -p 3000:3000 \
  --restart unless-stopped \
  tinphatcons-ldp:latest
```

### 3. Kiểm tra logs

```bash
# Xem logs
docker compose logs -f

# Hoặc
docker logs -f tinphatcons-ldp
```

### 4. Stop/Start/Restart

```bash
# Stop
docker compose stop

# Start
docker compose start

# Restart
docker compose restart

# Stop và xóa containers
docker compose down
```

## Deploy lên server VPS

### Cách 1: Build trên server (khuyến nghị cho server nhỏ)

```bash
# 1. SSH vào server
ssh user@your-server-ip

# 2. Clone repository
git clone <your-repo-url> /var/www/tinphatcons-ldp
cd /var/www/tinphatcons-ldp

# 3. Tạo file .env.production (nếu cần)
nano .env.production

# 4. Build và chạy
docker compose up -d

# 5. Kiểm tra
docker compose ps
docker compose logs
```

### Cách 2: Build local và push lên Docker Hub

```bash
# 1. Build trên máy local
docker build -t yourusername/tinphatcons-ldp:latest .

# 2. Push lên Docker Hub
docker login
docker push yourusername/tinphatcons-ldp:latest

# 3. Trên server, pull và chạy
ssh user@your-server-ip
docker pull yourusername/tinphatcons-ldp:latest
docker run -d \
  --name tinphatcons-ldp \
  -p 3000:3000 \
  --restart unless-stopped \
  yourusername/tinphatcons-ldp:latest
```

## Cấu hình Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/tinphatcons-ldp
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/tinphatcons-ldp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Cài SSL
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Update code mới

```bash
# 1. Pull code mới
cd /var/www/tinphatcons-ldp
git pull

# 2. Rebuild và restart
docker compose up -d --build

# Hoặc không downtime
docker compose build
docker compose up -d --no-deps --build app
```

## Các lệnh hữu ích

```bash
# Xem danh sách containers
docker ps

# Xem logs
docker compose logs -f app

# Exec vào container
docker compose exec app sh

# Xem resource usage
docker stats

# Dọn dẹp images cũ
docker image prune -a

# Xem thông tin chi tiết
docker compose ps
docker compose top
```

## Troubleshooting

### Container không start

```bash
# Xem logs chi tiết
docker compose logs

# Kiểm tra port đã bị chiếm chưa
sudo lsof -i :3000
```

### Out of memory

```bash
# Giới hạn memory cho container
docker compose.yml:
  services:
    app:
      deploy:
        resources:
          limits:
            memory: 512M
```

### Build lỗi

```bash
# Build lại từ đầu không dùng cache
docker compose build --no-cache
```

## Monitoring

```bash
# Xem resource usage
docker stats tinphatcons-ldp

# Auto restart khi server reboot
# (đã có trong docker-compose.yml: restart: unless-stopped)
```

## Backup

```bash
# Backup image
docker save tinphatcons-ldp:latest | gzip > tinphatcons-ldp-backup.tar.gz

# Restore image
docker load < tinphatcons-ldp-backup.tar.gz
```

