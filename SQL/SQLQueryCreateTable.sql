/*tabela cliente 
	-nome
	-cpf
	-endereco
	-telefone
	-email
	-nascimento

tabela municipio
	-UF
	-Municipio
*/

/*
CREATE TABLE Cliente 
(
	codigo				INT IDENTITY(1,1),
	nome				VARCHAR(100),
	cpf					VARCHAR(12),
	endereco			VARCHAR(200),
	telefone			VARCHAR(10),
	email				VARCHAR(50),
	nascimento			DATE,
	codigo_municipio	INT,
	salario				DECIMAL(12,2)

)


SELECT *
FROM cliente

CREATE TABLE Municipio
(
	codigo		INT IDENTITY(1,1),
	UF			VARCHAR(2),
	nome		VARCHAR(50),
)

SELECT *
FROM municipio 

--deletar registro da tabela 
DELETE 
FROM cliente
WHERE codigo =19

--deletar registro especifico (usar o WHERE para filtro se nao ira apagar todo registro da tabela)
DELETE 
FROM municipio
--WHERE nome = 'vitor' 

--inserir registros
INSERT municipio (nome, UF) VALUES('Linhares', 'ES')
INSERT municipio (nome, UF) VALUES('Londrina', 'PR')
INSERT municipio (nome, UF) VALUES('Teixeira de freitas', 'BA')
INSERT municipio (nome, UF) VALUES('Resplendor', 'MG')
INSERT municipio (nome, UF) VALUES('Sorocaba', 'SP')
INSERT municipio (nome, UF) VALUES('Macae', 'RJ')
INSERT municipio (nome, UF) VALUES('Pelotas', 'RS')
INSERT municipio (nome, UF) VALUES('Criciuma', 'SC')
INSERT municipio (nome, UF) VALUES('Bonito', 'MS')
INSERT municipio (nome, UF) VALUES('Manssejana', 'CE')
INSERT municipio (nome, UF) VALUES('Sooretama', 'ES')
--alterar coluna de uma tabela 
ALTER TABLE cliente
ALTER COLUMN nascimento VARCHAR(10)

-- adicionar coluna em uma tabela existente
ALTER TABLE cliente
ADD  codigo INT

--excluir coluna de uma tabela existente
ALTER TABLE cliente 
DROP COLUMN codigo

--excluir tabela cliente 
DROP TABLE cliente

--excluir tabela municipio
DROP TABLE municipio

*/
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1200,'Vitor'		,'rua 1','14013120712'	,'2786168144','vitor94.cerqueira@gmail.com','05/06/1994',1)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1200,'Wlysses'		,'rua 2','95313120712'	,'2777616814','Wlysses94.cerqueira@gmail.com','08/12/1998',2)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1300,'Gabriela'		,'rua 3','88013120712'	,'2756616814','Gabriela.cerqueira@gmail.com','10/01/1990',3)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1300,'Hally'		,'rua 4','45813120712'	,'2744616814','Hally94.cerqueira@gmail.com','05/04/1982',4)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1300,'Telma'		,'rua 5','32113120712'	,'2755616814','Telma94.cerqueira@gmail.com','05/12/2023',4)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1400,'Enzo'			,'rua 6','12513120712'	,'2766616814','Enzo.cerqueira@gmail.com','05/11/2015',4)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1500,'Rose'			,'rua 7','99913120712'	,'2712616814','Rose.cerqueira@gmail.com','05/10/2012',4)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1600,'Dalmir'		,'rua 8','88813120712'	,'1546616814','Dalmir.cerqueira@gmail.com','05/12/1981',5)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1700,'Mariano'		,'rua 9','77713120712'	,'1152616814','Mariano.cerqueira@gmail.com','05/07/1980',6)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (2000,'Ronaldo'		,'rua 10','66613120712'	,'4156616814','Ronaldo.cerqueira@gmail.com','05/05/1990',7)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (2000,'Wemerssom'	,'rua 11','55513120712'	,'8822616814','Wemerssom.cerqueira@gmail.com','05/02/1990',7)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (2000,'Messi'		,'rua 12','22213120712'	,'6655616814','Messi.cerqueira@gmail.com','05/09/1941',8)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (3000,'Kemilly'		,'rua 13','77713120712'	,'5522616814','Kemilly.cerqueira@gmail.com','05/08/2022',9)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (3000,'Anair'		,'rua 14','85213120712'	,'5524616814','Anair.cerqueira@gmail.com','05/12/2000',10)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (4000,'Gilberto'		,'rua 15','36913120712'	,'4466616814','Gilberto.cerqueira@gmail.com','05/01/2007',10)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (4000,'Pele'			,'rua 99','25713120712'	,'2266168144','Pele.cerqueira@gmail.com','05/03/2013',2)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (4000,'ronaldinho'	,'rua 80','15715553122'	,'1452616814','ronaldinho.barcelona@gmail.com','05/04/1987',1)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (1200,'neuer'		,'rua 77','17113120712'	,'2193616814','neuer.brasil@gmail.com','05/08/1951',10)
INSERT cliente (salario,nome,endereco,cpf,telefone,email,nascimento,codigo_municipio) VALUES (999,'mocinha'		,'rua 77','17113120712'	,'2193616814','mocinha.brasil@gmail.com','05/08/1951',11)

--criar relatrio no excel de clientes com nome,email,uf,municipio,de minas gerais 
ALTER TABLE cliente
ADD  codigo_municipio INT

SELECT *
FROM cliente
--WHERE nome = 'ronaldinho'

SELECT *
FROM municipio


--INNER JOIN
SELECT A.nome,email,uf,B.nome nome_municipio
FROM cliente A
INNER JOIN municipio B ON 
(
	codigo_municipio = B.codigo  --FALSE 
	and uf IN ('ES','MG') -- FALSE
)

TRUE AND TRUE 

/*

=
<> !=
>
<
=>
<=
between	
IN

*/



--ES
true and true or false
true or false
true

--MG
false and false or true
false or true
true


--LEFT JOIN
SELECT A.codigo, A.nome,email,uf,B.nome nome_municipio
FROM cliente A
LEFT JOIN municipio B ON 
(
	codigo_municipio = B.codigo  --FALSE 
	and uf IN ('ES','MG') -- FALSE
)


--RIGHT JOIN
SELECT A.codigo, A.nome,email,uf,B.nome nome_municipio
FROM cliente A
RIGHT JOIN municipio B ON 
(
	codigo_municipio = B.codigo  --FALSE 
	and uf IN ('ES','MG') -- FALSE
)

SELECT*
FROM cliente

--Criar relatrio no excel de clientes com nome,email,uf,municipio, nascidos em 1990.
SELECT A.nome,email,uf,B.nome nome_municipio,nascimento
FROM cliente A
JOIN municipio B ON 
(
	codigo_municipio = B.codigo  	
)
WHERE nascimento between '01/01/1990' and '31/12/1990'--nascimento >= '01/01/1990' and nascimento <= '31/12/1990'

--Criar relatrio no excel de clientes com nome,email,uf,municipio, nascidos em 1990 e 2000.
SELECT A.nome,email,uf,B.nome nome_municipio,nascimento
FROM cliente A
JOIN municipio B ON 
(
	codigo_municipio = B.codigo  	
)
WHERE nascimento between '01/01/1990' and '31/12/2000'

--Criar relatrio no excel de clientes com nome,email,uf,municipio, nascidos em 1990 e 2000 e 2013
SELECT A.nome,email,uf,B.nome nome_municipio,year(nascimento)  ANO,SALARIO
FROM cliente A
JOIN municipio B ON 
(
	codigo_municipio = B.codigo  	
)
WHERE year(nascimento) = 1990 or year(nascimento) = 2000 or year(nascimento) = 2013

--Criar relatrio no excel que mostre a quantidade de clientes de cada estado. 
SELECT  AVG(salario)media,uf, COUNT(*)TOT,SUM(salario) folha,b.nome
FROM cliente A
JOIN municipio B ON 
(
	codigo_municipio = B.codigo  	
)
GROUP BY uf,b.nome
HAVING COUNT(*)= 1

SELECT *
FROM cliente