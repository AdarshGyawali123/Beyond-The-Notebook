export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">
        Beyond The Notebook
      </h1>

      <div className="flex gap-8 text-sm font-medium">
        <a href="/" className="hover:text-gray-400 transition">
          Home
        </a>
        <a href="/blog" className="hover:text-gray-400 transition">
          Blog
        </a>
        <a href="/about" className="hover:text-gray-400 transition">
          About
        </a>
      </div>
    </nav>
  )
}
