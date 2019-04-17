const nodeWebcam = require( "node-webcam" );
const crypto = require('crypto');


//Default options from https://www.npmjs.com/package/node-webcam
const opts = {
    //Picture related
    width: 1280,
    height: 720,
    quality: 100,
    //Delay to take shot
    delay: 0,
    //Save shots in memory
    saveShots: true,
    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: "jpeg",
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
    device: false,
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "base64",
    //Logging
    verbose: true
};

// string of characters that can be used to make a secure password
const secureChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_+=";

// check if there is an argument provided and if it is invalid, terminate with an error
if (process.argv[2] && process.argv[2] !== "s") console.error("Invalid argument");

const webcam = nodeWebcam.create(opts);
webcam.capture("cap", createPassword);

function createPassword(err, data){

    // derive a hash from the b64 image data
    const md5 = crypto.createHash('md5').update(data);
    let hex = md5.digest('hex');

    // if the secure parameter is passed
    if (process.argv[2] === "s") {

        // the password string to be printed to stdout at the end
        let securePw = "";

        // A rudimentary algorithm, not optimised
        while (hex.length > 1) {
            // take two single char hex values from the hash and multiply as ints
            let value = parseInt(hex[0], 16) * parseInt(hex[1], 16);
            // take the modulus of the previous value as an index for getting a character to add to the password
            securePw += secureChars[value % 78];
            // pop the two used chars off the hash string
            hex = hex.slice(2);
        }

        // print the generated secure password
        console.log(securePw);

    // if there is no parameter passed
    } else {

        // print a substring of the hash as the password
        console.log(hex.slice(0, 12));

    }

}