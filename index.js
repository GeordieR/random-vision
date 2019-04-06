var NodeWebcam = require( "node-webcam" );
var crypto = require('crypto');

//Default options from https://www.npmjs.com/package/node-webcam
var opts = {
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
var Webcam = NodeWebcam.create( opts );
Webcam.capture( "cap", create_md5 )

function create_md5(err, data){
    var md5 = crypto.createHash('md5').update(data)
    out = md5.digest('hex')
    console.log(out)
}