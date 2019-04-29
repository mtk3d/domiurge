import {Hook} from '@oclif/config'

function checkCommand(program: string) {
  const script = `if ! type ${program} > /dev/null; then echo 0; else echo 1; fi`;

}

const hook: Hook<'init'> = async function (opts) {
  const dockerExist = checkCommand('docker');
  const mysqlExist = checkCommand('mysql');
  const mysqldumpExist = checkCommand('mysqldump');
}

export default hook
