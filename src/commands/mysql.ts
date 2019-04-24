import {Command} from '@oclif/command';
import * as fs from 'fs';
import * as path from 'path';

import config from '../services/config';
import ExecTask from '../tasks/exec-task';

export default class Mysql extends Command {
  static description = 'Clone mysql database from remote';

  async run() {
    const cnf = config.getConfig();

    const task = new ExecTask();

    fs.mkdirSync(this.config.dataDir, {recursive: true});

    if (cnf.mysql && cnf.mysql.databases && cnf.mysql.databases.length && cnf.mysql.from && cnf.mysql.to) {
      cnf.mysql.databases.forEach((databaseName: any) => {
        const taskSlug = task.addTask(`Clone ${databaseName} database`);
        const dumpPath = path.join(this.config.dataDir, `${databaseName}_dump.sql`);

        task.addCommand(taskSlug,
          'Export database',
          this._exportDatabaseCommand(cnf.mysql.from, databaseName, dumpPath));

        task.addCommand(taskSlug,
          'Create database if not exists',
          this._createDatabaseCommand(cnf.mysql.to, databaseName));

        task.addCommand(taskSlug,
          'Export database',
          this._exportDatabaseCommand(cnf.mysql.to, databaseName, dumpPath));
      });
    }

    task.getTask().run().catch(err => {
      this.error(err);
    });
  }

  _exportDatabaseCommand(mysql: any, name: string, path: string) {
    const {username, password, host, port} = mysql;
    return `mysqldump -u ${username} -p${password} --host=${host} --port=${port} ${name} > ${path}`;
  }

  _createDatabaseCommand(mysql: any, name: string) {
    const {username, password, host, port} = mysql;
    return `mysql -u ${username} -p${password} --host=${host} --port=${port} -e 'CREATE DATABASE IF NOT EXISTS \`${name}\` CHARACTER SET utf8 COLLATE utf8_general_ci'`;
  }

  _importDatabaseCommand(mysql: any, name: string, path: string) {
    const {username, password, host, port} = mysql;
    return `mysql -u ${username} -p${password} --host=${host} --port=${port} ${name} < ${path}`;
  }
}
