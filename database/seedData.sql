INSERT INTO Restaurants (restaurantName, restaurantAddress, imageUrl) VALUES ('Tastyburgers', '777 Mc Tavish', 'https://www.touchbistro.com/wp-content/uploads/2020/11/restaurant-logo-13.jpg');
INSERT INTO Restaurants (restaurantName, restaurantAddress, imageUrl) VALUES ('Stove Restaurant', '897 Sherbrooke', 'https://www.logodesign.net/images/home-industry/resturant-logo-04.jpg');

INSERT INTO Users (username, fk_restaurantId) VALUES ('Bob', 1);
INSERT INTO Users (username, fk_restaurantId) VALUES ('Alice', 2);
INSERT INTO Users (username) VALUES ('John');
INSERT INTO Users (username) VALUES ('Sam');

INSERT INTO Events (eventName, maxNbUsers, basePrice, eventDate, fk_restaurantId)
VALUES ('Tastiest Burger', 30, 19.99, '20230130', 1);
INSERT INTO Events (eventName, maxNbUsers, basePrice, eventDate, fk_restaurantId)
VALUES ('Wood Oven Special', 45, 39.99, '20230205', 2);
INSERT INTO Events (eventName, maxNbUsers, basePrice, eventDate, fk_restaurantId)
VALUES ('Bomba Burger', 20, 99.99, '20230206', 1);
INSERT INTO Events (eventName, maxNbUsers, basePrice, eventDate, fk_restaurantId)
VALUES ('Normal Oven', 60, 29.99, '20230208', 2);

INSERT INTO UsersEvents (fk_userId, fk_eventId) VALUES (3, 1);
INSERT INTO UsersEvents (fk_userId, fk_eventId) VALUES (4, 2);
INSERT INTO UsersEvents (fk_userId, fk_eventId) VALUES (4, 3);
INSERT INTO UsersEvents (fk_userId, fk_eventId) VALUES (3, 4);

INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (10, 0.99, 1);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (20, 0.99, 1);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (30, 0.99, 1);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (15, 0.99, 2);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (30, 1.10, 2);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (45, 1.15, 2);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (15, 9.99, 3);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (20, 5.99, 3);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (30, 1.15, 4);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (50, 1.30, 4);
INSERT INTO EventMilestone (minNbUsers, priceDiscount, fk_eventId)
VALUES (60, 0.50, 4);