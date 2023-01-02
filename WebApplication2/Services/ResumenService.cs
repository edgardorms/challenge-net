using WebApplication2.Models;

namespace WebApplication2.Services
{
    public class ResumenService
    {
        public static InformacionResumida CalcularResumen(List<Registro> registros)
        {
            var informacionResumida = new InformacionResumida();

            // Promedio de cantidad de películas vistas
            informacionResumida.PromedioPeliculasVistas = registros.Average(x => x.CantidadPeliculas);

            // Promedio de cantidad de películas vistas por periodo
            informacionResumida.PromedioPeliculasVistasPorPeriodo = registros
                .GroupBy(x => x.Periodo)
                .ToDictionary(x => x.Key, x => x.Average(y => y.CantidadPeliculas));

            // Promedio de cantidad de películas por rango de edad
            informacionResumida.PromedioPeliculasPorRangoEdad = registros
                .GroupBy(x => Math.Floor((double)(DateTime.Now.Year - x.FechaNacimiento.Year) / 10))
                .ToDictionary(x => $"{x.Key * 10}-{x.Key * 10 + 9}", x => x.Average(y => y.CantidadPeliculas));

            // Promedio de cantidad de películas por sexo
            informacionResumida.PromedioPeliculasPorSexo = registros
                .GroupBy(x => x.Sexo)
                .ToDictionary(x => x.Key, x => x.Average(y => y.CantidadPeliculas));

            // Promedio de cantidad de películas vistas por período y sexo
            informacionResumida.PromedioPeliculasVistasPorPeriodoMasculino = registros
                .Where(x => x.Sexo.Contains('M'))
                .GroupBy(x => x.Periodo)
                .ToDictionary(x => x.Key, x => x.Average(y => y.CantidadPeliculas));

            informacionResumida.PromedioPeliculasVistasPorPeriodoFemenino = registros
                .Where(x => x.Sexo.Contains('F'))
                .GroupBy(x => x.Periodo)
                .ToDictionary(x => x.Key, x => x.Average(y => y.CantidadPeliculas));

            return informacionResumida;
        }
    }
}
