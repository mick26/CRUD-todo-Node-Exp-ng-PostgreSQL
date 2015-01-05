/********************************************************
Database Connection Settings
*********************************************************/

exports.conString = "postgres://admin:admin@localhost:5432/todos";



// module.exports = {
//    query: function(text, values, cb) {
//       pg.connect(function(err, client, done) {
//         client.query(text, values, function(err, result) {
//           done();
//           cb(err, result);
//         })
//       });
//    }
// }

