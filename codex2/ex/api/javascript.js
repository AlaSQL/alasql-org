/* You can call AlaSQL from JavaScript */

alasql('create database test00');
alasql('use test00');
alasql('create table one (a int)');
alasql('insert into one values (1),(2),(3),(4),(5)');

res = alasql('select * from one');
alasql('drop database test00');
