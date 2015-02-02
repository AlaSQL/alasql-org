alasql(function(){/*

    SELECT countries.*, views.Cnt
        FROM (
        	SELECT Country, COUNT(*) AS Cnt
	    		FROM XLSX("all_latest_views_3m.xlsx", 
	    			{sheetid:'Views', headers:true})
    			GROUP BY Country
		) JOIN (
			SELECT *
    			FROM CSV("https://abc.com/average-latitude-longitude-countries.csv",
	    			{headers:true});
        ) USING Country

    */),[], function(country) {

		// Массив country - данные по просмотрам
		// по странам с широтой и долготой
		console.log(country);
});