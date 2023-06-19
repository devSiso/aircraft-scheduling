class APIService {
  constructor() {
    this.apiUrl = "https://recruiting-assessment.alphasights.com/api";
  }

  baseURL() {
    return this.apiUrl;
  }

  async get(resource) {
    const url = `${this.baseURL()}/${resource}`;
    const response = await fetch(url);
    return response.json();
  }

  async post(resource, body) {
    const url = `${this.baseURL()}/${resource}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    const response = await fetch(url, options);
    return response.json();
  }

  async patch(resource, body) {
    const url = `${this.baseURL()}/${resource}`;
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    const response = await fetch(url, options);
    return response.json();
  }

  async delete(resource) {
    const url = `${this.baseURL()}/${resource}`;
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(url, options);
    return response.json();
  }
}

export default APIService;
