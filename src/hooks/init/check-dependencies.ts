import {Hook} from '@oclif/config';

import exec from '../../utils/exec';

function checkCommand(program: string) {
  const script = `if ! type ${program} > /dev/null; then echo 0; else echo 1; fi`;
  const result = exec(script);
  return result === '1';
}

const hook: Hook<'init'> = async function () {
  const dockerExist = checkCommand('docker');
  const mysqlExist = checkCommand('mysql');
  const mysqldumpExist = checkCommand('mysqldump');

  if (!dockerExist) {
    this.log('You must have Docker Desktop installed');
  }

  if (!mysqlExist || !mysqldumpExist) {
    this.log('You must have mysql-client installed');
  }

  if (!dockerExist || !mysqlExist || !mysqldumpExist) {
    this.exit();
  }
};

export default hook;
