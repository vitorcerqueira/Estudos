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

