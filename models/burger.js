var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res)
        });
    },
    insertOne: function(valOfCol1, valOfCol2, cb) {
        orm.insertOne(valOfCol1, valOfCol2, function(res){
            cb(res)
        });
    },
    updateOne: function(valOfCol, cb) {
        orm.updateOne(valOfCol, function(res){
            cb(res)
        });
    }
}

module.exports = burger;