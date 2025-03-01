export class RestClientError extends Error {
  readonly response: Response;

  constructor(response: Response) {
    super(`An HTTP error with status ${response.statusText} has occurred.`);
    this.response = response;
  }
}

export interface RestClientOptions {
  baseUrl: string;
}

export interface RestClientRequestInit extends RequestInit {
  json?: object;
  headers?: HeadersInit;
}

export class RestClient {
  readonly baseUrl: string;

  constructor(options: RestClientOptions) {
    this.baseUrl = options.baseUrl;
  }

  async post(endpoint: string, options?: RestClientRequestInit) {
    return this.request(endpoint, { ...options, method: "POST" });
  }

  async get(endpoint: string, options?: RestClientRequestInit) {
    return this.request(endpoint, { ...options, method: "GET" });
  }

  async put(endpoint: string, options?: RestClientRequestInit) {
    return this.request(endpoint, { ...options, method: "PUT" });
  }

  async delete(endpoint: string, options?: RestClientRequestInit) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }

  private async request(endpoint: string, options?: RestClientRequestInit) {
    const json = options?.json;
    const body = json && { body: JSON.stringify(json) };

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    };

    const request = new Request(this.baseUrl + endpoint, {
      ...options,
      ...body,
      headers,
    });

    const response = await fetch(request, { cache: "no-store" });
    if (!response.ok) {
      throw new RestClientError(response);
    }
    return await response.json();
  }
}
