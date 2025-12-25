import { Shield, Zap, Brain, Clock, Award, Lock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Canggih",
      description: "Teknologi machine learning terdepan untuk deteksi akurat",
    },
    {
      icon: Zap,
      title: "Hasil Instan",
      description: "Dapatkan hasil analisis dalam hitungan detik",
    },
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description: "Data Anda dilindungi dengan enkripsi tingkat tinggi",
    },
    {
      icon: Clock,
      title: "24/7 Tersedia",
      description: "Akses kapan saja, di mana saja sesuai kebutuhan Anda",
    },
    {
      icon: Award,
      title: "Akurasi Tinggi",
      description: "Dikembangkan dengan dataset medis yang komprehensif",
    },
    {
      icon: Lock,
      title: "Privasi Terjamin",
      description: "Kami tidak membagikan data pribadi Anda",
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-4">
          Mengapa Memilih <span className="text-blue-600">SkinCheckAI</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Platform deteksi penyakit kulit terpercaya dengan teknologi AI 
          yang dirancang untuk memberikan hasil terbaik
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
