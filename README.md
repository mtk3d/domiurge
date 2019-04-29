domiurge
====

CLI for management docker based microservices apps

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/domiurge.svg)](https://npmjs.org/package/domiurge)
[![Codecov](https://codecov.io/gh/mtk3d/domiurge/branch/master/graph/badge.svg)](https://codecov.io/gh/mtk3d/domiurge)
[![Downloads/week](https://img.shields.io/npm/dw/domiurge.svg)](https://npmjs.org/package/domiurge)
[![License](https://img.shields.io/npm/l/domiurge.svg)](https://github.com/mtk3d/domiurge/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g domiurge
$ domiurge COMMAND
running command...
$ domiurge (-v|--version|version)
domiurge/0.2.0 darwin-x64 node-v10.15.3
$ domiurge --help [COMMAND]
USAGE
  $ domiurge COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`domiurge containers ACTION`](#domiurge-containers-action)
* [`domiurge help [COMMAND]`](#domiurge-help-command)
* [`domiurge init`](#domiurge-init)
* [`domiurge mysql`](#domiurge-mysql)
* [`domiurge run COMMAND_NAME`](#domiurge-run-command_name)

## `domiurge containers ACTION`

Manage containers

```
USAGE
  $ domiurge containers ACTION

ARGUMENTS
  ACTION  (start|restart|rebuild) What you want to do with containers?
```

_See code: [src/commands/containers.ts](https://github.com/mtk3d/domiurge/blob/v0.2.0/src/commands/containers.ts)_

## `domiurge help [COMMAND]`

display help for domiurge

```
USAGE
  $ domiurge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `domiurge up`

Initialize project

```
USAGE
  $ domiurge up
```

_See code: [src/commands/up.ts](https://github.com/mtk3d/domiurge/blob/v0.2.0/src/commands/up.ts)_

## `domiurge mysql`

Clone mysql database from remote

```
USAGE
  $ domiurge mysql
```

_See code: [src/commands/mysql.ts](https://github.com/mtk3d/domiurge/blob/v0.2.0/src/commands/mysql.ts)_

## `domiurge run COMMAND_NAME`

Run commands for services

```
USAGE
  $ domiurge run COMMAND_NAME

ARGUMENTS
  COMMAND_NAME  Command name from config
```

_See code: [src/commands/run.ts](https://github.com/mtk3d/domiurge/blob/v0.2.0/src/commands/run.ts)_
<!-- commandsstop -->
