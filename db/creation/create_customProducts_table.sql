 create table if not exists custom_products (
    id serial primary key,
    name text,
    path text,
    tags jsonb,
    styleId varchar(80),
    categories jsonb,
    layersData jsonb,
    colorRecipe int,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
)

-- update new user
update bp_users
set eye_color = 'brown' , hair_color = 'brown', age = 33;
where id = <'id of user wanting to update'>

-- insert dummy users 
insert into custom_products
( name , path , tags , styleId, categories , layersData , colorRecipe , createdAt , updatedAt)
values('JDBJ005_Test.png', 'c:/dev/prods/JDBJ005_Test.png', '["mens", "alleson"]', 'J3JSS', '["baseball"]', '{"layers": "testlayersData"}', 101, '2018-11-02 09:57:12.08-06', '2018-11-04 09:57:12.08-06');
