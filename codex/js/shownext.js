var exs = [
	[
'CREATE TABLE city (\n\
    id INT PRIMARY KEY,\n\
    name NVARCHAR(40)\n\
);',
'INSERT INTO city \n\
    VALUES (1,"New York"),\n\
        (2,"Berlin"),(3,"Paris");',
'SELECT * FROM city;'
	],
	[
"var data = [{a:1,b:20}, {a:2,b:20}, {a:3,b:30}];",
"res = alasql('SELECT a*b AS c FROM ? \\\n\
	WHERE a>=2',[data]);",
	],
	[
"SET @abcd = {\n\
	a:10,\n\
	b:{\n\
		a:1,\n\
	  	d:{\n\
	  		b:@[\n\
	  			{a:1},\n\
	  			{a:2}\n\
	 ]}}};",
"SEARCH / * a FROM @abcd;",
	],
	[
"CREATE GRAPH #Pablo >loves> #Julia,\n\
	 #Maxim > knows > #Julia,\n\
     #Napoleon > loves > #Josephine,\n\
     #Josephine > knows > #Pablo';",
"SEARCH PATH(#Pablo) name FROM #Napoleon';"
	],
	[
"/* Enter your code in SQL\n\
 or JavaScript below */\n"
	]
];

//function showExample(){
	var i=0,j=0,k=0;
	var stop = false;
	var s = '';

//	showNext();
	function showNext() {
		if(stop) return;
		if(i>=exs.length || i<0) return;
		
		s += exs[i][j][k];
		$$('editor').setValue(s);
		k++;
		if(k>=exs[i][j].length) {
			s+='\n';
			k = 0;
			j++;
			runQuery2();
			if(j>=exs[i].length) {
				s = '';
				j=0;
				i++;
				setTimeout(showNext,3000);
			} else {
				setTimeout(showNext,1000);
			}
		} else {
			setTimeout(showNext,40);
		}
	}
