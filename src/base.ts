import Command from '@oclif/command';
import ServiceService from './services/service-service';
import CommandService from './services/command-service';
import { IConfig } from '@oclif/config';

export default abstract class extends Command {
  private _serviceService: ServiceService;

  constructor(argv: string[], config: IConfig) {
    super(argv, config);
    this._serviceService = this._setupServicesService();
  }

  async init() {

  }

  private _setupServicesService() {
    return new ServiceService([]);
  }

  public get serviceService() : ServiceService {
    return this._serviceService;
  }

  private _setupCommandService() {
    return new CommandService([]);
  }

  public get commandService() : CommandService {
    return this._commandService;
  }

  async catch(err) {
    // handle any error from the command
  }

  async finally(err) {
    // called after run and catch regardless of whether or not the command errored
  }
}