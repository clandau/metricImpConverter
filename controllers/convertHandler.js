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
    result = result.split('/')
    console.log(`result after split : ${parseFloat(result)}`)
    if(result.length > 1) {
      result = parseFloat(result[0]) / parseFloat(result[1])
    }
    else {
      result = parseFloat(result)
    }
    console.log(`regex result number : ${result} type : ${typeof(result)}`)
    return result
  }
  
  this.getUnit = function(input) {
    //returns the unit from the query parameter in correct format
    let unitRegex = /[a-zA-Z]+/g
    let result = input.match(unitRegex).pop()
    console.log(`unit result : ${result}`)
    return result
  }
  
  this.getReturnUnit = function(initUnit) {
    //takes a string of the input unit and returns the output unit
    let result;
    switch(toLowerCase(initUnit)) {
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
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${spellOutUnit(initUnit)} converts to ${returnNum} ${spellOutUnit(returnUnit)}}`
  };
  
}

module.exports = ConvertHandler;
