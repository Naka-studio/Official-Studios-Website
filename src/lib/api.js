const API = import.meta.env.VITE_API_URL;

const request = async (path, options = {}) => {
  const res = await fetch(`${API}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`response gagal: ${res.status}`);
  }

  return res.json();
};

export default request;

