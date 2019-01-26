var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },

    insertOne: function (valOfCol1, valOfCol2, cb) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [valOfCol1, valOfCol2], function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function (valOfCol, cb) {
        connection.query("UPDATE burgers SET devoured = false WHERE id=?", [valOfCol], function (err, res) {
            if (err) throw err;
            cb(res);
        })
    }
};



module.exports = orm;