CREATE TABLE IF NOT EXISTS Restaurants  (
    pk_id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurantName VARCHAR(255) NOT NULL,
    restaurantAddress VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Users (
    pk_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    fk_restaurantId INT NULL,
    FOREIGN KEY (fk_restaurantId) REFERENCES Restaurants(pk_id)
);

CREATE TABLE IF NOT EXISTS Events  (
    pk_id INTEGER PRIMARY KEY AUTOINCREMENT,
    eventName VARCHAR(255) NOT NULL,
    maxNbUsers INT NOT NULL,
    basePrice MONEY NOT NULL,
    eventDate DATETIME NOT NULL,
    imageUrl VARCHAR(255) NULL,
    fk_restaurantId INT NOT NULL,
    FOREIGN KEY (fk_restaurantId) REFERENCES Restaurants(pk_id)
);

CREATE TABLE IF NOT EXISTS UsersEvents  (
    pk_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fk_userId INT NOT NULL,
    fk_eventId INT NOT NULL,
    FOREIGN KEY (fk_userId) REFERENCES Users(pk_id),
    FOREIGN KEY (fk_eventId) REFERENCES Events(pk_id)
);

CREATE TABLE IF NOT EXISTS EventMilestone  (
    pk_id INTEGER PRIMARY KEY AUTOINCREMENT,
    minNbUsers INT NOT NULL,
    priceDiscount MONEY NOT NULL,
    fk_eventId INT NOT NULL,
    FOREIGN KEY (fk_eventId) REFERENCES Events(pk_id)
);

CREATE TABLE IF NOT EXISTS Friends (
    pk_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fk_user1Id INT NOT NULL,
    fk_user2Id INT NOT NULL,
    FOREIGN KEY (fk_user1Id) REFERENCES Users(pk_id),
    FOREIGN KEY (fk_user2Id) REFERENCES Users(pk_id)
);