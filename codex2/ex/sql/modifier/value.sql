CREATE TABLE one (
	a INTEGER IDENTITY(1,1),
	b INTEGER
);

INSERT INTO one(b) VALUES (10),(20),(30),(40);

VALUE OF SELECT SUM(a), SUM(b) FROM one;