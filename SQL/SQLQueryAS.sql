--AS
SELECT TOP 10 ListPrice as"preço de produto"
FROM Production.Product

SELECT TOP 10 AVG (listprice) AS "preço medio"
FROM Production.Product

--1) encontrar o firsname e lastname person.person e traduzir para o portugues
SELECT firstname AS "primeiro none", lastName AS "sobrenome"
FROM Person.Person

--2)encontrar productnumber da tabela production.product e traduzir para o portugues 
SELECT ProductNumber AS "numero do produto",Product.ProductID AS "codigo do produto"
FROM Production.Product

--3) encontrar sales.salesorderdetail uniprice traduzir para o portugues
SELECT UnitPrice AS "preço unitario"
FROM Sales.SalesOrderDetail

--4) encontrar firstname,lastname,productnumber,Product.ProductID,uniprice
SELECT firstname AS "primeiro none", lastName AS "sobrenome",ProductNumber AS "numero do produto",Product.ProductID AS "codigo do produto",UnitPrice AS "preço unitario"
FROM Person.Per son,Production.Product,Sales.SalesOrderDetail