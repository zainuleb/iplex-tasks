import axios from 'axios';

export class charApi {
  async getCharApi() {
    let result = await axios.get(`http://localhost:5000/characters`);
    if (result && result.data) {
      return result.data;
    }
  }

  async getSingleCharApi(id) {
    let result = await axios.get(`http://localhost:5000/characters/${id}`);
    if (result && result.data) {
      return result.data;
    }
  }
}
