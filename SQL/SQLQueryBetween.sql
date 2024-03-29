--BETWEEN--
/* o BETWEEN � usado para encontrar valor entre um valor minimo e valor maximo.

o significado de BETWEEN � "entre".

valor BETWEEN minimo and maximo.

� a mesma coisa que dizer:
valor >= minimo and valor <= maximo;
*/
---------------------------------------------------------
/* selecionando a coluna listprice entre 1000 e 1500*/
SELECT*
FROM Production.Product
WHERE ListPrice between 1000 and 1500;
------------------------------------------
/* selecionando a coluna listprice que nao esteje entre 1000 e 1500*/
SELECT*
FROM Production.Product
WHERE ListPrice not between 1000 and 1500;
------------------------------------------
/* selecionando a coluna HireDate que esteje entre a data 2009/01/0 e 2010/01/01*/
SELECT*
FROM HumanResources.Employee
WHERE HireDate between '2009/01/01' and '2010/01/01' /*data no sql ela come�a ano/mes/dia*/
ORDER BY hiredate 


