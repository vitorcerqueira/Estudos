--WHERE
SELECT coluna1,coluna2,coluna_n
FROM tabela
WHERE condicao;

/*

OPERADOR - DESCRIÇÃO 
=          IGUAL
>          MAIOR QUE 
<          MENOR QUE
>=         MAIOR QUE OU IGUAL
<=         MAIOR QUE OU IGUAL
<>         DIFERENTE DE 
AND        OPERADOR LOGICO E 
OR         OPERADOR LOGICO OU 

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



