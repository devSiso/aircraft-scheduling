import APIService from '../../index';

class FlightsAPI extends APIService {
  async getFlights() {
    return await this.get('flights');
  }

  async getFlight(id) {
    return await this.get(`flights/${id}`);
  }
}

export default new FlightsAPI();