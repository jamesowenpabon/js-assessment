exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
    var digit = parseInt(str, 2);
    return(digit);
  },

  convertToBinary: function(num) {
    var bi = num.toString(2);
    var biLen = bi.length;
    var pad = (biLen % 2 === 0) ? false : true;
    if (pad) {bi = '0'.concat(bi)}
    return(bi);
  },

  multiply: function(a, b) {
    var prd = a*b;
    var sa = a.toString();
    var sb = b.toString();
    var sal = (sa.length) - (sa.indexOf("."),1);
    var sbl = (sb.length) - (sb.indexOf("."),1);
    var dec = sal > sbl ? sal : sbl;
    prd = prd.toFixed(dec)
    return parseFloat(prd);
  }
};
