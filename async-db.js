const mysql = require("mysql");

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err ) {
                    console.log(err.sql);
                    console.log("");
                    return reject( err );
                }
                resolve( rows );
            } );
        } );
    }
}


module.exports = Database;