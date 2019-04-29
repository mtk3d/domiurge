import {Hook} from '@oclif/config';
import * as fs from 'fs';
import * as path from 'path';

import config from '../../services/config';

const hook: Hook<'init'> = async function () {
  try {
    fs.accessSync(this.config.dataDir, fs.constants.F_OK);
  } catch {
    fs.mkdirSync(this.config.dataDir, {recursive: true});
  }

  let configPath = path.join(process.cwd(), 'domiurge.yaml');

  try {
    fs.accessSync(configPath, fs.constants.F_OK);
  } catch {
    configPath = path.join(process.cwd(), 'domiurge.yml');
    try {
      fs.accessSync(configPath, fs.constants.F_OK);
    } catch {
      this.log('There is no domiurge.yaml file');
      this.exit();
    }
  }
  try {
    config.init(configPath);
  } catch (error) {
    this.log(error.toString());
    this.exit();
  }
};

export default hook;
