import Command from './command';
import exec from '../utils/exec';

export default class Service {
    private _name: string;
    private _path: string;
    private _docker: boolean;
    private _init_script: Array<string> = [];
    private _local_init_script: Array<string> = [];
    private _commands: Array<Command> = [];
    private _status: boolean = false;

    constructor(
        name: string,
        path: string,
        docker: boolean
    ) {
        this._name = name;
        this._path = path;
        this._docker = docker;
    }

    set name(name: string) {
        this._name = name;
    }

    get name() : string {
        return this._name;
    }

    set path(path: string) {
        this._path = path;
    }

    get path() : string {
        return this._path;
    }

    set docker(docker: boolean) {
        this._docker = docker;
    }

    get docker() : boolean {
        return this._docker;
    }

    set initCommand(command: string) {
        this._init_script.push(command);
    }

    set initScript(script: Array<string>) {
        this._init_script.concat(script);
    }

    get initScript() : Array<string> {
        return this._init_script;
    }

    set localInitCommand(command: string) {
        this._local_init_script.push(command);
    }

    set localInitScript(script: Array<string>) {
        this._local_init_script.concat(script);
    }

    set command(command: Command) {
        this._commands.push(command);
    }

    set commands(commands: Array<Command>) {
        this._commands.concat(commands);
    }

    get commands() : Array<Command> {
        return this._commands;
    }

    getCommandByName(name: string) : Command | null {
        return this._commands.find((command: Command) => {
            return command.name = name;
        }) || null;
    }

    set status(status: string) {
        this._status = status === 'up';
    }

    get status() : string {
        return this._status ? 'up' : 'down';
    }

    up() : void {
        exec(`cd ${this.path}; docker-compose up -d; cd -`);
    }

    down() : void {
        exec(`cd ${this.path}; docker-compose down; cd -`);
    }

    rebuild() : void {
        exec(`cd ${this.path}; docker-compose up -d --build; cd -`);
    }
}