describe('kml parser', function() {

    describe('parse kml element', function() {

        it('empty kml', function() {
            var parsedKml = kml.parse('<kml></kml>');
            expect(parsedKml).not.toBeNull();
            expect(parsedKml.namespaces).toEqual({});
            expect(parsedKml.hint).toBeNull();
        });

        it('kml with one namespace', function() {
            var parsedKml = kml.parse('<kml xmlns="http://www.opengis.net/kml/2.2"></kml>');
            expect(parsedKml).not.toBeNull();
            expect(parsedKml.namespaces).toEqual({'': 'http://www.opengis.net/kml/2.2'});
            expect(parsedKml.hint).toBeNull();
        });

        it('kml with multiple namespace', function() {
            var parsedKml = kml.parse('<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom"></kml>');
            expect(parsedKml).not.toBeNull();
            expect(parsedKml.namespaces).toEqual({'': 'http://www.opengis.net/kml/2.2', 'gx': 'http://www.google.com/kml/ext/2.2', 'kml': 'http://www.opengis.net/kml/2.2', 'atom': 'http://www.w3.org/2005/Atom'});
            expect(parsedKml.hint).toBeNull();
        });

        it('kml with hint', function() {
            var parsedKml = kml.parse('<kml xmlns="http://www.opengis.net/kml/2.2" hint="target=sky"></kml>');
            expect(parsedKml).not.toBeNull();
            expect(parsedKml.namespaces).toEqual({'': 'http://www.opengis.net/kml/2.2'});
            expect(parsedKml.hint).toEqual('target=sky');
        });


    });


});
