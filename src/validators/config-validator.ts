import * as Ajv from 'ajv';

import ValidatorInterface from './validator-interface';

// const mainConfigSchema = require('./schemas/main-config-schema.json');

export default class ConfigValidator implements ValidatorInterface {
  validate(data: object): boolean | string {
    const ajv = new Ajv();
    // const valid = ajv.validate(mainConfigSchema, data);

    // if (!valid) {
    //   return ajv.errorsText();
    // }

    return true;
  }
}
