/* You can use ` in modern browsers for multiple string */
alasql(`create database test00;
	use test00;
	create table one (a int);
	insert into one values (1),(2),(3),(4),(5);`);

res = alasql(`select * from one;`);
	