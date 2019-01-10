/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    //returns the number from the query parameter in correct format
    let regex = /[a-zA-Z]+/g
    let result = input.split(regex)[0]
    if(result === '') return 1
    result = result.split('/')
    console.log(`result after split : ${result}`)
    if(result.length > 1) {
      for(let i=0; i<result.length; i++) {
        if(parseFloat(result[i])!= result[i]) {
          console.log(`invalid number ${result[i]}`)
          return undefined
        }
      }
      result = parseFloat(result[0]) / parseFloat(result[1])
    }
    else {
      console.log(`${parseFloat(result) == result[0]}`)
      if(parseFloat(result) != result[0]) {
        console.log(`invalid number`)
        return undefined
      }
      result = parseFloat(result)
    }
    console.log(`regex result number : ${result} type : ${typeof(result)}`)
    return result
  }
  
  this.getUnit = function(input) {
    //returns the unit from the query parameter in correct format
    let resultArray = ['lbs', 'kg', 'mi', 'km', 'l', 'gal']
    let unitRegex = /[a-zA-Z]+/g
    let result = input.match(unitRegex).pop()
    if (resultArray.indexOf(result.toLowerCase()) === -1) {
      console.log('invalid unit')
      return undefined
    } 
    console.log(`unit result : ${result}`)
    return result
  }
  
  this.getReturnUnit = function(initUnit) {
    //takes a string of the input unit and returns the output unit
    let result
    switch(initUnit.toLowerCase()) {
      case 'l' : 
        result = 'gal' 
        break
      case 'gal' :
        result = 'l'
        break
      case 'lbs' :
        result = 'kg'
        break
      case 'kg' :
        result = 'lbs'
        break
      case 'mi' :
        result = 'km'
        break
      case 'km' :
        result = 'mi'
        break
    }
    console.log(`return unit : ${result}`)
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result
    switch(unit.toLowerCase()) {
      case 'l' : 
        result = 'liters' 
        break
      case 'gal' :
        result = 'gallons'
        break
      case 'lbs' :
        result = 'pounds'
        break
      case 'kg' :
        result = 'kilograms'
        break
      case 'mi' :
        result = 'miles'
        break
      case 'km' :
        result = 'kilometers'
        break
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result
    switch(initUnit.toLowerCase()) {
      case 'l' : 
        result = initNum / galToL
        break
      case 'gal' :
        result = initNum * galToL
        break
      case 'lbs' :
        result = initNum * lbsToKg
        break
      case 'kg' :
        result = initNum / lbsToKg
        break
      case 'mi' :
        result = initNum * miToKm
        break
      case 'km' :
        result = initNum / miToKm
        break
    }
    return result
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum.toFixed(5)} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
