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

import { expect } from 'chai';
import Moco from '../lib/moco'

let moco = undefined;

describe('Moco [TEST]', () => {

  it('creates a moco instance', done => {

    moco = new Moco( {
      domain: 'mycompany',
      apikey: '',
      debug: true
    });

    expect(moco).to.be.a('object');

    expect(moco).to.have.property('driver');

    expect(moco).to.have.property('getActivities');
    expect(moco).to.have.property('getSchedules');
    expect(moco).to.have.property('getUsers');

    expect(moco.getActivities).to.be.a('function');
    expect(moco.getSchedules).to.be.a('function');
    expect(moco.getUsers).to.be.a('function');

    done();
  });

});
