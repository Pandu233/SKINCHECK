import { Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "./components/button";
import { ImageWithFallback } from "./ImageWithFallback";

function Hero({ onStartAnalysis }: { onStartAnalysis: () => void }) {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full w-fit">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Teknologi AI Terpercaya</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Deteksi Penyakit Kulit dengan{" "}
            <span className="text-blue-600">Kecerdasan Buatan</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl">
            SkinCheckAI membantu Anda mendeteksi dan memprediksi berbagai kondisi 
            kulit menggunakan teknologi AI canggih. Dapatkan hasil analisis instan 
            dan rekomendasi perawatan yang tepat.
          </p>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Analisis cepat dalam hitungan detik</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Akurasi tinggi dengan teknologi AI</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Rekomendasi perawatan yang dipersonalisasi</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={onStartAnalysis}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              Mulai Analisis Gratis
            </Button>
            <Button size="lg" variant="outline">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 max-w-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1606501161752-e4be315c8b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGVybWF0b2xvZ3klMjBza2lufGVufDF8fHx8MTc2MzMxMTYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Medical dermatology"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 

export default Hero;