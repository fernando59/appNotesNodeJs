
create table  users
(
    id int primary key auto_increment,
    fullname varchar(50),
    username varchar(50),
    password varchar(100)

)


create table notes 
(
    id int primary key auto_increment,
    title varchar(50) not null,
    description varchar(800),
    userId int,
    foreign key(userId) references users(id)
)