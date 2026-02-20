import Image from "next/image"


type BlogCardProps = {
  title: string
  category: string
  image: string
}

export default function BlogCard({
  title,
  category,
  image,
}: BlogCardProps) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      
      {/* Image */}
      <div className="relative h-[320px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
          {category}
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-black">
          {title}
        </h3>
      </div>
    </div>
  )
}
