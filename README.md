
# node-moco

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Build Status](https://travis-ci.org/Burnett01/node-moco.svg?branch=master)](https://travis-ci.org/Burnett01/node-moco) [![npm version](https://badge.fury.io/js/node-moco.svg?ver=88)](https://badge.fury.io/js/node-moco)

A microservice api-client to access [Mocoapp.com API](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/README.md).

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
  * [Get Projects Assigned](#get-projects-assigned)
  * [Get Activities](#get-activities)
  * [Get Activity](#get-activity)
  * [Get Companies](#get-companies)
  * [Get Company](#get-company)
  * [Get Schedules](#get-schedules)
  * [Get Schedule](#get-schedule)
  * [Get Deals](#get-deals)
  * [Get Deal](#get-deal)
  * [Get Offers](#get-offers)
  * [Get Offer](#get-offer)
  * [Get Invoices](#get-invoices)
  * [Get Invoice](#get-invoice)
  * [Get Invoice Payments](#get-invoice-payments)
  * [Get Invoice Payment](#get-invoice-payment)
  * [Get Units](#get-units)
  * [Get Unit](#get-unit)
  * [Get Users](#get-users)
  * [Get User](#get-user)
  * [Get User Employments](#get-user-employments)
  * [Get User Employment](#get-user-employment)
  * [Get User Holidays](#get-user-holidays)
  * [Get User Holiday](#get-user-holiday)
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
* [Notable Changes](CHANGES.md)
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
    getProject: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise
    getProjectsAssigned: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise

    getActivities: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getActivity: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getCompanies: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getCompany: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getSchedules: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getSchedule: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getDeals: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getDeal: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getOffers: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getOffer: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getInvoices: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getInvoice: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getInvoicePayments: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getInvoicePayment: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getUnits: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getUnit: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getUsers: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getUser: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getUserEmployments: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getUserEmployment: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

    getUserHolidays: [Object=options, function(class ErrorClass err, any results) {} cb] | Promise
    getUserHoliday: [String|Number=id, function(class ErrorClass err, any results) {} cb] | Promise

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
[#187-get-projects](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/projects.md#get-projects)<br>
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

### Get Projects Assigned

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#get-projects-assigned](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/projects.md#get-projectsassigned)<br>

---

### Get Activities

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| options | for example: { from: '2018-02-01' } | No | None |
| cb | optional callback (in case you don't want to use promises) | No | |

Options reference:<br>
[#214-get-activities](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/activities.md#get-activities)<br>
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

### Get Companies

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| options | for example: { type: 'customer' } | No | None |
| cb | optional callback (in case you don't want to use promises) | No | |

Options reference:<br>
[#get-companies](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/companies.md#get-companies)<br>
[Sorting](#sorting)

```javascript
mycompany.getCompanies((err, response) => {
  console.log(err, response)
})

mycompany.getCompanies({
  type: 'customer'
},
(err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getCompanies()
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})

mycompany.getCompanies({
  type: 'customer'
})
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

### Get Company

**Available options:**

| |  | Required | Default |
| ------ | ----------- | ------ | ----- |
| id | for example: 58844  | Yes | None |
| cb | optional callback (in case you don't want to use promises) | No | |

```javascript
mycompany.getCompany(58844, (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getCompany(58844)
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
[#254-get-schedules](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/schedules.md#get-schedules)<br>
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

Options reference:<br>
[#254-get-schedules](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/users.md#get-users)<br>
[Sorting](#sorting)

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
mycompany.getUser(58844, (err, response) => {
  console.log(err, response)
})

/* Promises */

mycompany.getUser(58844)
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.log(err)
})
```

---

### Get User Employments

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#get-user-employments](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/employments.md#get-usersemployments)<br>
[Sorting](#sorting)

---

### Get User Employment

Call as shown above in the [API Reference](#api-reference).

---

### Get User Holidays

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#get-user-holidays](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/holidays.md#get-usersholidays)<br>
[Sorting](#sorting)

---

### Get User Holiday

Call as shown above in the [API Reference](#api-reference).

---

### Get Deals

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#221-get-deals](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/deals.md#get-deals)<br>
[Sorting](#sorting)

---

### Get Deal

Call as shown above in the [API Reference](#api-reference).

---

### Get Offers

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#224-get-offers](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/offers.md#get-offers)<br>
[Sorting](#sorting)

### Get Offer

Call as shown above in the [API Reference](#api-reference).

---

### Get Invoices

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#227-get-invoices](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/invoices.md#get-invoices)<br>
[Sorting](#sorting)

### Get Invoice

Call as shown above in the [API Reference](#api-reference).

---

### Get Invoice Payments

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#invoice-payments](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/invoice_payments.md#get-invoicespayments)<br>
[Sorting](#sorting)

### Get Invoice Payment

Call as shown above in the [API Reference](#api-reference).

---

### Get Units

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#230-get-units](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/units.md#get-units)<br>
[Sorting](#sorting)

### Get Unit

Call as shown above in the [API Reference](#api-reference).

---

### Get Contacts People

Call as shown above in the [API Reference](#api-reference).

Available options: <br>
[#239-get-contacts-people](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/contacts.md#get-contactspeople)<br>
[Sorting](#sorting)

### Get Contacts Person

Call as shown above in the [API Reference](#api-reference).

---

### Get Comments

Call as shown above in the [API Reference](#api-reference).

Options reference:<br>
[#288-get-comments](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/sections/comments.md#get-comments)<br>
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

Read more: [#293-sortierung](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/README.md#sorting)

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
