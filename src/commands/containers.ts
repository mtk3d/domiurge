import {Command} from '@oclif/command';

import config from '../services/config';
import ExecTask from '../tasks/exec-task';

export default class Containers extends Command {
  static description = 'Manage containers';

  static args = [
    {
      name: 'action',
      required: true,
      description: 'What you want to do with containers?',
      options: [
        'start',
        'restart',
        'rebuild'
      ]
    }
  ];

  async run() {
    const {args: {action}} = this.parse(Containers);

    const cnf = config.getConfig();

    const task = new ExecTask();

    cnf.services.forEach((service: any) => {
      const {name, path, docker} = service;

      if (!docker) {
        return; // skip loop when service doesn't have docker
      }

      const taskSlug = task.addTask(`Running scripts for ${name}`);

      if (action !== 'start') {
        const title = `Killing ${name} containers`;
        const command = `cd ${path}; docker-compose down; cd -`;
        task.addCommand(taskSlug, title, command);
      }

      if (action === 'restart' || action === 'start') {
        const title = `Running ${name} containers`;
        const command = `cd ${path}; docker-compose up -d; cd -`;
        task.addCommand(taskSlug, title, command);
      }

      if (action === 'rebuild') {
        const title = `Building and running ${name} containers`;
        const command = `cd ${path}; docker-compose up -d --build; cd -`;
        task.addCommand(taskSlug, title, command);
      }
    });

    task.getTask().run().catch(err => {
      this.error(err);
    });
  }
}
