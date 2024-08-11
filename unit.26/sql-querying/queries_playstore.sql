-- Comments in SQL Start with dash-dash --

SELECT app_name FROM analytics WHERE id = 1880;

SELECT app_name, id FROM analytics WHERE last_updated = '2018-08-01';

SELECT category, COUNT(*) AS count FROM analytics GROUP BY category;

SELECT app_name, COUNT(*) AS reviews
FROM analytics
GROUP BY app_name
ORDER BY reviews
LIMIT 5;

SELECT app_name, COUNT(*) AS reviews FROM analytics WHERE rating >= 4.8 GROUP BY app_name ORDER BY reviews desc LIMIT 1;


 SELECT category, AVG(rating) AS avg_rating FROM analytics GROUP BY category ORDER BY a
vg_rating desc;

SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price desc LIM
IT 1;


app_name, rating FROM analytics WHERE min_installs < 50 AND rating IS NOT null
ORDER BY rating DESC;

SELECT app_name FROM analytics WHERE rating < 3 AND reviews >= 10000;


SELECT app_name, reviews FROM analytics WHERE price > .10 AND price < 1.00 ORDER BY re
views DESC LIMIT 10;

SELECT * FROM analytics 
  WHERE last_updated = (SELECT MIN(last_updated) FROM analytics);

SELECT * FROM analytics WHERE price = (SELECT MAX(price) FROM analytics);

SELECT SUM(reviews) AS "TOTAL OF ALL REVIEWS" FROM analytics;

SELECT category FROM analytics GROUP BY category HAVING COUNT(*) > 300;

SELECT app_name, reviews, min_installs,  min_installs / reviews AS proportion FROM analytics WHERE min_installs >= 100000 ORDER BY proportion DESC LIMIT 1;



