import request from 'request';
import 'querystring';

export default class RestClient {
  constructor(url, name, password) {
    this.url = url;
    this.name = name;
    this.password = password;
  }

  getRequest(method) {
  }

  postRequest(method) {
  }

  deleteRequest(method) {
  }

}
