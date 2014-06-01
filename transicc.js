

var spawn = require( "child_process" ).spawn;

// generic function to pass profiles and parameters to the
// LittleCMS transicc command line utility.
module.exports = function( input_profile, output_profile, args, callback ) {
	
	// create an array of arguments we'll pass to the transicc command
	var cmd_arg = [];

	// add the input profile
	cmd_arg.push( ( input_profile.match(".icc") ? input_profile : "profile/"+input_profile+".icc" ) );

	// add the output profile
	cmd_arg.push( ( output_profile.match(".icc") ? output_profile : "profile/"+output_profile+".icc" ) );

	// loop through the arguments and add them to the command args
	for ( var i = 0; i < args.length; i++ ) {
		cmd_arg.push( args[i] );
	}

	// spawn the command and create an empty response
	var cmd = spawn( "./shell/"+args.length+".sh", cmd_arg ),
		response;


	// when we receive output from the command
	cmd.stdout.on( 'data', function ( data ) {

		// parse the output
		response = new String( data ).split( " " );

	});


	// once the command is finished
	cmd.on( 'close', function ( code ) {

		// since we're working asynchronously, we can't return
		// so we'll pass our response into a callback function.
		callback( response );

	});

};

