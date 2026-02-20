export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-10 py-24">

      <div className="max-w-4xl mx-auto space-y-20">

        {/* ===== HEADER ===== */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Adarsh Gyawali
          </h1>

          <p className="text-xl text-gray-400">
            Machine Learning Engineer — Production ML • Distributed Systems • MLOps
          </p>
        </section>


        {/* ===== SUMMARY ===== */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Summary</h2>

          <p className="text-gray-300 leading-relaxed">
            Machine Learning Engineer with 3+ years of experience delivering 
            production-grade ML systems in financial services environments. 
            Experienced across the complete ML lifecycle — exploratory analysis, 
            feature engineering, model development, deployment, and monitoring.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Strong focus on reliability, scalability, and regulatory compliance. 
            Comfortable operating in cross-functional teams involving data 
            engineering, cloud platform, and governance stakeholders.
          </p>
        </section>


        {/* ===== EXPERIENCE ===== */}
        <section className="space-y-10">

          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-medium">
                Machine Learning Engineer — Mphasis (2024–Present)
              </h3>

              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
                <li>Owned end-to-end lifecycle of financial forecasting and risk analytics models</li>
                <li>Improved predictive accuracy by 15–20% in regulated environments</li>
                <li>Designed Airflow pipelines for automated retraining and validation</li>
                <li>Implemented distributed training workflows on AWS SageMaker</li>
                <li>Built batch and near-real-time inference services using AWS Lambda</li>
                <li>Established monitoring for drift, latency, and stability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Machine Learning Engineer — Accenture (2022–2023)
              </h3>

              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
                <li>Performed exploratory analysis and feature engineering on financial datasets</li>
                <li>Improved predictive outcomes by 10–15% via tuning and validation</li>
                <li>Developed NLP-based classification systems</li>
                <li>Standardized experimentation workflows</li>
                <li>Supported cloud-based production integration</li>
              </ul>
            </div>

          </div>
        </section>


        {/* ===== SKILLS ===== */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Core Skills</h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">

            <div>
              <strong>Machine Learning:</strong> Supervised Learning, NLP, Model Evaluation
            </div>

            <div>
              <strong>MLOps:</strong> Deployment, Monitoring, Pipeline Orchestration
            </div>

            <div>
              <strong>Cloud & Distributed Systems:</strong> AWS (S3, Lambda, SageMaker, Redshift)
            </div>

            <div>
              <strong>Infrastructure:</strong> Docker, Kubernetes, PostgreSQL
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}
