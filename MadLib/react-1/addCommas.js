function addCommas(num) {
    // Convert the number to a string
    let numStr = num.toString();
    // Split the string into the integer and decimal parts
    let [integerPart, decimalPart] = numStr.split(".");
    
    // Reverse the integer part for easier insertion of commas
    let reversedInteger = integerPart.split("").reverse().join("");
    
    let result = "";


  // Loop through the reversed string and insert commas
  for (let i = 0; i < reversedInteger.length; i++) {
    // Add a comma every three digits, except before the first digit
    if (i > 0 && i % 3 === 0) {
      result += ",";
    }
    result += reversedInteger[i];
  }
  
  // Reverse the result back to normal order
  result = result.split("").reverse().join("");
  
  // Add the decimal part back if it exists
  if (decimalPart) {
    result += "." + decimalPart;
  }
  
  return result;
}

