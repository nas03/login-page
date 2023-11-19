-- Create the 'main_category' table
CREATE TABLE main_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    main_category VARCHAR(255),
    INDEX idx_category (main_category)
);
-- Create the 'sub_category' table with the primary key and foreign key constraint
CREATE TABLE sub_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    main_category VARCHAR(255) NOT NULL,
    sub_category VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    slug VARCHAR(255) NOT NULL,
    INDEX idx_name (slug),
    FOREIGN KEY (main_category) REFERENCES main_category(main_category)
);
-- Create the 'food_list' table with a foreign key reference to 'sub_category'
CREATE TABLE food (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(255) NOT NULL,
    food VARCHAR(255) NOT NULL,
    calories INT NOT NULL,
    FOREIGN KEY (slug) REFERENCES sub_category(slug)
);