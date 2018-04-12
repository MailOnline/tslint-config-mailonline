# `tslint-config-mailonline`

[![NPM version](http://img.shields.io/npm/v/tslint-config-mailonline.svg?style=flat-square)](https://www.npmjs.org/package/tslint-config-mailonline)
[![Travis build status](http://img.shields.io/travis/MailOnline/tslint-config-mailonline/master.svg?style=flat-square)](https://travis-ci.org/MailOnline/tslint-config-mailonline)

MailOnline TSLint configuration.

## Usage

Add `tslint-config-mailonline`, `tslint`, and `typescript` as development dependencies:

```bash
yarn add --dev tslint-config-mailonline tslint typescript
```

Create TSLint configuration file (`tslint.json`) that extends `tslint-config-mailonline`:

```json
{
  "extends": "tslint-config-mailonline"
}
```

## Extended configs

The package also has separate entry points for some environments. Simply extend from the entry point as described below

```json
{
  "extends": [
    "tslint-config-mailonline",
    "tslint-config-mailonline/react"
  ]
}
```

### react

```json
{
  "extends": "tslint-config-mailonline/react"
}
```

## Breaking changes

Any changes to this package that might cause code using it to not validate anymore, will be a semver-major change.
