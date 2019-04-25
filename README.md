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
uscs/0.1.10 darwin-x64 node-v10.15.3
$ uscs --help [COMMAND]
USAGE
  $ uscs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`uscs containers ACTION`](#uscs-containers-action)
* [`uscs help [COMMAND]`](#uscs-help-command)
* [`uscs init`](#uscs-init)
* [`uscs mysql`](#uscs-mysql)
* [`uscs run COMMAND_NAME`](#uscs-run-command_name)

## `uscs containers ACTION`

Manage containers

```
USAGE
  $ uscs containers ACTION

ARGUMENTS
  ACTION  (start|restart|rebuild) What you want to do with containers?
```

_See code: [src/commands/containers.ts](https://github.com/mtk3d/uscs/blob/v0.1.10/src/commands/containers.ts)_

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

## `uscs init`

Initialize project

```
USAGE
  $ uscs init
```

_See code: [src/commands/init.ts](https://github.com/mtk3d/uscs/blob/v0.1.10/src/commands/init.ts)_

## `uscs mysql`

Clone mysql database from remote

```
USAGE
  $ uscs mysql
```

_See code: [src/commands/mysql.ts](https://github.com/mtk3d/uscs/blob/v0.1.10/src/commands/mysql.ts)_

## `uscs run COMMAND_NAME`

Run commands for services

```
USAGE
  $ uscs run COMMAND_NAME

ARGUMENTS
  COMMAND_NAME  Command name from config
```

_See code: [src/commands/run.ts](https://github.com/mtk3d/uscs/blob/v0.1.10/src/commands/run.ts)_
<!-- commandsstop -->
