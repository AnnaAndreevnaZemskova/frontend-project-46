### Hexlet tests and linter status:
Difference calculator

[![Actions Status](https://github.com/AnnaAndreevnaZemskova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AnnaAndreevnaZemskova/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d2ae087d7b4328b00451/maintainability)](https://codeclimate.com/github/AnnaAndreevnaZemskova/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d2ae087d7b4328b00451/test_coverage)](https://codeclimate.com/github/AnnaAndreevnaZemskova/frontend-project-46/test_coverage)

Description:

A difference calculator is a program that determines the difference between two data structures.

Features:

Support for different input formats: yaml, json
Generate report in plain text, stylish and json

Requirements:

Node.js v18+ to run,   
Npm package version 8.19.2 or later

Deploy 

Copy repository and install the dependencies.

git clone https://github.com/AnnaAndreevnaZemskova/frontend-project-46
cd frontend-project-46/
make install

Usage example:

Help:  

 gendiff --help  
 Usage: gendiff [options] <filepath1> <filepath2>  

 Compares two configuration files and shows a difference.  

 Options:  
   -v, --version        output the current version  
   -f, --format <type>  output format (default: "stylish")  
   -h, --help           display help for command  
