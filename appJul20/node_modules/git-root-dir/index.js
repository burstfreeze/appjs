'use strict';

const { dirname } = require('path');
const findUp = require('find-up');

const gitRootDir = (cwd = process.cwd()) =>
  findUp('.git', { cwd }).then(
    filepath => (filepath ? dirname(filepath) : null)
  );

module.exports = gitRootDir;
