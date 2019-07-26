import BaseCommand from '../base';

import config from '../services/config';
import ExecTask from '../tasks/exec-task';

export default class Run extends BaseCommand {
  static description = 'Run commands for services';

  static args = [
    {
      name: 'command_name',
      required: true,
      description: 'Command name from config'
    }
  ];

  async run() {
    const {args: {command_name}} = this.parse(Run);

    const cnf = config.getConfig();

    const task = new ExecTask();

    cnf.services.forEach((service: any) => {
      const {name, path, commands} = service;

      if (!commands) {
        return;
      }

      const commandToRun = commands.find((command: any) => {
        return command.name === command_name;
      });

      if (commandToRun) {
        const {script, environment} = commandToRun;
        const taskSlug = task.addTask(`Running command ${commandToRun.name} for ${name}`);

        if (environment === 'container') {
          script.forEach((run: string) => {
            const title = `${run}`;
            const command = `docker exec ${name}-php ${run}`;
            task.addCommand(taskSlug, title, command);
          });
          return;
        }

        script.forEach((run: string) => {
          const title = `${run}`;
          const command = `cd ${path}; ${run}; cd -`;
          task.addCommand(taskSlug, title, command);
        });
      }
    });

    task.getTask().run().catch(err => {
      this.error(err);
    });
  }
}
