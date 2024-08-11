### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
postgreslql is a object-relational databse manaagment system

- What is the difference between SQL and PostgreSQL?
sql servers are databses that are pretty limited in supporting other languages and confined offering only relational databse while postgreSQL offers more options with data types, langauge compatabiity, and flexability.

- In `psql`, how do you connect to a database?
/c database name

- What is the difference between `HAVING` and `WHERE`?
having applies to a group where you want to goup something that has a speciifc condition where WHERE is applied ot individual rows where your wanting to update, select, or delete and apply to that specific row

- What is the difference between an `INNER` and `OUTER` join?
INNER returns the rows that match bewtween to tables while OUTER can be used to find data between tables that dont have mathcing data

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
Combines mathcing rows from either the left table or the right table depending on specified join

- What is an ORM? What do they do?
AN orm is object-relational mapping and SQLA is an example of an orm. it allows us to use Python to interact with our databse and make quries among other things that effect our datbase within python

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
  AJAX is used on the client-side for asynchronous updates to our web page while server side requests uses server to server communication to use data and logic.

- What is CSRF? What is the purpose of the CSRF token?
a toke gerneated by the server to be used to validate requests to protect against invalid requests from bad sources

- What is the purpose of `form.hidden_tag()`?
used ot add hidden fileds ot a form in order ot protect it. The form will submit a csfr token upon sumbmission adding a level of security