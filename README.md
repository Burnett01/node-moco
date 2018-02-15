
# node-moco

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Build Status](https://travis-ci.org/Burnett01/node-moco.svg?branch=master)](https://travis-ci.org/Burnett01/node-moco) [![npm version](https://badge.fury.io/js/node-moco.svg?ver=88)](https://badge.fury.io/js/node-moco)

A microservice api-client to access [Mocoapp.com API](https://www.mocoapp.com/funktionen/21-api/).

This module is based on my [Extended-Request](https://github.com/Burnett01/extended-request) package,<br>
in fact it's using that package in order to perform the api requests.

Features:
  * ES6 & ES5 support
  * Promises & classic nodeback

---

# Table of contents
* [API Reference](#api-reference)
* [Property Reference](#property-reference)
* [Function Reference](#function-reference)
  * [Create a Moco instance](#create-a-moco-instance)
  * [Get Projects](#get-projects)
  * [Get Project](#get-project)
  * [Get Activities](#get-activities)
  * [Get Activity](#get-activity)
  * [Get Schedules](#get-schedules)
  * [Get Schedule](#get-schedule)
  * [Get Deals](#get-deals)
  * [Get Deal](#get-deal)
  * [Get Offers](#get-offers)
  * [Get Offer](#get-offer)
  * [Get Invoices](#get-invoices)
  * [Get Invoice](#get-invoice)
  * [Get Units](#get-units)
  * [Get Unit](#get-unit)
  * [Get Users](#get-users)
  * [Get User](#get-user)
  * [Get Contacts Organizations](#get-contacts-organizations)
  * [Get Contacts Organization](#get-contacts-organization)
  * [Get Contacts People](#get-contacts-people)
  * [Get Contacts Person](#get-contacts-person)
  * [Get Comments](#get-comments)
  * [Get Comment](#get-comment)
* [Sorting](#sorting)
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
      domain: String='mycompany'
      debug: Boolean=false
      token: String=''
    } details]
) -> Object {
    /* Constants */
    this: Object=this

    /* Methods */
    getProjects: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getProjects: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getProject: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getActivities: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getActivity: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getSchedules: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getSchedule: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getDeals: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getDeal: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getOffers: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getOffer: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getInvoices: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getInvoice: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getUnits: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getUnit: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getUsers: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getUser: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getContactsOrganizations: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getContactsOrganization: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getContactsPeople: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getContactsPerson: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getComments: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getComment: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise
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

### Get Projects

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| options | for example: { include_archived: false } | No | None |
| cb | optional callback (in case you don't want to use promises) | No | |

Options reference:<br>
[#187-get-projects](https://www.mocoapp.com/funktionen/21-api/inhalt/61-projekte#187-get-projects)<br>
[Sorting](#sorting)

```javascript
mycompany.getProjects((err, response) => {
  console.log(err, response)
})

mycompany.getProjects({
  include_archived: false
},
(err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getProjects()
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})

mycompany.getProjects({
  include_archived: false
})
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

### Get Project

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| id | for example: 58844  | Yes | None |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getProject(58844, (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getProject(58844)
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

---

### Get Activities

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| options | for example: { from: '2018-02-01' } | No | None |
| cb | optional callback (in case you don't want to use promises) | No | |

Options reference:<br>
[#214-get-activities](https://www.mocoapp.com/funktionen/21-api/inhalt/65-zeiteintraege#214-get-activities)<br>
[Sorting](#sorting)

```javascript
mycompany.getActivities((err, response) => {
  console.log(err, response)
})

mycompany.getActivities({
  from: '2017-01-02'
  to: '2017-01-02'
},
(err, response) => {
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

mycompany.getActivities({
  from: '2017-01-02'
  to: '2017-01-02'
})
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

### Get Activity

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| id | for example: 58844  | Yes | None |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getActivity(58844, (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getActivity(58844)
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
| options | for example: { from: '2018-02-01' } | No | None |
| cb | optional callback (in case you don't want to use promises) | No | |

Options reference:<br>
[#254-get-schedules](https://www.mocoapp.com/funktionen/21-api/inhalt/66-planung#254-get-schedules)<br>
[Sorting](#sorting)

```javascript
mycompany.getSchedules((err, response) => {
  console.log(err, response)
})

mycompany.getSchedules({
  from: '2017-01-02'
  to: '2017-01-02'
}, 
(err, response) => {
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

mycompany.getSchedules({
  from: '2017-01-02'
  to: '2017-01-02'
})
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

### Get Schedule

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| id | for example: 58844  | Yes | None |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getSchedule(58844, (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getSchedule(58844)
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
| options | | No | None |
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

### Get User

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| id | for example: 58844  | Yes | None |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.User(58844, (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.User(58844)
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

---

### Get Deals

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#221-get-deals](https://www.mocoapp.com/funktionen/21-api/inhalt/67-leads#221-get-deals)<br>
[Sorting](#sorting)

### Get Deal

Call as shown above in the [API Reference](#api-reference).

---

### Get Offers

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#224-get-offers](https://www.mocoapp.com/funktionen/21-api/inhalt/68-angebote#224-get-offers)<br>
[Sorting](#sorting)

### Get Offer

Call as shown above in the [API Reference](#api-reference).

---

### Get Invoices

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#227-get-invoices](https://www.mocoapp.com/funktionen/21-api/inhalt/69-rechnungen#227-get-invoices)<br>
[Sorting](#sorting)

### Get Invoice

Call as shown above in the [API Reference](#api-reference).

---

### Get Units

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#230-get-units](https://www.mocoapp.com/funktionen/21-api/inhalt/70-teams#230-get-units)<br>
[Sorting](#sorting)

### Get Unit

Call as shown above in the [API Reference](#api-reference).

---

### Get Contacts Organizations

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#233-get-contacts-organizations](https://www.mocoapp.com/funktionen/21-api/inhalt/72-kontakte-firmen#233-get-contacts-organizations)<br>
[Sorting](#sorting)

### Get Contacts Organization

Call as shown above in the [API Reference](#api-reference).

---

### Get Contacts People

Call as shown above in the [API Reference](#api-reference).

Available options: <br>
[#239-get-contacts-people](https://www.mocoapp.com/funktionen/21-api/inhalt/73-kontakte-personen#239-get-contacts-people)<br>
[Sorting](#sorting)

### Get Contacts Person

Call as shown above in the [API Reference](#api-reference).

---

### Get Comments

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#288-get-comments](https://www.mocoapp.com/funktionen/21-api/inhalt/82-notizen#288-get-comments)<br>
[Sorting](#sorting)

### Get Comment

Call as shown above in the [API Reference](#api-reference).

---

## Sorting

You can sort your results by adding ``sort_by``
to your options object.

```
sort_by: 'title'
sort_by: 'date desc'
```

Read more: [#293-sortierung](https://www.mocoapp.com/funktionen/21-api/inhalt/58-authentifizierung#293-sortierung)

---

## Setup / Install

Use `npm install node-moco` 

```javascript
// ES6
import Moco from 'node-moco'

// ES5
var Moco = require('node-moco')
```

---

## Build

### NPM

```npm run build```

### Make

```make build```

---

## Unit-Tests

The testing-framework used in this module is [Mocha](https://github.com/mochajs/mocha) with the BDD / TDD assertion library [Chai](https://github.com/chaijs/chai).

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
