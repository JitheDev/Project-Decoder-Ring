// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
 if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false;
    if (encode === false) shift = shift - (shift * 2);
    let change = input.toLowerCase();
    let newCode = [...change].map((i) => {
      let switchNum = i.charCodeAt();
      if (switchNum < 97 || switchNum > 122) return String.fromCharCode(switchNum);
      let newNum = switchNum + shift;
      if (newNum < 97) newNum += 26;
      if (newNum > 122) newNum -= 26;
      return String.fromCharCode(newNum);
    });
    return newCode.join("");
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
