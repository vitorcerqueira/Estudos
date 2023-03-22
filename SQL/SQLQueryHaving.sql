--HAVING
--o having é basicamente muito usado em junção com o grupo by para filtrar resultado de um agrupamento.
--de uma forma mais simples eu gosto de entender ele como basicamente um WHERE para dados agrupados

--sintaxe HAVING 
SELECT coluna1,funcaoagrecacao(coluna2)
FROM nomeTabela
GROUP BY coluna1
HAVING condicao;

/*DIFERENÇA entre HAVING e WHERE 
é que o GROUP BY é aplicado depois que os dados ja foram agrupados, enquanto o WHERE é aplicado antes 
dos dados serem agrupados*/ 

--vamos dizer que queremos saber quais nomes no sistema tem uma ocorrencia maior que 10 vezes 
SELECT firstName,COUNT(firstname)AS "quantidade"
FROM Person.Person
GROUP BY firstName
HAVING COUNT(firstName) >10

--quero saber quais produtos que no total de vendas estao entre 162k a 500k
SELECT TOP 10*
FROM sales.SalesOrderDetail

SELECT productid,SUM(linetotal) AS "Total"
FROM sales.SalesOrderDetail
GROUP BY ProductID
HAVING SUM(linetotal) between 162000 and 500000

