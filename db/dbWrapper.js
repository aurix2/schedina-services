var dbUtils = require('./dbUtils');

  
var dbWrapper = {};

dbWrapper.getBetter = async function(){
    try{
    var query = "SELECT * from T_BETTER";
   
    var result = await dbUtils.executeQuery(query);
    return result;
    }catch(e){
        console.log(e);
        throw e;
    }
}

module.exports = dbWrapper;