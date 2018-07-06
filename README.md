# `tslint` Config

[![NPM version](http://img.shields.io/npm/v/tslint-config-mailonline.svg?style=flat-square)](https://www.npmjs.org/package/tslint-config-mailonline)
[![Travis build status](http://img.shields.io/travis/MailOnline/tslint-config-mailonline/master.svg?style=flat-square)](https://travis-ci.org/MailOnline/tslint-config-mailonline)

ThreadsStyling TSLint configuration.

## Usage

Add `@threads/tslint`, `tslint`, `typescript`, and `prettier` as development dependencies:

```bash
yarn add --dev @threads/tslint tslint typescript prettier
```

Create TSLint configuration file (`tslint.json`) that extends `@threads/tslint`:

```json
{
  "extends": "@threads/tslint"
}
```

Create `prettier.config.js` on the root of your project with these contents:

```js
module.exports = require('@threads/tslint/prettier');
```

Add the following script command to your `package.json`:

```json
{
  "lint:prettier": "prettier --ignore-path .gitignore --write './**/*.{js,jsx,ts,tsx}'",
  "lint:tslint": "tslint './**/*.{js,jsx,ts,tsx}' -t verbose",
  "lint": "yarn lint:prettier && yarn lint:tslint"
}
```

## Extended configs

The package also has separate entry points for some environments. Simply extend from the entry point as described below

```json
{
  "extends": [
    "@threads/tslint",
    "@threads/tslint/react"
  ]
}
```

### React

```json
{
  "extends": "@threads/tslint/react"
}
```

## Breaking changes

Any changes to this package that might cause code using it to not validate anymore, will be a semver-major change.
