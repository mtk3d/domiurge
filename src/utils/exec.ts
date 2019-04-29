import {execSync} from 'child_process';

export default (command: string): string => {
  return execSync(command, {stdio: [null, null, null]}).toString('utf8').trim();
};
