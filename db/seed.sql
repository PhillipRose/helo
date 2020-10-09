create table users (
user_id serial primary key,
username text, 
password text);


ALTER TABLE users
    ALTER COLUMN password SET DATA TYPE varchar(20)