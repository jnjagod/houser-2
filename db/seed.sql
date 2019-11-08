create table houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip int,
img text,
mortgage decimal,
rent decimal
);

insert into houses (name, address, city, state, zip, img, mortgage, rent)
values ('Duplex', '123 Cool St', 'Chico', 'CA', 95926, 'https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_standard/public/images/19/01/duplexrezoning_180905_2.jpg?itok=RaHnQKpK', 5.99, 85.23),
('Triplex', '456 Awesome Ave', 'Seattle', 'WA', 98101, 'https://images1.apartments.com/i2/-XKS-c7btBAiKTpp2BTJxCY0qyyMf1w9lf47G60zIlU/117/campus-two-triplex-development-seattle-wa-primary-photo.jpg', 62.55, 60.50);