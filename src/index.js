module.exports = function check(str, bracketsConfig) {
 var parentheses = "[](){}",
  array = [],
  i, character, bracketsConfig;

for(i = 0; character = str[i]; i++) {
  bracketsConfig = parentheses.indexOf(character);

  if(bracketsConfig === -1) {
    continue;
  }

  if(bracketsConfig% 2 === 0) {
    array.push(bracketsConfig + 1); 
  } else {
    if(array.length === 0 || array.pop() !== bracketsConfig) {
      return false;
    }
  }
}

return array.length === 0;
};