import ValidatorInterface from './validator-interface';
import * as Ajv from 'ajv';

const mainConfigSchema = require('./schemas/main-config-schema.json');

export default class ConfigValidator implements ValidatorInterface {
  validate(data: object) : boolean | string {
    const ajv = new Ajv;
    const valid = ajv.validate(mainConfigSchema, data);

    if (!valid) {
      return ajv.errorsText();
    }

    return true;
  }
}