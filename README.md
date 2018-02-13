
# node-moco

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Build Status](https://travis-ci.org/Burnett01/node-moco.svg?branch=master)](https://travis-ci.org/Burnett01/node-moco) [![npm version](https://badge.fury.io/js/node-moco.svg?ver=88)](https://badge.fury.io/js/node-moco)

A microservice api-client to access [Mocoapp.com API](https://www.mocoapp.com/funktionen/21-api/).

This module is based on my [Extended-Request](https://github.com/Burnett01/extended-request) package,<br>
in fact it's using that package in order to perform the api requests.

Features:
  * GZIP compression (thanks to [Extended-Request](https://github.com/Burnett01/extended-request))
  * ES6 & ES5 support
  * Promises & classic nodeback

---

# Table of contents
* [API Reference](#api-reference)
* [Property Reference](#property-reference)
* [Function Reference](#function-reference)
  * [Create a Moco instance](#create-a-moco-instance)
  * [Get Activities](#get-activities)
  * [Get Schedules](#get-schedules)
  * [Get Users](#get-users)
* [Setup / Install](#setup-install)
* [Build](#build)
  * [NPM](#npm)
  * [Make](#make)
* [Unit-Tests](#unit-tests)
  * [Make](#make-1)
  * [NPM](#npm-1)
* [Contributing](#contributing)
* [License](#license)

---

## API Reference

```javascript
Moco(
    [Object {
      domain: String='mycompany',
      debug: Boolean=false,
      token: String=''
    } details]
) -> Object {
    /* Constants */
    this: Object=this,

    /* Methods */
    getActivities: [String=from, String=to, function(class ErrorClass err, null ok) cb] | Promise
    getSchedules: [String=from, String=to, function(class ErrorClass err, null ok) cb] | Promise
    getUsers: [function(class ErrorClass err, null ok) cb] | Promise
}

```

---

## Property reference:

| Property | Description |
| ------ | ----------- |
| details | An object containing configuration details |
| domain | The first part of your MOCO domain (eg. mycompany) |
| apikey | Your MOCO integration API Key |
| debug | Whether to debug requests |
---

## Function reference:

### Create a Moco instance

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| domain | mycompany | Yes | |
| apikey | your key | Yes | |
| debug | enable debugging | No | false |

```javascript
const company = new Moco({
  domain: 'mycompany',
  apikey: '<key here>'
})
```

---

### Get Activities

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| from | for example: 2018-02-01 | No | Current date |
| to | for example: 2018-02-01 | No | Current date |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getActivities((err, response) => {
  console.log(err, response)
})

mycompany.getActivities('2017-01-02', '2017-01-02', (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getActivities()
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})

mycompany.getActivities('2017-01-02', '2017-01-02')
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

---

### Get Schedules

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| from | for example: 2018-02-01 | No | Current date |
| to | for example: 2018-02-01 | No | Current date |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getSchedules((err, response) => {
  console.log(err, response)
})

mycompany.getSchedules('2017-01-02', '2017-01-02', (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getSchedules()
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})

mycompany.getSchedules('2017-01-02', '2017-01-02')
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

---

### Get Users

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getUsers((err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getUsers()
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})

```

---

## Setup / Install

Use `npm install node-moco` 

```javascript
// ES6
import Moco from 'node-moco'

// ES5
var Moco = require('node-moco').default
```

---

## Build

### NPM

```npm run build```

### Make

```make build```

---

## Unit-Tests

The testing-framework used by this module is [Mocha](https://github.com/mochajs/mocha) with the BDD / TDD assertion library [Chai](https://github.com/chaijs/chai).

* test/test.default.js `Performs 1 tests` | [Source](../master/test/test.default.js)

Output using [Mocha](https://github.com/mochajs/mocha) `list` reporter:   

<img src="https://i.imgur.com/HFd1jii.png" />

Default reporter: `list`

### Make

```make test```

### NPM

```npm test```

---

## Contributing

You're very welcome and free to contribute. Thank you.

---

## License

[MIT](LICENSE)
