// Function to convert a 32-bit hexadecimal IEEE-754 value to decimal:
function hexToFloat32(hexString) {
  // Convert the hexadecimal string to an unsigned integer:
  const value = parseInt(hexString, 16);

  // Extract sign, exponent, and mantissa:
  const sign = (value >> 31) & 1;
  const exponent = (value >> 23) & 0xFF;
  const mantissa = value & 0x7FFFFF;

  // Bias for exponent:
  const bias = 127;

  // Handle special cases:
  if (exponent === 0xFF) {
    if (mantissa === 0) {
      return sign ? -Infinity : Infinity;
    } else {
      return NaN;
    }
  }

  // Calculate the actual exponent:
  const actualExponent = exponent - bias;

  // Calculate the fractional part of the mantissa:
  let fractionalPart = 1.0;
  for (let i = 0; i < 23; i++) {
    fractionalPart += ((mantissa >> (22 - i)) & 1) * (2.0 ** (-i - 1));
  }

  // Combine sign, exponent, and mantissa to form the decimal value:
  const decimalValue = (sign ? -1.0 : 1.0) * fractionalPart * (2.0 ** actualExponent);

  return decimalValue;
}



// Assuming msg.payload is already an object
var payloadObject = msg.payload;

// Extract the "value" from the object
if (payloadObject.key === "Pro_Code") {
var valueString = payloadObject.value;

// Extract the desired part ("02BD") from the value
var desiredPart = valueString.substring(6, 10);

// Convert the desired part to decimal
var decimalValue = parseInt(desiredPart, 16);

// Update the payload with the decimal value
msg.payload = decimalValue;

}

//data object
if (payloadObject.key === "Uab_Qc") {
var valueString = payloadObject.value;

// Extract the desired part from the value
var desiredPart = valueString.substring(6,142);
var splitValues = desiredPart.match(/.{1,8}/g);

// Example usage with the specified keys and your provided array:
const keysString = "Uab Ubc Uca Ua Ub Uc Ia Ib Ic Pt Pa Pb Pc Qt Qa Qb Qc";
const valuesArray = splitValues;

// Split the keys string by spaces:
const keys = keysString.split(" ");

// Check for length mismatch:
if (keys.length !== valuesArray.length) {
  throw new Error("Number of keys and values must match.");
}

// Create the JSON object:
  const jsonObject = {};
  for (let i = 0; i < keys.length; i++) {
    if (typeof valuesArray[i] === "string") {
      // Convert IEEE-754 hexadecimal to decimal:
      const decimalValue = hexToFloat32(valuesArray[i]);
      jsonObject[keys[i]] = decimalValue;
    } else {
      jsonObject[keys[i]] = valuesArray[i];
    }
  }

msg.payload = jsonObject;

}

// Pass the modified message along to the next node in the flow
return msg;