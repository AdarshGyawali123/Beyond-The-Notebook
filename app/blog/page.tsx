import Image from "next/image"
import Link from "next/link"

export default function BlogLanding() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* Subtle animated background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />

      {/* ================= HEADER ================= */}
      <section className="relative z-10 pt-32 pb-16 px-10">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Engineering Journal
          </h1>

          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Notes on machine learning, distributed systems, and production architecture.
          </p>

        </div>
      </section>


      {/* ================= POSTS ================= */}
      <section className="relative z-10 pb-32 px-10">

        <div className="max-w-6xl mx-auto space-y-24">

          {/* Post 1 */}
          <Link href="/blog/xgboost" className="group block">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/xgboost.png"
                  alt="XGBoost"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Machine Learning
                </p>

                <h2 className="mt-4 text-3xl font-semibold group-hover:opacity-80 transition">
                  Scaling XGBoost in Production
                </h2>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  From local experiments to distributed training. Understanding bottlenecks,
                  tuning strategy, and real-world deployment patterns.
                </p>

                <span className="inline-block mt-6 text-sm text-white border-b border-white/40 group-hover:border-white transition">
                  Read Essay →
                </span>
              </div>

            </div>
          </Link>


          {/* Post 2 */}
          <Link href="/blog/k8s" className="group block">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div className="order-2 md:order-1">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Systems
                </p>

                <h2 className="mt-4 text-3xl font-semibold group-hover:opacity-80 transition">
                  Kubernetes HPA Deep Dive
                </h2>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  Autoscaling mechanics, metrics-server, resource tuning,
                  and production realities beyond documentation.
                </p>

                <span className="inline-block mt-6 text-sm text-white border-b border-white/40 group-hover:border-white transition">
                  Read Essay →
                </span>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/k8s.png"
                  alt="Kubernetes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </Link>


          {/* Post 3 */}
          <Link href="/blog/data-pipelines" className="group block">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/distributed.png"
                  alt="Data Intensive"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Architecture
                </p>

                <h2 className="mt-4 text-3xl font-semibold group-hover:opacity-80 transition">
                  Designing Data-Intensive Pipelines
                </h2>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  Batch vs streaming, consistency tradeoffs, WAL replication,
                  and system design lessons.
                </p>

                <span className="inline-block mt-6 text-sm text-white border-b border-white/40 group-hover:border-white transition">
                  Read Essay →
                </span>
              </div>

            </div>
          </Link>

        </div>

      </section>

    </main>
  )
}
