-- Create the 'food_category' table with the primary key
create table food_category (
    id int primary key auto_increment,
    category varchar(255) not null,
    name varchar(255) not null,
    display_name varchar(255) not null,
    description text not null,
    image_url varchar(255) not null,
    index idx_name (name)
);

-- Create the 'food_list' table with a foreign key reference to 'food_category'
create table food_list (
    id int primary key auto_increment,
    food_type varchar(255) not null,
    name varchar(255) not null,
    calories int not null,
    foreign key (food_type) references food_category(name)
);
