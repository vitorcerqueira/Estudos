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


 





