import { apiInstance } from "..";

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  return await apiInstance().post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
