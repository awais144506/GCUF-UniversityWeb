import './globals.css'
export const metadata = {
  title: 'GCUF Sahiwal',
  description: 'Created By Muhammad Awais',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
