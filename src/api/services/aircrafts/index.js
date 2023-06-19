import APIService from '../../index';

class AircraftsAPI extends APIService {
  async getAircrafts() {
    return await this.get('aircrafts');
  }

  async getAircraft(id) {
    return await this.get(`aircrafts/${id}`);
  }
}

export default new AircraftsAPI();