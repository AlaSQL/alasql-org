alasql('CREATE DATABASE TEST01; \
	USE TEST01; \
	CREATE TABLE students ( \
		studentid INT, \
		name STRING \
	); \
	INSERT INTO students VALUES (100, "Иванов И.И.")');
var numSt = alasql('SELECT VALUE COUNT(*) FROM students');
