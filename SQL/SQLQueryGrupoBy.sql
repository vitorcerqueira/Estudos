/*GRUPO BY
GRUPO BY é basicamente divide o resultado da sua pesquisa em grupos 
para cada grupo voce pode aplicar uma funçao de agregaçao por exemplo:
calcular a soma de intens
contar o numero de itens naquele grupo 
SINTAXE
SELECT coluna1,funcaoAgregacao(coluna2)
FROM nometabela
GRUPO BY coluna1;
*/

SELECT*
FROM Sales.SalesOrderDetail

SELECT SpecialOfferID, SUM(unitPrice) AS "SOMA"
FROM Sales.SalesOrderDetail
GROUP BY SpecialOfferID

SELECT SpecialOfferID, UnitPrice
FROM Sales.SalesOrderDetail
WHERE SpecialOfferID = 9

--vamos dizer que eu quero saber quantos cada produto foi vendido ate hoje 
SELECT* 
FROM Sales.SalesOrderDetail

SELECT productId, COUNT(ProductId) AS "CONTAGEM"
FROM Sales.SalesOrderDetail
GROUP BY ProductID

-- vamos dizer que eu quero saber quantos nomes de cada nome temos cadastrado em nosso banco de dados
SELECT firstname,COUNT(firstname)AS "CONTAGEM"
FROM Person.Person
GROUP BY FirstName

--na tabela production.product eu quero saber a media de preço para os produtos que sao pratas(silver)
SELECT color,AVG(listprice) AS "preço"
FROM Production.Product
WHERE color = 'silver'
GROUP BY Color

--desafio-- 
--1 eu preciso saber quantas pessoas tem o mesmo MiddleName agrupados por MiddleName
SELECT MiddleName,COUNT(MiddleName) AS "Quantidade"
FROM Person.Person
GROUP BY MiddleName
--


