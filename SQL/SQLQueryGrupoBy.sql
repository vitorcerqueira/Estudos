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


