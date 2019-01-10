/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      console.log(`input parameter : ${req.query.input}`)
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      
      if(initNum === undefined) {
        (initUnit === undefined) ? res.send('invalid number and unit') : res.send('invalid number')
      }
      else if(initUnit === undefined) {
        return 'invalid unit'
      }
      else {
        let returnNum = convertHandler.convert(initNum, initUnit);
        let returnUnit = convertHandler.getReturnUnit(initUnit);
        let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.json({ initNum : initNum, initUnit : initUnit, returnNum : returnNum, returnUnit : returnUnit, string : toString })

      }
    });
    
};
