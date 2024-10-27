#!/usr/bin/env node
import getDiff from '../src/index.js';

import { Command } from 'commander';

const program = new Command();

//const { program } = require('commander');

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format (default: "stylish")')
  .action((filepath1, filepath2, option) => {
    const result = getDiff(filepath1, filepath2, option.format);
    console.log(result);
  });
program.parse();
