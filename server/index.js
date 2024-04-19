const path = require( 'path' );

// ignore `.scss` imports
require( 'ignore-styles' );

require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

require( './express.js' );