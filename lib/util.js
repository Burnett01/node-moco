/*
* The MIT License (MIT)
* Copyright (c) 2018 Steven Agyekum <agyekum@posteo.de>
*
* Product:      node-moco
* Description:  A microservice api-client to access Mocoapp.com API
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

import moment from 'moment'

/**
 * Variable Type
 */
export const T = {
  OBJECT: 'object'
, STRING: 'string'
, NUMBER: 'number'
, FUNCT:  'function'
};

/**
 * Errors
 */
export const ERR = {
  PARAM_NON_OBJECT: new Error('The first parameter must be an object!')
};

/**
 * Return current or given time
 */
export const resolveTime = (time) => {
  const now = moment().format('YYYY-MM-DD')
  return (time) ? time : now
}

/**
 * Unpack arguments by shifting a cb
 * to the end of chain
 */
export const unpackArgs = (...args) => {
  const len = args.length - 1
  return args.map((arg, i) => {
    if (i !== len && typeof arg === T.FUNCT) {
      args[len] = arg; arg = undefined
    }
    return arg
  })
}
