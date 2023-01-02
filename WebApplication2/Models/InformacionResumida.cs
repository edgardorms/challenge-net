namespace WebApplication2.Models
{
    public class InformacionResumida
    {
        public double PromedioPeliculasVistas { get; set; }
        public Dictionary<int, double> PromedioPeliculasVistasPorPeriodo { get; set; }
        public Dictionary<string, double> PromedioPeliculasPorRangoEdad { get; set; }
        public Dictionary<string, double> PromedioPeliculasPorSexo { get; set; }
        public Dictionary<int, double> PromedioPeliculasVistasPorPeriodoMasculino { get; set; }
        public Dictionary<int, double> PromedioPeliculasVistasPorPeriodoFemenino { get; set; }
    }

}
