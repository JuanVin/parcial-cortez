Para hacer funcionar el proyecto se deben instalar las dependendencias tanto del backend como el frontend

Además, se debe crear una DB llamada instrumentos con una tabla llamada instrumento e importar los datos contenidos
por instrumentos.json (ubicado dentro de BackEnd) en dicha tabla.

A la hora de importar los datos, se debera colocar el campo "id" PK, NN y AI y el campo "activo" como BIT, el resto como "text"

La configuración para la base de datos se encuentra en la carpeta Backend/src/db

Para correr el backend -> npm run dev
Para correr el frontend -> npm start