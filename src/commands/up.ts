import BaseCommand from '../base';
import config from '../services/config';
import ExecTask from '../tasks/exec-task';

export default class Up extends BaseCommand {
  static description = 'Launch project';

  async run() {
    const cnf = config.getConfig();

    const task = new ExecTask();

    if (cnf.networks.length) {
      const taskSlug = task.addTask('Create networks');

      cnf.networks.forEach((network: string) => {
        const title = `Creating ${network} network`;
        const command = `if (docker network inspect ${network} --format='{{println .Name}}'); then echo 'Already exists'; else docker network create ${network}; fi`;
        task.addCommand(taskSlug, title, command);
      });
    }

    cnf.services.forEach((service: any) => {
      const {name, path, docker, git, local_init_script} = service;

      const taskSlug = task.addTask(`Run ${name}`);

      if (git) {
        const {branch, repository} = git;
        const title = `Clone ${name} to ${path} on ${branch}`;
        const command = `if [ ! -d ${path} ] ; then git clone --branch ${branch} ${repository} ${path}; fi`;
        task.addCommand(taskSlug, title, command);
      }

      if (local_init_script && local_init_script.length) {
        local_init_script.forEach((script: string) => {
          const title = `Run "${script}" for ${name}`;
          const command = `cd ${path}; ${script}; cd -`;
          task.addCommand(taskSlug, title, command);
        });
      }

      if (docker) {
        const title = `Run docker-compose for ${name}`;
        const command = `cd ${path}; docker-compose up -d; cd -`;
        task.addCommand(taskSlug, title, command);
      }
    });

    task.getTask().run().catch(err => {
      this.error(err);
    });
  }
}
