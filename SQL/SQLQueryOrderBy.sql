--ORDER BY
--orderne o resultado crecente ou decrecente--  


/*ordenar nome por ordem crecente*/
SELECT*
FROM person.Person
ORDER BY FirstName asc --(asc � o comando para crecente)
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



