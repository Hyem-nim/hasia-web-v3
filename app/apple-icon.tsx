import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'
export const dynamic = 'force-static'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 140,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00ff00',
          fontWeight: 900,
          fontFamily: 'Arial Black, sans-serif',
          borderRadius: 30,
        }}
      >
        H
      </div>
    ),
    {
      ...size,
    }
  )
}