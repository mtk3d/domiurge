import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';
import * as process from 'process';

import ConfigParser from '../parsers/config-parser';
import ConfigValidator from '../validators/config-validator';

class Config {
  configPath: string;
  config!: any;
  configValidator: ConfigValidator;
  configParser: ConfigParser;

  constructor(configPath: string, configValidator: ConfigValidator, configParser: ConfigParser) {
    this.configPath = configPath;
    this.configValidator = configValidator;
    this.configParser = configParser;
    this._loadConfigFile();
    this._validateConfig();
  }

  _loadConfigFile(): void | string {
    let yamlString;
    yamlString = fs.readFileSync(this.configPath, 'utf8');
    this.config = yaml.safeLoad(yamlString);
  }

  _validateConfig(): void {
    this.configValidator.validate(this.config);
  }

  _parsedConfig(): object {
    return this.configParser.parse(this.config);
  }

  getConfig(): any {
    return this._parsedConfig();
  }
}

const configPath = path.join(process.cwd(), 'uscs.yaml');
const configValidator = new ConfigValidator();
const configParser = new ConfigParser();
const config = new Config(configPath, configValidator, configParser);

export default config;
