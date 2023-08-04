/*MIN MAX SUM AVG 
funçao de agregracao basicamente agregam ou combinam dados de uma tabela em 1 resultado so 
*/

SELECT TOP 10 sum (linetotal) AS "Soma" /* AS = para colocar nome na culuna, SUM é a soma nesse caso somou toda culunaSales.SalesOrderDetail*/
FROM Sales.SalesOrderDetail

SELECT TOP 10 min (linetotal) AS "Minimo"/*MIN = minimo*/ 
FROM Sales.SalesOrderDetail

SELECT TOP 10 max (linetotal) AS "Maximo" /*MAX = maximo*/ 
FROM Sales.SalesOrderDetail

SELECT TOP 10 AVG (linetotal) AS "Media" /*AVG = media*/
FROM Sales.SalesOrderDetail
