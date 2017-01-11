var Admin = function() {
    this.adminkey = "",
    this.password = "",
    this.getInfo = function(){
        return "Thong tin admin";
    }
}

Admin.prototype.getName = function (){
    return "name admin";
}

module.exports = Admin;