/*LIKE
vamos dizer que voce quer encontrar uma pessoa no banco de dados 
que voce sabe que o nome dela era ovi...alguma coisa
*/
SELECT* 
FROM person.person
WHERE Firstname like 'ovi%' /*o like ele vai ajudar a trazer alguma informaçao que eu nao souber todo o contexto
% no fim ele vai mostrar tudo que vem antes da palavra*/

SELECT* 
FROM person.person
WHERE Firstname like '%to'/*% se for no inicio ele vai mostrar o que vem no fim da palavra*/

SELECT* 
FROM person.person
WHERE Firstname like '%essa%'/*se usar duas % ele vai puxar tudo que esta no meio da palavra*/

SELECT* 
FROM person.person
WHERE Firstname like '%ro_'/*se % e _ ele vai limitar em um caracter*/
