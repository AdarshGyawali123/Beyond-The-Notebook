import Image from "next/image"

export default function XGBoostPost() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center px-10">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Machine Learning • Production Systems
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            Scaling XGBoost in Production
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl">
            From local experimentation to distributed training pipelines.
            A practical guide to performance tuning, bottlenecks, and real-world deployment.
          </p>

        </div>
      </section>

      {/* ================= COVER IMAGE ================= */}
      <section className="px-10 pb-20">
        <div className="relative h-[500px] max-w-6xl mx-auto rounded-3xl overflow-hidden">
          <Image
            src="/images/xgboost.png"
            alt="XGBoost Cover"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className="px-10 pb-32">
        <div className="max-w-3xl mx-auto space-y-12 text-gray-300 leading-relaxed text-lg">

          {/* INTRO */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              1. The Local Experiment Trap
            </h2>

            <p>
              XGBoost performs exceptionally well in controlled environments.
              On a local machine with small datasets, it feels fast and reliable.
              However, scaling to millions of rows introduces memory pressure,
              training latency, and serialization bottlenecks.
            </p>

            <p>
              What works locally does not automatically translate to production.
              The moment data grows, hyperparameters interact differently with hardware.
            </p>
          </section>

          {/* TRAINING MECHANICS */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              2. Understanding the Training Engine
            </h2>

            <p>
              XGBoost builds trees sequentially using gradient boosting.
              Each tree corrects the residuals of the previous one.
            </p>

            <div className="bg-gray-900 rounded-xl p-6 text-sm overflow-x-auto">
{`for t in range(num_trees):
    residuals = compute_gradient(loss, predictions)
    tree = build_tree(residuals)
    predictions += learning_rate * tree`}
            </div>

            <p>
              The cost scales with:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Number of trees</li>
              <li>Tree depth</li>
              <li>Feature count</li>
              <li>Dataset size</li>
            </ul>

          </section>

          {/* PERFORMANCE BOTTLENECKS */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              3. Real Bottlenecks in Production
            </h2>

            <p>
              In distributed environments, bottlenecks appear in unexpected places:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Data loading from object storage (S3)</li>
              <li>Serialization between workers</li>
              <li>CPU thread contention</li>
              <li>GPU memory constraints</li>
            </ul>

            <p>
              Scaling isn't just about adding machines.
              It's about understanding where time is spent.
            </p>
          </section>

          {/* DISTRIBUTED TRAINING */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              4. Distributed Training Strategies
            </h2>

            <p>
              XGBoost supports distributed training via:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Dask</li>
              <li>Spark</li>
              <li>Ray</li>
            </ul>

            <p>
              Each framework has tradeoffs in communication overhead and failure handling.
            </p>
          </section>

          {/* DIAGRAM PLACEHOLDER */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              5. Communication Flow Diagram
            </h2>

            <div className="h-72 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500">
              [Insert Distributed Training Diagram Here]
            </div>
          </section>

          {/* DEPLOYMENT */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              6. Deployment and Inference
            </h2>

            <p>
              Once trained, model size and inference latency become the next challenge.
              Deep trees increase prediction latency.
            </p>

            <p>
              In production APIs:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Pre-load model in memory</li>
              <li>Avoid repeated deserialization</li>
              <li>Batch inference when possible</li>
            </ul>
          </section>

          {/* CONCLUSION */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              7. Final Thoughts
            </h2>

            <p>
              Scaling XGBoost is not about blindly increasing resources.
              It's about understanding computational cost, data flow,
              and infrastructure constraints.
            </p>

            <p>
              The difference between experimentation and engineering
              lies in operational awareness.
            </p>
          </section>

        </div>
      </article>

    </main>
  )
}
