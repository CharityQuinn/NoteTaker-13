DROP DATABASE IF EXISTS noteTaker_db;
CREATE DATABASE noteTaker_db;
USE noteTaker_db;

CREATE TABLE notes(
  note_id INT AUTO_INCREMENT NOT NULL,
  note_title VARCHAR(40),
  note_text TEXT(250),
  PRIMARY KEY (note_id);
);
