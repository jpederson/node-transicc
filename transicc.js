

var spawn = require( "child_process" ).spawn;


// new switch in 1.1.2 to replace symlinks for shortcut profiles
var profile_path = function( profile_name ){
	switch ( profile_name ) {

		// use Adobe's CMYK profile
		case "cmyk":
			profile_name = "cmyk-adobe-us-web-uncoated";
		break;

		// use Apple's lab profile
		case "lab":
			profile_name = "lab-apple";
		break;

		// use AdobeRGB for RGB by default
		case "rgb":
			profile_name = "rgb-adobe-1998";
		break;

		// use Apple's sRGB profile
		case "srgb":
			profile_name = "srgb-apple";
		break;

		// use XYZ with a luminant of d65 by default
		case "xyz":
			profile_name = "xyz-d65";
		break;
	}

	return "profile/"+profile_name+".icc";
}


// generic function to pass profiles and parameters to the
// LittleCMS transicc command line utility.
module.exports = function( input_profile, output_profile, args, callback ) {
	
	// create an array of arguments we'll pass to the transicc command
	var cmd_arg = [];

	// add the input profile
	cmd_arg.push( profile_path( input_profile ) );

	// add the output profile
	cmd_arg.push( profile_path( output_profile ) );

	// loop through the arguments and add them to the command args
	for ( var i = 0; i < args.length; i++ ) {
		cmd_arg.push( args[i] );
	}

	// spawn the command and create an empty response
	var cmd = spawn( "./shell/"+args.length+".sh", cmd_arg, {
			cwd: __dirname
		}),
		response;


	// when we receive output from the command
	cmd.stdout.on( 'data', function ( data ) {

		// parse the output
		response = new String( data ).split( " " );

	});


	// output errors to the console - only for debugging.
	// cmd.stderr.on('data', function (data) { console.log('stderr: ' + data); });


	// once the command is finished
	cmd.on( 'close', function ( code ) {

		// since we're working asynchronously, we can't return
		// so we'll pass our response into a callback function.
		callback( response );

	});

};

