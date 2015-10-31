CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer(3),
  message varchar(255),
  nameId integer(3),
  roomId integer(3)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE name (
  id integer(3),
  name varchar(50)
);

CREATE TABLE room (
  id integer(3),
  room varchar(50)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

