======createtable=======

CREATE TABLE stock (
    id SERIAL primary key,
    quantity integer,
    price integer,
    cirtus_id integer
);

INSERT INTO stock (quantity, price, cirtus_id) VALUES (33, 25, 1);

INSERT INTO stock (quantity, price, cirtus_id) VALUES (50, 15, 2);

INSERT INTO stock (quantity, price, cirtus_id) VALUES (10, 35, 3);

INSERT INTO stock (quantity, price, cirtus_id) VALUES (0, 20, 4);


=====A======
SELECT citrus.name AS citrus_name, stock.quantity AS citrus_quantity
FROM citrus
JOIN stock
ON citrus.id = stock.cirtus_id AND citrus.color = 'orange';

===== B ===

SELECT *
FROM citrus
JOIN stock
ON citrus.id = stock.cirtus_id;

==== C ==== 
BEGIN;
UPDATE stock SET quantity = quantity + 20  WHERE cirtus_id = 1;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity + 40  WHERE cirtus_id = 2;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity - 20  WHERE cirtus_id = 2;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity + 40  WHERE cirtus_id = 4;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity  -30  WHERE cirtus_id = 1;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity - 20  WHERE cirtus_id = 4;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity + 40  WHERE cirtus_id = 3;
COMMIT;
BEGIN;
UPDATE stock SET quantity = quantity - 20  WHERE cirtus_id = 3;
COMMIT;