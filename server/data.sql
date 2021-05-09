
CREATE TABLE Users (
  user_id     SERIAL PRIMARY KEY,
  firstname     VARCHAR(50),
  lastname      VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100),

);
INSERT INTO users (firstname,lastname,email,password)
VALUES ( 'Paul', 'Pogba', 'pa@gmail.com', 'France');






-- CREATE TABLE User_Board
-- (
-- UserBoardID SERIAL PRIMARY KEY,
-- PersonID varchar(255)
-- BoardName
-- );

 CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
REFERENCES Persons(PersonID)


CREATE TABLE Board
(
BoardID SERIAL PRIMARY KEY,
BoardName varchar(255)
);
-- FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
--  CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
--     REFERENCES Persons(PersonID)
CONSTRAINT fk_customer
      FOREIGN KEY(customer_id) 
	  REFERENCES customers(customer_id)

CREATE TABLE Cards
(
CardID SERIAL PRIMARY KEY,
BoardID INT
FOREIGN KEY(BoardID) REFERENCES Board(BoardID)
TaskName varchar(255),
TaskDetail varchar(255),
Column INT NOT NULL
);