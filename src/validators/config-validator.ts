import Ajv from 'ajv';

import * as mainConfigSchema from './schemas/main-config-schema.json';
import ValidatorInterface from './validator-interface';

export default class ConfigValidator implements ValidatorInterface {
  validate(data: object): boolean | string {
    const ajv = new Ajv();
    const valid = ajv.validate(mainConfigSchema, data);
    if (!valid) {
      throw new Error(ajv.errorsText());
    }

    return true;
  }
}
