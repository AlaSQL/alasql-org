 var alasql = require('../../console/alasql.min.js');

 alasql('SELECT projects, FIRST(duration), path, application \
    FROM json("timing_output") \
    GROUP BY projects \
    ORDER BY duration DESC \
    ;\
    ',[],function(res){
                  console.log(res);
 });