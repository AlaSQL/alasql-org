/* multiple statements in one string */
var sql = 'create database test00;';
sql += 'use test00;';
sql += 'create table one (a int);';
sql += 'insert into one values (1),(2),(3),(4),(5);';
alasql(sql);

sql = 'select * from one;';
res = alasql(sql);
	