--DESAFIO FUNDAMENTOS SQL --
/*1- quantos produtos temos cadastrado no sistema que custam mais que 1500 dolares?*/

SELECT COUNT (ListPrice)
FROM Production.Product
WHERE ListPrice > '1500' 

/*2- quantas pessoas temos com o sobrenome que inicia com a letra p*/
SELECT COUNT (LastName)
FROM Person.Person
WHERE LastName like 'P%'

/*2- */





