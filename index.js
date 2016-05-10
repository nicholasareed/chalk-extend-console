/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */


const chalk = require('chalk');
const J = function(str){
  if(typeof str == 'object'){
    return util.inspect(str);
  }
  return str;
}
const chalkColors = {
  cyan: true,
  blue: 'cyan',
  orange: true,
  red: true,
  green: true,
  yellow: true,
  magenta: true,
  purple: 'magenta'
};

const util = require('util');

module.exports = {

  setup: function() {

    Object.keys(chalkColors).forEach(function(key){
      console[key] = function(){
        var argv = [];
        for(var i = 0;i<arguments.length;i++){
          argv.push(J(arguments[i]));
        }
        var color = chalkColors[key] === true ? key : chalkColors[key];
        console.log(chalk[color](argv.join(' ')));
      }
    });

    return 
  },
};