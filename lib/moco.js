/*
* The MIT License (MIT)
*
* Product:      node-moco
* Description:  A microservice api-client to access Mocoapp.com API
*
* Copyright (c) 2018 Steven Agyekum <agyekum@posteo.de>
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
import { T, ERR, resolveTime, unpackArgs } from './util'

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
  }

  /**
   * Query Activities
   * @param {string} from - The date to start from (optional)
   * @param {string} to - The final date (optional)
   * @returns {Promise/CB} - A promise/cb that contains the results/err
   */
  getActivities(from, to, cb) {
    let [ f, t, c ] = unpackArgs(from, to, cb)
    f = resolveTime(f)
    t = resolveTime(t)
    return this.driver.request(`/activities?from=${f}&to=${t}`, c)
  }

  /**
   * Query Schedules
   * @param {string} from - The date to start from (optional)
   * @param {string} to - The final date (optional)
   * @returns {Promise/CB} - A promise/cb that contains the results/err
   */
  getSchedules(from, to, cb) {
    let [ f, t, c ] = unpackArgs(from, to, cb)
    f = resolveTime(f)
    t = resolveTime(t)
    return this.driver.request(`/schedules?from=${f}&to=${t}`, c)
  }

  /**
   * Query Users
   * @returns {Promise/CB} - A promise/cb that contains the results/err
   */
  getUsers(cb) {
    return this.driver.request('/users', cb)
  }

}

export default Moco
