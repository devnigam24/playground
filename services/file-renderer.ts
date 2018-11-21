import Handlebars from 'handlebars';
import { ExpressHttp } from '../constants/interfaces';
import { getViewJSFilePath, getConfigJSFilePath } from '../utils/string';
import { errorModuleRouteMap } from '../constants/module-names';

export default class FileRendere {
  private name: string = '';
  private response: ExpressHttp.Res;

  constructor(fileName: string, response: ExpressHttp.Res) {
    this.name = fileName;
    this.response = response;
  }

  private getView = (templateName): string => require(getViewJSFilePath(templateName));
  private getConfig = (templateName): any => require(getConfigJSFilePath(templateName)).getConfig();
  private setConfig = (templateName, config): any => require(getConfigJSFilePath(templateName)).setConfig(config);

  public async render() {
    let compiledTemplate;
    let compiledHtml;
    try {
      compiledTemplate = await Handlebars.compile(this.getView(this.name));
      compiledHtml = await compiledTemplate(this.getConfig(this.name));
    } catch (error) {
      this.setConfig(errorModuleRouteMap.buildError, error);
      compiledTemplate = await Handlebars.compile(this.getView(errorModuleRouteMap.buildError));
      compiledHtml = await compiledTemplate(this.getConfig(errorModuleRouteMap.buildError));
    } finally {
      return this.response.send(compiledHtml);
    }

  }
};
