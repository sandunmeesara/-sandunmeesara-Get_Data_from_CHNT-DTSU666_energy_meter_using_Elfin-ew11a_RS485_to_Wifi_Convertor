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
let IrAt = global.get("IrAt_Global");

// Extract the "value" from the object
if (payloadObject.key === "IrAt") {
var valueString = payloadObject.value;

// Extract the desired part ("02BD") from the value
var desiredPart = valueString.substring(6, 10);

// Convert the desired part to decimal
var decimalValue = parseInt(desiredPart, 16);
global.set("IrAt_Global", decimalValue);
// Update the payload with the decimal value
msg.payload = IrAt;

}

//Uab_Uc object
if (payloadObject.key === "Uab_Uc") {
var valueString = payloadObject.value;

// Extract the desired part from the value
var desiredPart = valueString.substring(6,54);
var splitValues = desiredPart.match(/.{1,8}/g);

// Example usage with the specified keys and your provided array:
const keysString = "Uab Ubc Uca Ua Ub Uc";
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
      var dec = decimalValue * 0.1;
      jsonObject[keys[i]] = dec;
    } else {
      jsonObject[keys[i]] = valuesArray[i];
    }
  }

msg.payload = jsonObject;

}

//PFt_PFc object
if (payloadObject.key === "PFt_PFc") {
  var valueString = payloadObject.value;
  
  // Extract the desired part from the value
  var desiredPart = valueString.substring(6,38);
  var splitValues = desiredPart.match(/.{1,8}/g);
  
  // Example usage with the specified keys and your provided array:
  const keysString = "PFt PFa PFb PFc";
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
        var dec = decimalValue * 0.001;
        jsonObject[keys[i]] = dec;
      } else {
        jsonObject[keys[i]] = valuesArray[i];
      }
    }
  
  msg.payload = jsonObject;
  
  }

//Frequency object
if (payloadObject.key === "Frequency") {
  var valueString = payloadObject.value;
  
  // Extract the desired part from the value
  var desiredPart = valueString.substring(6,14);
  var splitValues = desiredPart.match(/.{1,8}/g);
  
  // Example usage with the specified keys and your provided array:
  const keysString = "Frequency";
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
        var dec = decimalValue * 0.01;
        jsonObject[keys[i]] = dec;
      } else {
        jsonObject[keys[i]] = valuesArray[i];
      }
    }
  
  msg.payload = jsonObject;
  
  }

//Ia_Ic data object
if (payloadObject.key === "Ia_Ic") {
    var valueString = payloadObject.value;
    
    // Extract the desired part from the value
    var desiredPart = valueString.substring(6,30);
    var splitValues = desiredPart.match(/.{1,8}/g);
    
    // Example usage with the specified keys and your provided array:
    const keysString = "Ia Ib Ic";
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
          var dec = decimalValue * IrAt * 0.001;
          jsonObject[keys[i]] = dec;
        } else {
          jsonObject[keys[i]] = valuesArray[i];
        }
      }
    
    msg.payload = jsonObject;
    
  }

//Pt_Qc data object
if (payloadObject.key === "Pt_Qc") {
    var valueString = payloadObject.value;
    
    // Extract the desired part from the value
    var desiredPart = valueString.substring(6,70);
    var splitValues = desiredPart.match(/.{1,8}/g);
    
    // Example usage with the specified keys and your provided array:
    const keysString = "Pt Pa Pb Pc Qt Qa Qb Qc";
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
          var dec = decimalValue * IrAt * 0.1 /1000;
          jsonObject[keys[i]] = dec;
        } else {
          jsonObject[keys[i]] = valuesArray[i];
        }
      }
    
    msg.payload = jsonObject;
    
  }

//ImpEp_Q4Eq data object
if (payloadObject.key === "ImpEp_Q4Eq") {
    var valueString = payloadObject.value;
    
    // Extract the desired part from the value
    var desiredPart = valueString.substring(6,210);
    var splitValues = desiredPart.match(/.{1,8}/g);
    
    // Example usage with the specified keys and your provided array:
    const keysString = "ImpEp n n n n ExpEp n n n n Q1Eq n n n n Q2Eq n n n n Q3Eq n n n n Q4Eq";
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
          var dec = decimalValue * IrAt;
          jsonObject[keys[i]] = dec;
        } else {
          jsonObject[keys[i]] = valuesArray[i];
        }
      }
    
    msg.payload = jsonObject;
    
  }
// Pass the modified message along to the next node in the flow
return msg;