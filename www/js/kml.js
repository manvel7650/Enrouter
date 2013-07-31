var kml = kml || {};

kml.Kml = function Kml() {
    this._init.apply(this, arguments);
};

kml.Kml.prototype._init = function ($kml) {
    this.namespaces = [];
    this.hint = null;

    var self = this;
    $.each($kml[0].attributes, function (index, attr) {
        if (attr.name.match(/xmlns:/)) {
            self.namespaces[attr.name.substr(6)] = attr.value;
        }
        else if (attr.name == 'xmlns') {
            self.namespaces[''] = attr.value;
        }
        else if (attr.name == 'hint') {
            self.hint = attr.value;
        }
    });
};

kml.parse = function (kmlDoc) {
    var parsedKml = $.parseXML(kmlDoc);
    var $kml = $(parsedKml).find("kml");
    return new kml.Kml($kml);
};




