--HAVING
--o having � basicamente muito usado em jun��o com o grupo by para filtrar resultado de um agrupamento.
--de uma forma mais simples eu gosto de entender ele como basicamente um WHERE para dados agrupados

--sintaxe HAVING 
SELECT coluna1,funcaoagrecacao(coluna2)
FROM nomeTabela
GROUP BY coluna1
HAVING condicao;