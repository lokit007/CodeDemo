var objCategory = require("../../models/Category.js");

var category = function(app, pool) {
    // danh sach category
    app.get('/admin/category', function(req, res){
        var sql = "SELECT * FROM `category`"
        // Thực hiện câu truy vấn và show dữ liệu
        pool.getConnection(function(err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                if (error) throw error;
                else res.render("category", { "data" : results });
            });
        });
    });
    // Update category
    app.post('/admin/category/update', function(req, res){
        var isShow = 0;
        var dNow = new Date();
        if (req.body.show == "on") isShow = 1
        if (req.body.id == "-1") {
            // them moi
            var objNew = {
                Name : req.body.name,
                Depiction : req.body.depiction,
                DateCreate : dNow.toLocaleString(),
                Show : isShow
            };
            pool.getConnection(function(err, connection) {
                connection.query('INSERT INTO category SET ?', objNew, function (error, results) {
                    connection.release();
                    if (error) throw error;
                    else {
                        res.redirect("/admin/category");
                    }
                });
            });
        } else {
            // cap nhat
            pool.getConnection(function(err, connection) {
                connection.query('UPDATE category SET Name = ? , Depiction = ? , DateCreate = ? , ShowScreen = ? Where IdCategory = ?', [req.body.name, req.body.depiction, dNow.toLocaleString(), isShow, Number(req.body.id)], function (error, results) {
                    connection.release();
                    if (error) throw error;
                    else {
                        res.redirect("/admin/category");
                    }
                });
            });
        }
    });
    // ShowScreen
    app.get('/admin/category/update/:id/:show', function(req, res){
        pool.getConnection(function(err, connection) {
            connection.query('UPDATE category SET ShowScreen = ? Where IdCategory = ?', [Number(req.params.show), Number(req.params.id)], function (error, results) {
                connection.release();
                if (error) throw error;
                else {
                    res.sendStatus(200);
                }
            });
        });
    });
}

module.exports = category;