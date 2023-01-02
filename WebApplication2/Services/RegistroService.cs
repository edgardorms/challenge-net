using WebApplication2.Models;

namespace WebApplication2.Services
{
    public class RegistroService
    {
        public static List<Registro> LeerArchivo(string rutaArchivo)
        {
            var registros = new List<Registro>();

            using (var reader = new StreamReader(rutaArchivo))
            {
                while (!reader.EndOfStream)
                {
                    var linea = reader.ReadLine();
                    var campos = linea.Split(',');
                    var registro = new Registro
                    {
                        NumeroUsuario = int.Parse(campos[0]),
                        FechaNacimiento = DateTime.Parse(campos[1]),
                        Sexo = campos[2],
                        Periodo =int.Parse(campos[3]),
                        CantidadPeliculas = int.Parse(campos[4])
                    };
                    registros.Add(registro);
                }
            }

            return registros;
        }
    }

}
