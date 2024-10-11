const inputID = "input-value";
const outputID = "output-value";

function decodetURL() {
  let urlToDecode = document.getElementById(inputID).value;
  document.getElementById(outputID).value = decodeURIComponent(urlToDecode);
}

function hexToStringDirect() {
  let hexToString = document.getElementById(inputID).value;
  document.getElementById(outputID).value = hexToString(hexToString);
}

/**
 * Converts a hexadecimal string to a regular string.
 *
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {string} The converted string.
 */
function hexToString(hex) {
  // Initialize an empty string to hold the result
  var str = '';

  // Loop over the hexadecimal string, two characters at a time
  for (var i = 0; i < hex.length; i += 2) {
      // Convert each pair of hexadecimal characters to a decimal number,
      // then convert that number to a character and append it to the result string
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }

  // Return the resulting string
  return str;
}

function clearTextBoxes() {
  document.getElementById(inputID).value = "";
  document.getElementById(outputID).value = "";
}
