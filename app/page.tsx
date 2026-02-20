import Navbar from "@/components/Navbar"
import BlogCard from "../components/BlogCard"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <Image
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/2025AI_Hero.width-2200.format-webp.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-10 max-w-6xl">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            NOTEWORTHY
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-300">
            Deep dives into Machine Learning, Distributed Systems, and the
            engineering lessons behind real-world projects.
          </p>
        </div>
      </section>


      {/* ================= BLOG GRID ================= */}
      <section className="bg-white text-black py-24 px-10">
        <h2 className="text-4xl font-extrabold mb-20 text-center">
          TUNE INTO THE LATEST
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <Link href="/blog/xgboost">
          <BlogCard
            title="Scaling XGBoost in Production"
            category="ML ENGINEERING"
            image="/images/xgboost.png"
          />
        </Link>


          <BlogCard
            title="Kubernetes HPA Deep Dive"
            category="SYSTEMS"
            image="/images/k8s.png"
          />

          <BlogCard
            title="Designing Data-Intensive Pipelines"
            category="ARCHITECTURE"
            image="/images/distributed.png"
          />
        </div>
      </section>


      {/* ================= MARQUEE SECTION ================= */}
      <section className="relative overflow-hidden bg-black py-32">

        {/* Moving Background Text */}
        <div className="absolute inset-0 flex flex-col gap-8 opacity-10 select-none">
          <div className="animate-marquee whitespace-nowrap text-[120px] font-extrabold tracking-tight">
            PRECISION • PERFORMANCE • RELIABILITY • SCALE •
          </div>
          <div className="animate-marquee-reverse whitespace-nowrap text-[120px] font-extrabold tracking-tight">
            ENGINEERING INTELLIGENCE • PRODUCTION SYSTEMS •
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-10 text-center">
          <h2 className="text-5xl font-extrabold">
            Engineering Intelligent Systems
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Engineering performance, boosting accuracy, and distributed training at scale.
          </p>
        </div>
      </section>


      {/* ================= DIVIDER BEFORE FOOTER ================= */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-24" />

    </main>
  )
}
