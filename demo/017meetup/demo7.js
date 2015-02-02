// Браузер
<script src=“alasql.js></script>
<script>
	alasql(‘CREATE DATABASE test01’);
</script>

// AMD
require([‘alasql’], function(alasql) {
	alasql(‘SELECT * FROM courses’);
});

// Node.js
npm install alasql

var alasql = require(‘alasql’);
