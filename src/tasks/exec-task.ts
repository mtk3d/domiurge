import * as execa from 'execa';
import * as Listr from 'listr';
import slugify from 'slugify';

export default class ExecTask {
  tasks: any = {};

  addTask(title: string): string {
    const slug = slugify(title);
    this.tasks[slug] = {
      title,
      commands: []
    };

    return slug;
  }

  addCommand(slug: string, title: string, command: string) {
    this.tasks[slug].commands.push({
      title,
      command
    });
  }

  getTask() {
    let listrTasks: Array<any> = [];
    Object.values(this.tasks).forEach((task: any) => {
      let commandsTasks: Array<any> = [];
      task.commands.forEach((command: any) => {
        commandsTasks.push({
          title: command.title,
          task: () => execa.shell(command.command)
        });
      });
      listrTasks.push({
        title: task.title,
        task: () => new Listr(commandsTasks)
      });
    });
    return new Listr(listrTasks, {concurrent: 5});
  }
}
