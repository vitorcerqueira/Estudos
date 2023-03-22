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
