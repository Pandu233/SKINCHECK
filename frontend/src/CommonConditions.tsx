import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function CommonConditions() {
  const conditions = [
    {
      name: "Jerawat (Acne)",
      category: "Umum",
      description: "Kondisi kulit yang terjadi ketika folikel rambut tersumbat oleh minyak dan sel kulit mati.",
      symptoms: ["Komedo", "Benjolan merah", "Pustula", "Kulit berminyak"],
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Eksim (Dermatitis)",
      category: "Umum",
      description: "Peradangan kulit yang menyebabkan kulit kering, gatal, dan kemerahan.",
      symptoms: ["Kulit kering", "Gatal", "Kemerahan", "Bersisik"],
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      name: "Psoriasis",
      category: "Kronis",
      description: "Kondisi autoimun yang menyebabkan penumpukan sel kulit dengan cepat.",
      symptoms: ["Plak merah", "Kulit bersisik", "Kulit kering pecah-pecah", "Gatal atau perih"],
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      name: "Rosacea",
      category: "Kronis",
      description: "Kondisi kulit yang menyebabkan kemerahan dan pembuluh darah terlihat di wajah.",
      symptoms: ["Kemerahan wajah", "Pembuluh darah terlihat", "Benjolan kecil", "Sensasi terbakar"],
      color: "bg-pink-100 text-pink-800 border-pink-200",
    },
    {
      name: "Melanoma",
      category: "Serius",
      description: "Jenis kanker kulit yang berkembang dari sel melanosit, perlu deteksi dini.",
      symptoms: ["Tahi lalat berubah", "Bercak asimetris", "Warna tidak merata", "Pertumbuhan cepat"],
      color: "bg-red-100 text-red-800 border-red-200",
    },
    {
      name: "Jamur Kulit",
      category: "Umum",
      description: "Infeksi jamur pada kulit yang dapat menyebabkan gatal dan perubahan warna kulit.",
      symptoms: ["Gatal", "Bercak kemerahan", "Kulit bersisik", "Bau tidak sedap"],
      color: "bg-green-100 text-green-800 border-green-200",
    },
  ];

  return (
    <section id="conditions" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-4">
          Kondisi Kulit yang Dapat <span className="text-blue-600">Dideteksi</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SkinCheckAI dapat mendeteksi berbagai kondisi kulit umum hingga yang memerlukan 
          perhatian khusus
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {conditions.map((condition, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="flex-1">{condition.name}</h3>
              <Badge className={condition.color}>
                {condition.category}
              </Badge>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              {condition.description}
            </p>

            <div>
              <p className="text-sm mb-2 text-gray-700">Gejala Umum:</p>
              <div className="flex flex-wrap gap-2">
                {condition.symptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          dan masih banyak kondisi kulit lainnya yang dapat kami deteksi
        </p>
      </div>
    </section>
  );
}
