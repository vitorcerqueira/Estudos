--HAVING
--o having � basicamente muito usado em jun��o com o grupo by para filtrar resultado de um agrupamento.
--de uma forma mais simples eu gosto de entender ele como basicamente um WHERE para dados agrupados

--sintaxe HAVING 
SELECT coluna1,funcaoagrecacao(coluna2)
FROM nomeTabela
GROUP BY coluna1
HAVING condicao;

/*DIFEREN�A entre HAVING e WHERE 
� que o GROUP BY � aplicado depois que os dados ja foram agrupados, enquanto o WHERE � aplicado antes 
dos dados serem agrupados*/ 


--vamos dizer que queremos saber quais nomes no sistema tem uma ocorrencia maior que 10 vezes 
SELECT firstName,COUNT(firstname)AS "quantidade"
FROM Person.Person
GROUP BY firstName
HAVING COUNT(firstName) >10

