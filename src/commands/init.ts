import {Command, flags} from '@oclif/command';

import config from '../services/config';
import ExecTask from '../tasks/exec-task';

export default class Init extends Command {
  static description = 'describe the command here';

  static flags = {
    help: flags.help({char: 'h'})
  };

  static args = [{name: 'file'}];

  async run() {
    // const {args, flags} = this.parse(Init);
    const cnf = config.getConfig();

    let task = new ExecTask();

    cnf.services.forEach((service: any) => {
      const {name, path} = service;

      const taskSlug = task.addTask(`Init ${name}`);

      if (service.git) {
        const {git: {branch, repository}} = service;
        const title = `Clone ${name} to ${path} on ${branch}`;
        const command = `if [ ! -d ${path} ] ; then git clone --branch ${branch} ${repository} ${path}; fi`;
        task.addCommand(taskSlug, title, command);
      }

      if (service.local_init_script.length) {
        service.local_init_script.forEach((script: string) => {
          const title = `Run "${script}" for ${name}`;
          const command = `cd ${path}; ${script}; cd -`;
          task.addCommand(taskSlug, title, command);
        });
      }

      if (service.docker) {
        const title = `Run docker-compose for ${name}`;
        const command = `cd ${service.path}; docker-compose up -d; cd -`;
        task.addCommand(taskSlug, title, command);
      }
    });

    task.getTask().run().catch(err => {
      this.error(err);
    });
  }
}
