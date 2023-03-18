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
SELECT TOP 10*
FROM Production.Product
ORDER BY ProductID desc






