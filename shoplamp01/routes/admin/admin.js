var login = function(app, pool) {
    // Truy cap page admin
    app.get('/admin', function(req, res){
        if(req.session.login === "true") {
            res.render("home");
        } else {
            res.render("login", {"meserr": req.session.mes });
        }
    });
    // Login
    app.post('/login', function(req, res){
        var sql = "SELECT * FROM `user` WHERE UserName='"+req.body.username+"' AND PassWord='"+req.body.password+"'"; // Thực hiện câu truy vấn và show dữ liệu
        pool.getConnection(function(err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                if (error) throw error;
                else if (results.length>0) {
                    req.session.login = "true";
                    req.session.mes = "";
                    res.redirect("/admin");
                } else {
                    req.session.login = "false";
                    req.session.mes = "Tên đăng nhập hoặc mật khẩu không chính xác !!!";
                    res.redirect("/admin");
                }
            });
        });
    });
    // Logout
    app.get('/logout', function(req, res){
        req.session.login = "false";
        req.session.mes = "";
        res.redirect("/admin");
    });
}

module.exports = login;