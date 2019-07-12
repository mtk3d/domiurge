import {Command, flags} from '@oclif/command';
import exec from '../utils/exec';
import getContainersNames from '../utils/get-containers-names';
import config from '../services/config';
import cli from 'cli-ux';
import clc from 'cli-color';

export default class Status extends Command {
  static description = 'Get status of project containers'

  async run() {
    const runnedContainersList = exec('docker ps --format "{{.Names}}"');
    const runnedContainers = runnedContainersList.split("\n");

    const cnf = config.getConfig();
    const paths = cnf.services
      .filter((service: any) => service.docker)
      .map((service: any) => service.path);
    
    let containers = getContainersNames(paths);

    containers = containers.map((name: any) => {
      const runned = runnedContainers.includes(name);
      return {
        "name": name,
        "status": runned ? clc.green("up") : clc.red("down")
      }
    });

    const labels: any = {
      name: {
        header: "NAME"
      }, 
      status: {
        header: "STATUS"
      }
    };

    cli.table(containers, labels);
  }
}
