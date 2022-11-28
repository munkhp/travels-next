const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://travelsinmongolia.com"
    : "http://localhost:3003";

export default baseUrl;
