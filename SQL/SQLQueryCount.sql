-- COUNT --
/*serve para retornar o numeros de linhas da condiçao que foi definido*/
--SINTAXE--
SELECT COUNT(DISTINCT coluna1)
FROM TABELA 
--------------------------------------------------------------------------------
SELECT COUNT (title)                 
FROM Person.Person

SELECT COUNT (DISTINCT title)                 
FROM Person.Person
---------------------------------------------------------------------------------
/*
quantos produtos temos cadastrados em nossa tabela de produtos(production.product)
*/
SELECT COUNT (DISTINCT name)
FROM Production.Product
--------------------------------------------------------------------------------------
/*
quantos tamanhos de produtos temos cadastrado em nossa tabela 
*/
SELECT COUNT (size)
FROM Production.Product


-----------------------------------------------------------
/*
quantos tamanhos diferentes de produtos eu tenho cadastrado em nossa tabela
*/
SELECT COUNT (DISTINCT size)
FROM Production.Product
