import { ExpressHttp } from '../constants/interfaces';
import { getView, getConfig } from '../utils/string';
import Handlebars from 'handlebars';

export default class FileRendere {
  private name: string = '';
  private response: ExpressHttp.Res;

  constructor(fileName: string, response: ExpressHttp.Res) {
    this.name = fileName;
    this.response = response;
  }

  private getView = (): string => require(getView(this.name));
  private getConfig = (): Object => require(getConfig(this.name)).call();

  public async render() {
    const compiledTemplate = Handlebars.compile(this.getView());
    const compiledHtml = await compiledTemplate(this.getConfig());
    return this.response.send(compiledHtml);
  }
};
