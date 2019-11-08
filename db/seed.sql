create table houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip int
);

insert into houses (name, address, city, state, zip)
values ('Duplex', '123 Cool St', 'Chico', 'CA', 95926),
('Triplex', '456 Awesome Ave', 'Seattle', 'WA', 98101);

alter table houses
add column img text,
add column mortgage decimal,
add column rent decimal;

update houses
set img = 'https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_standard/public/images/19/01/duplexrezoning_180905_2.jpg?itok=RaHnQKpK', mortgage = 5.99, rent = 85.23
where id = 1;

update houses
set img = 'https://images1.apartments.com/i2/-XKS-c7btBAiKTpp2BTJxCY0qyyMf1w9lf47G60zIlU/117/campus-two-triplex-development-seattle-wa-primary-photo.jpg', mortgage = 62.55, rent = 60.50
where id = 2;