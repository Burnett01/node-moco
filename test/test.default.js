/*
* The MIT License (MIT)
*
* Product:      node-moco
* Description:  A microservice api-client to access Mocoapp.com API
*
* Copyright (c) Steven Agyekum <agyekum@posteo.de>
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software
* and associated documentation files (the "Software"), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
* and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies
* or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
* TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
* THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
* TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
*/

const { expect } = require('chai')
const Moco = require('../lib/moco')

let moco = undefined

describe('Moco [TEST]', () => {

  it('creates a moco instance', done => {

    moco = new Moco( {
      domain: 'mycompany',
      apikey: '',
      debug: true
    })

    done()

  })

  it('checks for properties and types', done => {

    expect(moco).to.be.a('object')

    expect(moco).to.have.property('driver')
    expect(moco.driver).to.be.a('object')

    expect(moco).to.have.property('paths')
    expect(moco.paths).to.be.a('object')

    expect(moco).to.have.property('perform')
    expect(moco.perform).to.be.a('function')

    expect(moco).to.have.property('getActivities')
    expect(moco).to.have.property('getActivity')
    expect(moco.getActivities).to.be.a('function')
    expect(moco.getActivity).to.be.a('function')

    expect(moco).to.have.property('getCompanies')
    expect(moco).to.have.property('getCompany')
    expect(moco.getCompanies).to.be.a('function')
    expect(moco.getCompany).to.be.a('function')

    expect(moco).to.have.property('getComments')
    expect(moco).to.have.property('getComment')
    expect(moco.getComments).to.be.a('function')
    expect(moco.getComment).to.be.a('function')

    expect(moco).to.have.property('getContactsPeople')
    expect(moco).to.have.property('getContactsPerson')
    expect(moco.getContactsPeople).to.be.a('function')
    expect(moco.getContactsPerson).to.be.a('function')

    expect(moco).to.have.property('getDeals')
    expect(moco).to.have.property('getDeal')
    expect(moco.getDeals).to.be.a('function')
    expect(moco.getDeal).to.be.a('function')

    expect(moco).to.have.property('getDealCategories')
    expect(moco).to.have.property('getDealCategory')
    expect(moco.getDealCategories).to.be.a('function')
    expect(moco.getDealCategory).to.be.a('function')

    expect(moco).to.have.property('getInvoices')
    expect(moco).to.have.property('getInvoice')
    expect(moco.getInvoices).to.be.a('function')
    expect(moco.getInvoice).to.be.a('function')

    expect(moco).to.have.property('getInvoicePayments')
    expect(moco).to.have.property('getInvoicePayment')
    expect(moco.getInvoicePayments).to.be.a('function')
    expect(moco.getInvoicePayment).to.be.a('function')

    expect(moco).to.have.property('getOffers')
    expect(moco).to.have.property('getOffer')
    expect(moco.getOffers).to.be.a('function')
    expect(moco.getOffer).to.be.a('function')

    expect(moco).to.have.property('getProjects')
    expect(moco).to.have.property('getProject')
    expect(moco.getProjects).to.be.a('function')
    expect(moco.getProject).to.be.a('function')

    expect(moco).to.have.property('getProjectsAssigned')
    expect(moco).to.have.property('getProjectsExpenses')
    expect(moco.getProjectsAssigned).to.be.a('function')
    expect(moco.getProjectsExpenses).to.be.a('function')

    expect(moco).to.have.property('getPurchases')
    expect(moco).to.have.property('getPurchase')
    expect(moco.getPurchases).to.be.a('function')
    expect(moco.getPurchase).to.be.a('function')

    expect(moco).to.have.property('getPurchaseCategories')
    expect(moco).to.have.property('getPurchaseCategory')
    expect(moco.getPurchaseCategories).to.be.a('function')
    expect(moco.getPurchaseCategory).to.be.a('function')

    expect(moco).to.have.property('getSchedules')
    expect(moco).to.have.property('getSchedule')
    expect(moco.getSchedules).to.be.a('function')
    expect(moco.getSchedule).to.be.a('function')

    expect(moco).to.have.property('getUnits')
    expect(moco).to.have.property('getUnit')
    expect(moco.getUnits).to.be.a('function')
    expect(moco.getUnit).to.be.a('function')

    expect(moco).to.have.property('getUsers')
    expect(moco).to.have.property('getUser')
    expect(moco.getUsers).to.be.a('function')
    expect(moco.getUser).to.be.a('function')

    expect(moco).to.have.property('getUserEmployments')
    expect(moco).to.have.property('getUserEmployment')
    expect(moco.getUserEmployments).to.be.a('function')
    expect(moco.getUserEmployment).to.be.a('function')

    expect(moco).to.have.property('getUserHolidays')
    expect(moco).to.have.property('getUserHoliday')
    expect(moco.getUserHolidays).to.be.a('function')
    expect(moco.getUserHoliday).to.be.a('function')

    done()
  })

})
