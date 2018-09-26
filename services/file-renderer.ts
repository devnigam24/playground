import { ExpressHttp } from '../constants/interfaces';
import { getIndexHtmlFile } from '../utils/string';

export default class FileRendere {
  private name: string = '';
  private response: ExpressHttp.Res;

  constructor(fileName: string, response: ExpressHttp.Res) {
    this.name = fileName;
    this.response = response;
  }

  public render() {
    return this.response.sendFile(getIndexHtmlFile(this.name));
  }
};
