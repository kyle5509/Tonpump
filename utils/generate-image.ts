export function generateImage(image?: string | undefined | null) {
  if (!image) return "";
  // return "https://pump-tonk-backend.onrender.com/" + image;
  return process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "") + image;
}
