import ParserInterface from './parser-interface';

export default class ConfigParser implements ParserInterface {
  data!: any;

  parse(data: any): any {
    this.data = data;
    this.data = this._mergeTemplates(this.data);
    this.data = this._mergeCommands(this.data);

    return this.data;
  }

  _mergeTemplates(data: any): any {
    let parsedData = data;
    parsedData.services = data.services.map((service: any) => {
      let templated = service;
      if (service.template) {
        const serviceTemplate = data.services_templates
          .find((template: any) => template.template_name === service.template);

        if (!serviceTemplate) {
          throw new Error(`Template ${service.template} not found`);
        }

        templated = {...serviceTemplate, ...service};
      }
      return templated;
    });

    return parsedData;
  }

  _mergeCommands(data: any): any {
    let parsedData = data;
    parsedData.services = data.services.map((service: any) => {
      let templated = service;
      if (service.commands && service.commands.length) {
        templated.commands = service.commands.map((commandName: string) => {
          return data.commands
            .find((command: any) => command.name === commandName);
        });
      }
      return templated;
    });

    return parsedData;
  }
}
