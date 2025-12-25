import { Activity, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">
                <span className="text-blue-400">SkinCheck</span>
                <span className="text-white">AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Platform deteksi penyakit kulit berbasis AI yang membantu Anda mendapatkan 
              analisis cepat dan akurat.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#analyzer" className="hover:text-blue-400 transition-colors">
                  Analisis
                </a>
              </li>
              <li>
                <a href="#conditions" className="hover:text-blue-400 transition-colors">
                  Kondisi Kulit
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tim Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>support@skincheck.ai</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 SkinCheckAI. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: SkinCheckAI tidak menggantikan diagnosis medis profesional. 
            Selalu konsultasi dengan dokter untuk diagnosis yang akurat.
          </p>
        </div>
      </div>
    </footer>
  );
}
