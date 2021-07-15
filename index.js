const { file } = require('@babel/types');
const fs = require('fs');
const inquirer = require ('inquirer');
const jest = require('jest');

// Linking each js file.
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Begin Manager prompts. 
const manager = new Manager();
