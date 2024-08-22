use shrinivas_db;
CREATE TABLE cars (
make varchar(100),
model varchar(100),
year int,
value decimal(10, 2));

INSERT INTO cars
VALUES
('Porsche', '911 GT3', 2020, 169700),
('Porsche', 'Cayman GT4', 2018, 118000),
('Porsche', 'Panamera', 2022, 113200),
('Porsche', 'Macan', 2019, 27400),
('Porsche', '718 Boxster', 2017, 48880),
('Ferrari', '488 GTB', 2015, 254750),
('Ferrari', 'F8 Tributo', 2019, 375000),
('Ferrari', 'SF90 Stradale', 2020, 627000),
('Ferrari', '812 Superfast', 2017, 335300),
('Ferrari', 'GTC4Lusso', 2016, 268000);


DELIMITER //
CREATE PROCEDURE get_all_cars()
BEGIN
SELECT * FROM cars ORDER BY make, value DESC;
END //
DELIMITER ;
CALL get_all_cars;

DELIMITER //
CREATE PROCEDURE get_cars_by_year(
IN year_filter int
)
BEGIN
SELECT * FROM cars WHERE year = year_filter ORDER BY make, value DESC;
END //
DELIMITER ;
CALL get_cars_by_year(2022);

DELIMITER //


CREATE PROCEDURE get_car_stats_by_year(
IN year_filter int,
OUT cars_number int,
OUT min_value decimal(10, 2),
OUT avg_value decimal(10, 2),
OUT max_value decimal(10, 2)
)
BEGIN
SELECT COUNT(*), MIN(value), AVG(value), MAX(value)
INTO cars_number, min_value, avg_value, max_value
FROM cars
WHERE year = year_filter ORDER BY make, value DESC;
END //
DELIMITER ;
CALL get_car_stats_by_year(2020, @number, @min, @avg, @max);
SELECT @number, @min, @avg, @max;
