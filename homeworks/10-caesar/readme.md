# Caesar

**Deadline: 30.05.2021 23:59 Minsk**

# Task description

This is an application developed as part of the Nodejs course.

The task is to develop a program running on the [nodejs](https://nodejs.org/) platform version LTS (14.16.1 at the time of writing the program), which would allow you to encrypt and decrypt messages using the Caesar algorithm.

## Prerequisites

You must have the following programs installed to successfully install and use CAESAR-CLI:

- [Node.js](https://nodejs.org/) LTS & npm
- [git](https://git-scm.com/) CLI tool (optional)

You can check if you have the necessary software installed:

```bash
node -v
npm -v
```

If the necessary software is present on your PC you will see the corresponding version numbers. Make sure that the node version is at least 12.0.

### Install app dependencies

In the CLI (Windows command prompt, PowerShell, Cygwin, terminal, etc.), open the directory containing the app end-run following commands:

```bash
cd caesar-cli
npm install
```

## Usage

To launch the CAESAR-CLI, open the CLI, change the current working directory to the **caesar-cli** folder and run the following command:

```bash
node caesar-cli OPTIONS
```

Feel free to start using CAESAR-CLI with

```bash
ts-node caesar-cli --help
```

or

```bash
ts-node caesar-cli -h
```

When you run any of these commands, you will see detailed help for using the app

```
Usage: node caesar-cli options
Options:
      --version   Show version number                             [boolean]
  -s, --shift     Set the shift for decode/encode data            [number] [required]
  -a, --action    Specify what action you want to perform         [required] [choices: "encode", "decode"]
  -i, --input     Specify the file where to get the data from     [string]
  -o, --output    Specify the file to save the data to            [string]
  -h, --help      Show help                                       [boolean]
Examples:
  node caesar-cli --shift=7 --action=encode        Encode data from stdin with shift 7 and print result to stdout
  node caesar-cli -s 2 -a decode -i topsecret.txt  Decode topsecret.txt with shift 2 and print result to stdout
N.B.: 1. If the output file doesn't exist it wouldn't be created. You can write output stream only to the existing file.
      2. If --input option is omitted - STDIN is used as an input source. Use Ctrl+C for break input.
      3. If --output option is omitted - STDOUT is used as an output destination.
      4. --shift value can be negative and can exceed the size of the alphabet.
      5. Only English alphabet characters are encoded/decoded, all other characters will be kept intact.
      6. If --help is given the help is displayed and other options are ignored.
      7. If --version is given and --help has omitted the version of the app is displayed and other options are ignored.
Values for options can be set like "--action encode" (whitespace separated) or "--action=encode" (= separated). It doesn't matter.
```
Notes: Please, you must use Stream API for working with STDIN/STDOUT. 
- [Stream API](https://nodejs.org/api/stream.html#stream_stream) - Stream API docs

### Options

CAESAR-CLI accepts these options (short alias and full name):

- **-a, --action**: (_required_) define the action (encode or decode)
- **-s, --shift**: (_required_) define a shift
- **-i, --input**: (_optional_) an input file
- **-o, --output**: (_optional_) an output file

You can also use these options for get additional information about **CAESAR-CLI**:

- **-h, --help**: show help & exit
- **--version**: show app version & exit
