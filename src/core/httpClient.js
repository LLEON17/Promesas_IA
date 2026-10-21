const DEFAULT_BASE_URL = 'https://jsonplaceholder.typicode.com';

class HttpClient {
  constructor(baseUrl = DEFAULT_BASE_URL) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, options);

    if (!response.ok) {
      const error = new Error(
        `HTTP request failed with status ${response.status} ${response.statusText}`.trim()
      );
      error.status = response.status;
      error.statusText = response.statusText;
      error.endpoint = endpoint;
      throw error;
    }

    return response.json();
  }
}

const httpClient = new HttpClient();

export { HttpClient };
export default httpClient;
