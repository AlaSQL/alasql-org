var data = [
	[1,2,3], 
	[2,3,4], 
	[5,6,7]
];
var res = alasql('SELECT * FROM ? WHERE [0] < ?',[data, 2]);
