--WHERE
SELECT coluna1,coluna2,coluna_n
FROM tabela
WHERE condicao;

/*

OPERADOR - DESCRI��O 
=          IGUAL
>          MAIOR QUE 
<          MENOR QUE
>=         MAIOR QUE OU IGUAL
<=         MAIOR QUE OU IGUAL
<>         DIFERENTE DE 
AND        OPERADOR LOGICO E 
OR         OPERADOR LOGICO OU 
asc        ordem crecente 
desc       ordem descrecente  
*/

--selecionar nome especifico-- 
SELECT *
FROM person.Person
WHERE lastName = 'miller' and FirstName = 'anna' /* selecionou somente a coluna com o sobrenome "miller" e o nome "anna"*/


--selecionar somente produto especifico--
SELECT*
FROM Production.Product
WHERE color = 'black' or color = 'red'

SELECT*
FROM Production.Product
WHERE ListPrice >= '1500' and ListPrice <= '4000'

/*
a equipe de produ�ao de produtos precisa do nome de todas as pe�as que pesam mais que 500kg mas nao mais que 700kg para
para inspe��o (peso em ingles weight)
*/

SELECT name
FROM Production.Product
WHERE weight >= '500' and Weight <= '700' 

/*
foi pedido pelo marketing uma rela�ao de todos os empregados(ingles employees) que sao casados(ingles single=solteiro
married=casado) e sao assalariados(ingles salaried)
*/
SELECT*
FROM HumanResources.Employee
WHERE MaritalStatus = 'M' and SalariedFlag = '1'

SELECT*
FROM HumanResources.Employee
WHERE MaritalStatus = 'S' and SalariedFlag = '1'


 /*
 um usuario chamado Peter kredbs esta devendo um pagamento, consiga email dele para que possamos enviar uma cobra�a 
 */
SELECT*
FROM Person.Person
WHERE FirstName ='peter' and LastName = 'krebs'

SELECT*
FROM person.EmailAddress
WHERE BusinessEntityID = '26'  




