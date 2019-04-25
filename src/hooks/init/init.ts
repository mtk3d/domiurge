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

  let configPath = path.join(process.cwd(), 'dockelop.yaml');

  try {
    fs.accessSync(configPath, fs.constants.F_OK);
  } catch {
    configPath = path.join(process.cwd(), 'dockelop.yml');
    try {
      fs.accessSync(configPath, fs.constants.F_OK);
    } catch {
      this.error('There is no dockerlop.yaml file');
      this.exit();
    }
  }

  config.init(configPath);
};

export default hook;
