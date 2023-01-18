<h1>Instrucciones para hacer funcionar el proyecto.</h1>
<ul>
<li>Configurar en WebApplication2/Models/ChallengeContext en la linea 21 la configuración para entrar en tu base de datos, ten en cuenta que necesitarás una base de datos llamada Challenge y una tabla llamada  Encuestas, puedes crearla con la siguiente query</li>

```
CREATE TABLE dbo.Encuestas 
(
 Id int NOT NULL IDENTITY (1, 1),
 NumeroUsuario int NULL,
 FechaNacimiento date NULL,
 Sexo char(1) NULL,
 Periodo int NULL,
 CantidadPeliculas int NULL
) ON [PRIMARY] 
GO
ALTER TABLE dbo.Encuestas ADD CONSTRAINT
 PK_Encuestas PRIMARY KEY CLUSTERED 
(
 Id 
) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS =
ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY] 
GO
```
<li>Una vez esto hacer andar el proyecto WebApplication2 con el comando dotnet run o en Visual Studio run without debugging</li>
<li>En el frontend del proyecto tienes 2 opciones para ver como funciona la app, puedes cargar un archivo de texto para que devuelva los promedios que luego alimentarán los gráficos, te dejé en la raíz del proyecto un "archivo.txt" para que pruebes</li>
<li> También puedes cargar con esos mismo datos de archivo.txt tu base de datos para que esta haga lo mismo, pero con información de tu base de datos.</li>
<li> si tienes algún problema corriendo el proyecto, comunicamelo, puedes estar teniendo problemas con los puertos en los que la app funciona por defecto.</li>
</ul>
