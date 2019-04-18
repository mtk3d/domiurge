uscs
====

CLI for management docker based microservices apps

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/uscs.svg)](https://npmjs.org/package/uscs)
[![Codecov](https://codecov.io/gh/mtk3d/uscs/branch/master/graph/badge.svg)](https://codecov.io/gh/mtk3d/uscs)
[![Downloads/week](https://img.shields.io/npm/dw/uscs.svg)](https://npmjs.org/package/uscs)
[![License](https://img.shields.io/npm/l/uscs.svg)](https://github.com/mtk3d/uscs/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g uscs
$ uscs COMMAND
running command...
$ uscs (-v|--version|version)
uscs/0.0.0 darwin-x64 node-v10.15.3
$ uscs --help [COMMAND]
USAGE
  $ uscs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`uscs hello [FILE]`](#uscs-hello-file)
* [`uscs help [COMMAND]`](#uscs-help-command)

## `uscs hello [FILE]`

describe the command here

```
USAGE
  $ uscs hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ uscs hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mtk3d/uscs/blob/v0.0.0/src/commands/hello.ts)_

## `uscs help [COMMAND]`

display help for uscs

```
USAGE
  $ uscs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
