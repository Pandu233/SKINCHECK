export async function predictSkin(image: File) {
  const formData = new FormData();
  formData.append("file", image);

  const response = await fetch("http://127.0.0.1:8000/api/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}
