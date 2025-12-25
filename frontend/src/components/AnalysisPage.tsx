import { useState, useRef, useEffect } from "react";
import { Camera, X, Loader2, CheckCircle2, AlertCircle, RotateCcw, ArrowLeft, Activity } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Logo } from "./Logo";

interface AnalysisResult {
  condition: string;
  confidence: number;
  severity: "Ringan" | "Sedang" | "Serius";
  description: string;
  recommendations: string[];
}

interface AnalysisPageProps {
  onBack: () => void;
}

export function AnalysisPage({ onBack }: AnalysisPageProps) {
  // Demo mode: Set initial state with captured image and analysis result
  const demoImage = "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY29uZGl0aW9uJTIwYWNuZSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzYzMzc5MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const demoResult: AnalysisResult = {
    condition: "Dermatitis Atopik (Eksim)",
    confidence: 87,
    severity: "Sedang",
    description: "Kondisi kulit yang menyebabkan kulit kering, gatal, dan meradang. Biasanya terjadi pada lipatan kulit seperti siku, lutut, dan leher. Eksim sering dikaitkan dengan alergi dan dapat memburuk akibat stress atau paparan iritan.",
    recommendations: [
      "Gunakan pelembab hypoallergenic secara teratur, minimal 2-3 kali sehari",
      "Hindari sabun yang keras dan produk dengan pewangi",
      "Konsultasi dengan dokter kulit untuk perawatan lebih lanjut dan kemungkinan terapi kortikosteroid topikal",
      "Gunakan pakaian yang lembut (katun) dan tidak mengiritasi kulit",
      "Hindari menggaruk area yang gatal untuk mencegah infeksi sekunder"
    ]
  };

  const [capturedImage, setCapturedImage] = useState<string | null>(demoImage);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(demoResult);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [stream]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      // Mock result
      const mockResults: AnalysisResult[] = [
        {
          condition: "Dermatitis Atopik (Eksim)",
          confidence: 87,
          severity: "Sedang",
          description: "Kondisi kulit yang menyebabkan kulit kering, gatal, dan meradang. Biasanya terjadi pada lipatan kulit seperti siku, lutut, dan leher. Eksim sering dikaitkan dengan alergi dan dapat memburuk akibat stress atau paparan iritan.",
          recommendations: [
            "Gunakan pelembab hypoallergenic secara teratur, minimal 2-3 kali sehari",
            "Hindari sabun yang keras dan produk dengan pewangi",
            "Konsultasi dengan dokter kulit untuk perawatan lebih lanjut dan kemungkinan terapi kortikosteroid topikal",
            "Gunakan pakaian yang lembut (katun) dan tidak mengiritasi kulit",
            "Hindari menggaruk area yang gatal untuk mencegah infeksi sekunder"
          ]
        },
        {
          condition: "Melanoma",
          confidence: 92,
          severity: "Serius",
          description: "Jenis kanker kulit yang berkembang dari sel melanosit. Deteksi dini sangat penting.",
          recommendations: [
            "Segera konsultasi dengan dokter spesialis kulit",
            "Hindari paparan sinar matahari langsung",
            "Lakukan pemeriksaan medis lebih lanjut",
            "Pantau perubahan pada tahi lalat atau bercak kulit"
          ]
        },
        {
          condition: "Jerawat (Acne Vulgaris)",
          confidence: 78,
          severity: "Ringan",
          description: "Kondisi kulit umum yang terjadi ketika folikel rambut tersumbat oleh minyak dan sel kulit mati.",
          recommendations: [
            "Bersihkan wajah dua kali sehari dengan pembersih lembut",
            "Gunakan produk non-komedogenik",
            "Hindari memencet jerawat",
            "Konsultasi dengan dokter untuk perawatan topikal atau oral"
          ]
        }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setAnalysisResult(randomResult);
      setIsAnalyzing(false);
    }, 2500);
  };

  const handleReset = () => {
    setCapturedImage(null);
    setAnalysisResult(null);
    setIsAnalyzing(false);
    handleCameraStop();
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Ringan":
        return "bg-green-100 text-green-800 border-green-200";
      case "Sedang":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Serius":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleCameraStart = async () => {
    try {
      setCameraError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" }
      });
      setStream(mediaStream);
      setIsCameraActive(true);
      setCapturedImage(null);
      setAnalysisResult(null);
    } catch (error) {
      console.error("Error accessing camera:", error);
      
      let errorMessage = "Tidak dapat mengakses kamera.";
      
      if (error instanceof Error) {
        if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
          errorMessage = "Akses kamera ditolak. Silakan izinkan akses kamera di pengaturan browser Anda.";
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          errorMessage = "Kamera tidak ditemukan. Pastikan perangkat Anda memiliki kamera.";
        } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
          errorMessage = "Kamera sedang digunakan oleh aplikasi lain.";
        } else if (error.name === "OverconstrainedError") {
          errorMessage = "Tidak dapat memenuhi pengaturan kamera yang diminta.";
        } else if (error.name === "SecurityError") {
          errorMessage = "Akses kamera diblokir karena alasan keamanan. Pastikan Anda menggunakan HTTPS.";
        }
      }
      
      setCameraError(errorMessage);
    }
  };

  const handleCameraStop = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  };

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/png");
        setCapturedImage(imageData);
        handleCameraStop();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Button>
          
          <Logo size="small" />

          <div className="w-24"></div>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">
            Analisis <span className="text-blue-600">Kondisi Kulit</span> Anda
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nyalakan kamera untuk mengambil foto area kulit yang ingin Anda periksa 
            dan dapatkan hasil analisis AI secara instan
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Camera Section */}
            <div>
              <h3 className="mb-4">Ambil Foto</h3>
              
              {!isCameraActive && !capturedImage && (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="mb-4">
                        Klik tombol di bawah untuk menyalakan kamera
                      </p>
                      <Button 
                        onClick={handleCameraStart}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Camera className="w-5 h-5 mr-2" />
                        Nyalakan Kamera
                      </Button>
                      
                      {cameraError && (
                        <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                          <div className="flex gap-2 items-start">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div className="text-left">
                              <p className="text-sm text-red-800 mb-2">{cameraError}</p>
                              <p className="text-xs text-red-700">
                                Pastikan Anda memberikan izin akses kamera saat browser meminta. 
                                Anda mungkin perlu me-refresh halaman dan mencoba lagi.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {isCameraActive && !capturedImage && (
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-auto rounded-xl border-2 border-gray-200"
                  />
                  <canvas ref={canvasRef} className="hidden" />
                  <div className="flex gap-2 mt-4">
                    <Button 
                      onClick={handleCapture}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      <Camera className="w-5 h-5 mr-2" />
                      Ambil Foto
                    </Button>
                    <Button 
                      onClick={handleCameraStop}
                      variant="outline"
                      size="lg"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {capturedImage && (
                <div className="relative">
                  <img
                    src={capturedImage}
                    alt="Captured skin"
                    className="w-full h-auto rounded-xl border-2 border-gray-200"
                  />
                  {!analysisResult && (
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Menganalisis...
                        </>
                      ) : (
                        <>
                          <Camera className="w-5 h-5 mr-2" />
                          Analisis Sekarang
                        </>
                      )}
                    </Button>
                  )}
                </div>
              )}

              {isAnalyzing && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Memproses gambar...</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
              )}
            </div>

            {/* Results Section */}
            <div>
              <h3 className="mb-4">Hasil Analisis</h3>
              
              {!analysisResult && !isAnalyzing && (
                <div className="border-2 border-gray-200 rounded-xl p-12 text-center bg-gray-50">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">
                    Ambil foto dan klik "Analisis Sekarang" untuk melihat hasil
                  </p>
                </div>
              )}

              {isAnalyzing && (
                <div className="border-2 border-blue-200 rounded-xl p-8 text-center bg-blue-50">
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <p className="text-blue-700">
                    AI sedang menganalisis gambar Anda...
                  </p>
                </div>
              )}

              {analysisResult && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="mb-2">{analysisResult.condition}</h4>
                        <Badge className={getSeverityColor(analysisResult.severity)}>
                          {analysisResult.severity}
                        </Badge>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tingkat Kepercayaan</span>
                        <span>{analysisResult.confidence}%</span>
                      </div>
                      <Progress value={analysisResult.confidence} className="h-2" />
                    </div>

                    <p className="text-sm text-gray-700">
                      {analysisResult.description}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <h4 className="mb-3">Rekomendasi Perawatan</h4>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-amber-800 mb-1">
                          Catatan Penting
                        </p>
                        <p className="text-amber-700">
                          Hasil ini adalah prediksi AI dan tidak menggantikan diagnosis medis profesional. 
                          Silakan konsultasi dengan dokter spesialis kulit untuk diagnosis yang akurat.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleReset} variant="outline" className="w-full">
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Analisis Foto Lain
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}