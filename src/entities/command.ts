export default class Command {
    name: string;
    environment: string;
    script: Array<string> = [];

    constructor(
        name: string,
        environment: string
    ) {
        this.name = name;
        this.environment = environment;
    }

    setName(name: string) : void {
        this.name = name;
    }

    getName() : string {
        return this.name;
    }

    setEnvironment(environment: string) : void {
        this.environment = environment;
    }

    getEnvironment() : string {
        return this.environment;
    }

    setScriptCommand(command: string) : void {
        this.script.push(command);
    }

    setScript(script: Array<string>) : void {
        this.script.concat(script);
    }

    getScript() : Array<string> {
        return this.script;
    }
}