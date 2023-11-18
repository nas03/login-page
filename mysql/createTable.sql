-- Create the 'main_category' table
CREATE TABLE main_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(255),
    INDEX idx_category (category)
);

-- Create the 'sub_category' table with the primary key and foreign key constraint
CREATE TABLE sub_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    food_type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    INDEX idx_name (food_type),
    FOREIGN KEY (category) REFERENCES main_category(category)
);

-- Create the 'food_list' table with a foreign key reference to 'sub_category'
CREATE TABLE food_list (
    id INT PRIMARY KEY AUTO_INCREMENT,
    food_type VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    calories INT NOT NULL,
    FOREIGN KEY (food_type) REFERENCES sub_category(food_type)
);
