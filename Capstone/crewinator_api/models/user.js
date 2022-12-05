const connection = require('../dbConnect');

exports.getAll = function(){
    connection.query("SELECT * FROM crewinator.users", (result) => {
        console.log(result);
        return result;
    });
}