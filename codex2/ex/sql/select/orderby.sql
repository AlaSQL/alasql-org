CREATE TABLE people (
	id SERIAL,
	name STRING,
	age INT
);

INSERT INTO people (name,age) VALUES
	("Alice",25), ("Dina",20), ("Maryann",29);

SELECT * FROM people ORDER BY age DESC;  