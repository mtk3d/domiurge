import * as fs from 'fs';
import * as yaml from 'js-yaml';

import ConfigParser from '../parsers/config-parser';
import ConfigValidator from '../validators/config-validator';

class Config {
  configPath!: string;
  configFileContent!: any;
  config: any = {};
  configValidator: ConfigValidator;
  configParser: ConfigParser;

  constructor(configValidator: ConfigValidator, configParser: ConfigParser) {
    this.configValidator = configValidator;
    this.configParser = configParser;
  }

  init(configPath: string) {
    this.configPath = configPath;
    this._loadConfigFile();
    this._validateConfig();
  }

  _loadConfigFile(): void | string {
    let yamlString;
    yamlString = fs.readFileSync(this.configPath, 'utf8');
    this.configFileContent = yaml.safeLoad(yamlString);
  }

  _validateConfig(): void {
    this.configValidator.validate(this.configFileContent);
  }

  _parseConfig(): void {
    this.config = this.configParser.parse(this.configFileContent);
  }

  getConfig(): any {
    return this.config;
  }
}

const configValidator = new ConfigValidator();
const configParser = new ConfigParser();
const config = new Config(configValidator, configParser);

export default config;
