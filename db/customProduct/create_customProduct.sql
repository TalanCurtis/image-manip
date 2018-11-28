insert into custom_products
( name , path , tags , styleId, categories , layersData , colorRecipe , createdAt , updatedAt)
values
($1, $2, $3, $4, $5, $6, $7, $8, $9)
-- returning returns the new user or row that was created
returning *;