--DESAFIO FUNDAMENTOS SQL --
/*1- Quantos produtos temos cadastrado no sistema que custam mais que 1500 dolares?*/

SELECT COUNT (ListPrice)
FROM Production.Product
WHERE ListPrice > '1500' 

/*2- Quantas pessoas temos com o sobrenome que inicia com a letra p*/
SELECT COUNT (LastName)
FROM Person.Person
WHERE LastName like 'P%'

/*3- Em quantas cidades unicas estao cadastrados nossos clientes*/
SELECT COUNT (DISTINCT city)
FROM Person.Address

/*4- Quais sao as cidades unicas que temos cadastrados em nosso sistema*/
SELECT DISTINCT City
FROM Person.Address

/*5- Quantos produtos vermelhos tem preco entre 500 a 1000 dolares*/
SELECT COUNT(*)
FROM Production.Product
WHERE color = 'red' 
AND ListPrice between 500 and 1000 

/*6- quantos produtos cadastrados tem a palavra 'road' no nome deles*/
SELECT COUNT(*)
FROM Production.Product
WHERE name like '%road%'






 





