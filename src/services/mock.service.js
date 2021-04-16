import { ErrorWrapper, ResponseWrapper } from './util'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

export class MockService {

  static async getRandomFacts() {
    try {
      var mock = new MockAdapter(axios, { delayResponse: 3000 });

      mock.onGet('/getRandomFacts').reply(200, {
        data:
          [
            {
              text: 'Hot water will turn into ice faster than cold water.'
            },
            {
              text: 'The Mona Lisa has no eyebrows.'
            },
            {
              text: 'The strongest muscle in the body is the tongue.'
            }
          ]
      });

      const response = await axios.get('/getRandomFacts');
      return new ResponseWrapper(response, response.data)

    } catch (error) {
      console.log(error);
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}