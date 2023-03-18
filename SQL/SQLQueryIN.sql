--IN--
/*nos usamos o operador IN junto com WHERE. 
para verificar se um valor correpodem com qualquer valor passado na lista de valores*/

SELECT*
FROM person.person
WHERE BusinessEntityID IN (2,7,13)/*o in ele vai selecionar o que eu quero sem precisar fazer muitas linhas--*/

SELECT*
FROM person.person
WHERE BusinessEntityID NOT IN (2,7,13)/*o NOT ele nao vai selecionar o que eu colocar dentro do parentese*/
