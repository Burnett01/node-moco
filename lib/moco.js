/*
* The MIT License (MIT)
*
* Product:      node-moco
* Description:  A microservice api-client to access Mocoapp.com API
*
* Copyright (c) 2018-2020 Steven Agyekum <agyekum@posteo.de>
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

import ExtendedRequest from 'extended-request'
import { T, ERR, unpackArgs, buildParams } from './util'

class Moco {
  /**
   * Constructor
   * @param {object} details - The config data
   */
  constructor(details) {
    if (!details || typeof details !== T.OBJECT)
      throw ERR.PARAM_NON_OBJECT

    const host = '.mocoapp.com'

    details.host = details.host || details.domain + host
    details.port = details.port || 443
    details.endpoint = details.endpoint || '/api/v1'

    details.auth = {
      'provider': 'token',
      'token': details.apikey || ''
    }

    ExtendedRequest.DEBUG = details.debug || false
    this.driver = new ExtendedRequest(details)

    this.paths =  {
      'projects'    : '/projects',
      'projects:as' : '/projects/assigned',
      'projects:ex' : '/projects/expenses',
      'activities'  : '/activities',
      'companies'   : '/companies',
      'schedules'   : '/schedules',
      'deals'       : '/deals',
      'offers'      : '/offers',
      'units'       : '/units',
      'users'       : '/users',
      'users:em'    : '/users/employments',
      'users:hd'    : '/users/holidays',
      'comments'    : '/comments',
      'invoices'    : '/invoices',
      'invoices:pm' : '/invoices/payments',
      'contacts:ppl': '/contacts/people',
    }
  }

  /**
   * Peform HTTP/S request
   * @param {string} path - The uri path
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  perform(path, params, cb) {
    let [ p, c ] = unpackArgs(params, cb)
    return this.driver.request(`${path}${buildParams(p)}`, c)
  }

  /**
   * Query Projects
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getProjects(params, cb) {
    return this.perform(this.paths['projects'], params, cb)
  }

  /**
   * Query Project
   * @param {string|number} id - The id of a project
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getProject(id, cb) {
    return this.perform(this.paths['projects'], id, cb)
  }

  /**
   * Query Assigned Projects
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getProjectsAssigned(params, cb) {
    return this.perform(this.paths['projects:as'], params, cb)
  }

  /**
   * Query Projects Expenses
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getProjectsExpenses(params, cb) {
    return this.perform(this.paths['projects:ex'], params, cb)
  }

  /**
   * Query Activities
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getActivities(params, cb) {
    return this.perform(this.paths['activities'], params, cb)
  }

  /**
   * Query Activity
   * @param {string|number} id - The id of an activity
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getActivity(id, cb) {
    return this.perform(this.paths['activities'], id, cb)
  }

  /**
   * Query Companies
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getCompanies(params, cb) {
    return this.perform(this.paths['companies'], params, cb)
  }

  /**
   * Query Company
   * @param {string|number} id - The id of a company
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getCompany(id, cb) {
    return this.perform(this.paths['companies'], id, cb)
  }

  /**
   * Query Schedules
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getSchedules(params, cb) {
    return this.perform(this.paths['schedules'], params, cb)
  }

  /**
   * Query Schedule
   * @param {string|number} id - The id of a schedule
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getSchedule(id, cb) {
    return this.perform(this.paths['schedules'], id, cb)
  }

  /**
   * Query Deals/Leads
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getDeals(params, cb) {
    return this.perform(this.paths['deals'], params, cb)
  }

  /**
   * Query Deal/Lead
   * @param {string|number} id - The id of a deal
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getDeal(id, cb) {
    return this.perform(this.paths['deals'], id, cb)
  }

  /**
   * Query Offers
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getOffers(params, cb) {
    return this.perform(this.paths['offers'], params, cb)
  }

  /**
   * Query Offer
   * @param {string|number} id - The id of an offer
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getOffer(id, cb) {
    return this.perform(this.paths['offers'], id, cb)
  }

  /**
   * Query Invoices
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getInvoices(params, cb) {
    return this.perform(this.paths['invoices'], params, cb)
  }

  /**
   * Query Invoice
   * @param {string|number} id - The id of an invoice
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getInvoice(id, cb) {
    return this.perform(this.paths['invoices'], id, cb)
  }

  /**
   * Query Invoice Payments
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getInvoicePayments(params, cb) {
    return this.perform(this.paths['invoices:pm'], params, cb)
  }

  /**
   * Query Invoice Payment
   * @param {string|number} id - The id of a payment
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getInvoicePayment(id, cb) {
    return this.perform(this.paths['invoices:pm'], id, cb)
  }

  /**
   * Query Units
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUnits(params, cb) {
    return this.perform(this.paths['units'], params, cb)
  }

  /**
   * Query Unit
   * @param {string|number} id - The id of a unit
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUnit(id, cb) {
    return this.perform(this.paths['units'], id, cb)
  }

  /**
   * Query Users
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUsers(params, cb) {
    return this.perform(this.paths['users'], params, cb)
  }

  /**
   * Query User
   * @param {string|number} id - The id of a user
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUser(id, cb) {
    return this.perform(this.paths['users'], id, cb)
  }

  /**
   * Query User Employments
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUserEmployments(params, cb) {
    return this.perform(this.paths['users:em'], params, cb)
  }

  /**
   * Query User Employment
   * @param {string|number} id - The id of a user
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUserEmployment(id, cb) {
    return this.perform(this.paths['users:em'], id, cb)
  }

  /**
   * Query User Holidays
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUserHolidays(params, cb) {
    return this.perform(this.paths['users:hd'], params, cb)
  }

  /**
   * Query User Holiday
   * @param {string|number} id - The id of a user
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getUserHoliday(id, cb) {
    return this.perform(this.paths['users:hd'], id, cb)
  }

  /**
   * Query Contact People
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getContactsPeople(params, cb) {
    return this.perform(this.paths['contacts:ppl'], params, cb)
  }

  /**
   * Query Contact Person
   * @param {string|number} id - The id of a person
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getContactsPerson(id, cb) {
    return this.perform(this.paths['contacts:ppl'], id, cb)
  }

  /**
   * Query Comments
   * @param {object} params - The params to query for
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getComments(params, cb) {
    return this.perform(this.paths['comments'], params, cb)
  }

  /**
   * Query Comment
   * @param {string|number} id - The id of a comment
   * @param {nodeback} cb - An optional nodeback
   * @returns {any} - Either results object or err
   */
  getComment(id, cb) {
    return this.perform(this.paths['comments'], id, cb)
  }

}

export default Moco
module.exports = Moco
