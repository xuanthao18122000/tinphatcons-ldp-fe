import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT',
    short_name: 'TIN PHAT CTI',
    description: 'Tín Phát Construction - Tin Phat Construction. CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT - Đối tác tin cậy cho các dự án xây dựng tại TP.HCM',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/logo-doc.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-doc.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

