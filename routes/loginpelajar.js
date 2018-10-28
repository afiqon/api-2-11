const { connection, router } = require('../config');

router.post("/loginpelajar", function(req, res) {
  var name = req.body.name;
  var ndp = req.body.ndp;
  connection.query(
    "SELECT * FROM pelajar WHERE nama_pelajar = ?",
    [namapelajar],
    function(error, results, fields) {
      console.log(req.body);
      if (error) {
        // console.log("error ocurred",error);
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
          if (results[0].no_ndp == password) {
            res.send({
              code: 200,
              success: "login sucessfull",
              data: {...results[0]},
            });
          } else {
            res.send({
              code: 204,
              success: "ID and ndp does not match"
            });
          }
        } else {
          res.send({
            code: 204,
            success: "Id does not exits"
          });
        }
      }
    }
  );
});

module.exports = router;
