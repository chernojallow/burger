// Import the ORM to create functionality that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
          cb(res);
        });
    },

    // the variables cols and vals are arrays
    insertOne: function(cols,vals, cb){
        orm.insertOne("burgers", function(res){

        cb(res);
        });

    },

    updateOne: function(objColVals, condition, cb){
        orm.insertOne("burgers", function(res){

        cb(res);
        });
    }
};

// Export the database functions for for the controller(controller.js);

module.exports = burger;