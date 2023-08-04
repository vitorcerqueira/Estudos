--ORDER BY
--orderne o resultado crecente ou decrecente--  


/*ordenar nome por ordem crecente*/
SELECT*
FROM person.Person
ORDER BY FirstName asc --(asc é o comando para crecente)
-----------------------------------------------------------

/*ordenar nome por ordem decrecente*/
SELECT*
FROM Person.Person
ORDER BY FirstName desc 
-------------------------------------------------------------------
/*ordenar por mais colunas*/
SELECT*
FROM person.person
ORDER BY FirstName asc,LastName desc 
--------------------------------------------------------------------------
/*selecionar coluna especifica ordem crecente ou decrcente*/
SELECT FirstName,LastName
FROM Person.Person
ORDER BY MiddleName asc
----------------------------------------------------------
/*obter o product ID dos 10 produtos mais caros cadastrado no sistema listando do mais caro para o mais barato*/
SELECT TOP 10 Productid
FROM Production.Product
ORDER BY listprice desc
----------------------------------------------------------------------------------------------------------------
/*obter o nome e numero do produto dos produtos que tem productID entre 1~4 */
SELECT TOP 4 name,productnumber
FROM Production.Product
ORDER BY Productid asc







