import { RestClient, RestClientOptions } from "@/lib/client";

const backend = new RestClient({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
} as RestClientOptions);

export default backend;
