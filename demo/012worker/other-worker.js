importScripts('../../console/alasql.min.js');
if(alasql) {
	console.log('Alasql is here?',alasql('SELECT VALUE TRUE'));
	console.log('self.onmessage is free?',!self.onmessage);
};