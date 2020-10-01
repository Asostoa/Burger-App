var connection = require('./connection.js');


// Object for all our SQL statement functions.
var orm = {
	selectAll: function (tablename, cb) {

		connection.query('SELECT * FROM ??;', [tablename], function (err, result) {
			if (err) throw err;
			// console.log(result);
			cb(result);
		})
	},
	insertOne: function (tablename, colname, burger_name, cb) {

		connection.query("INSERT INTO ?? (??) VALUES (?)", [tablename, colname, burger_name], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (tablename, colname, devoured, id, cb) {

		connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tablename, colname, devoured, id], function (err, result) {
			if (err) throw err;
			cb(result);

		});
	},
	modifyOne: function (tablename, colname, devoured, id, cb) {

		connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tablename, colname, devoured, id], function (err, result) {
			if (err) throw err;
			cb(result);

		});
	},
	update: function (table, objColVals, condition, cb) {
		let queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				console.log(err)
			}
			cb(result);
		});
	},

};

module.exports = orm;
