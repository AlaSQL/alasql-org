CREATE TABLE people (
	id SERIAL,
	name STRING,
	country STRING
);

INSERT INTO people (name,country) VALUES
	("Alice","England"), ("Dina","USA"), ("Lada","Ukraine"), ("Svetlana","Ukraine");

SELECT country, COUNT(*) FROM people GROUP BY country;  