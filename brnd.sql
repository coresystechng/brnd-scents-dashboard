CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  surname VARCHAR(50),
  retailer_code VARCHAR(50),
  phone_number VARCHAR(20),
  email VARCHAR(100),
  rank VARCHAR(20) DEFAULT 'bronze',
  state VARCHAR(50),
  password VARCHAR(255)
);
