DROP TABLE post;
CREATE TABLE post(
  id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  content VARCHAR(1000) NOT NULL
);