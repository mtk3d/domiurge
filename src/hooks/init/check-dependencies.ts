import {Hook} from '@oclif/config';
import cmdExists from '../../utils/cmd-exists';

const hook: Hook<'init'> = async function () {
  // check only once
  const dockerExist = cmdExists('docker');
  const mysqlExist = cmdExists('mysql');
  const mysqldumpExist = cmdExists('mysqldump');

  if (!dockerExist || !mysqlExist || !mysqldumpExist) {

    if (!dockerExist) {
      this.log('You must have Docker Desktop installed');
    }

    if (!mysqlExist || !mysqldumpExist) {
      this.log('You must have mysql-client installed');
    }
    
    this.exit();
  }
};

export default hook;
