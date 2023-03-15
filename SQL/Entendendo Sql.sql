--[PRECISA SABER]
--CREATE TABLE 
--ALTER TABLE
--DROP TABLE (Excluir tabela)

-- SELECT
	-- ORDER BY
	-- INNER JOIN
	-- LEFT JOIN
	-- OUTER JOIN
	-- GROUP BY

-- UPDATE
-- DELETE

-- CABECALHO
-- ITENS

/*
CREATE TABLE dbo.CLIENTES
(
	CODIGO		INT,
	NOME		VARCHAR(50),
	CPF			VARCHAR(11),
	ENDERECO	VARCHAR(100)
)

DROP TABLE dbo.CLIENTES
*/

/*
	ALTER TABLE table_name
	ADD column_name datatype;

	ALTER TABLE table_name
	DROP COLUMN column_name;

*/
ALTER TABLE CLIENTES ADD NASCIMENTO DATE
ALTER TABLE CLIENTES DROP COLUMN DATA_NASCIMENTO 


/*
INSERT CLIENTES (CODIGO, NOME, ENDERECO) VALUES (1, 'ENZO CERQUEIRA'	, 'RUA JATOBA')
INSERT CLIENTES (CODIGO, NOME, ENDERECO) VALUES (2, 'WLYSSES CERQUEIRA', 'RUA VICENTE')
INSERT CLIENTES (CODIGO, NOME, ENDERECO) VALUES (3, 'VITOR CERQUEIRA'	, 'RUA NORONHA')
*/

SELECT * 
FROM CLIENTES 
ORDER BY NOME
--WHERE ENDERECO != 'RUA AMELIO'

/*
*/
UPDATE CLIENTES 
SET NASCIMENTO = '2023-03-01'
WHERE CODIGO = 2

DELETE 
FROM CLIENTES 
WHERE CODIGO = 1