--BETWEEN--
/* o BETWEEN é usado para encontrar valor entre um valor minimo e valor maximo.

o significado de BETWEEN é "entre".

valor BETWEEN minimo and maximo.

é a mesma coisa que dizer:
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


