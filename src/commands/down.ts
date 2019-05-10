import {Command} from '@oclif/command';

import config from '../services/config';
import ExecTask from '../tasks/exec-task';

export default class Down extends Command {
  static description = 'Kill all containers and remove networks';

  async run() {
    const cnf = config.getConfig();

    const task = new ExecTask();

    if (cnf.networks.length) {
      const taskSlug = task.addTask('Remove networks');

      cnf.networks.forEach((network: string) => {
        const title = `Removing ${network} network`;
        const command = `if (docker network inspect ${network} --format='{{println .Name}}'); then docker network rm ${network}; else echo '${network} network does not exist'; fi`;
        task.addCommand(taskSlug, title, command);
      });
    }

    cnf.services.forEach((service: any) => {
      const {name, path, docker} = service;

      const taskSlug = task.addTask(`Run ${name}`);

      if (docker) {
        const title = `Run docker-compose for ${name}`;
        const command = `cd ${path}; docker-compose down; cd -`;
        task.addCommand(taskSlug, title, command);
      }
    });

    task.getTask().run().catch(err => {
      this.error(err);
    });
  }
}
