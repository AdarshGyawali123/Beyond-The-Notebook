import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Adarsh | Beyond the Notebook",
  description: "ML, Systems, and Engineering Notes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
