import { Upload, Scan, FileText, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Foto",
      description: "Ambil foto area kulit yang ingin Anda periksa atau upload dari galeri",
    },
    {
      icon: Scan,
      title: "AI Menganalisis",
      description: "Teknologi AI kami akan menganalisis gambar dan mendeteksi kondisi kulit",
    },
    {
      icon: FileText,
      title: "Terima Hasil",
      description: "Dapatkan hasil deteksi lengkap dengan tingkat kepercayaan dan penjelasan detail",
    },
    {
      icon: CheckCircle,
      title: "Rekomendasi",
      description: "Terima rekomendasi perawatan dan saran untuk langkah selanjutnya",
    },
  ];

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-4">
          Cara Kerja <span className="text-blue-600">SkinCheckAI</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Proses sederhana dalam 4 langkah untuk mendapatkan analisis kondisi kulit Anda
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector line - hidden on mobile and last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
