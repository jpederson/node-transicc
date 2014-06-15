

var transicc = require( "../transicc" ),
	should = require( "should" );

'use strict';

// Since we're not responsible for the accuracy of profiles
// we just want to test to make sure a conversion works.

describe('transicc', function () {

	it('should equal rgb( 0, 172, 236 )', function (done) {

		// convert between adobe cmyk and apple rgb
		transicc( "cmyk", "rgb", [ 100, 0, 0, 0 ], function( err, response ) {

			response[0].should.equal( '0.0000' );
			response[1].should.equal( '160.2024' );
			response[2].should.equal( '224.1492' );
			done();

		});

	});

});

