var id, name, depiction, datecreate, show;

var Category;

Category = function(id, nm, dep, date, show) {
    this.id = id;
    this.name = nm;
    this.depiction = dep;
    this.datecreate = date;
    this.show = show;
}

Category.prototype.showInfo = function() {
    switch (this.show) {
        case 0 : return "HT 0";
        case 1 : return "HT 1";
        case 2 : return "HT 2";
        case 3 : return "HT 3";        
        default : return "Not values data";
    }
}

module.exports = Category;