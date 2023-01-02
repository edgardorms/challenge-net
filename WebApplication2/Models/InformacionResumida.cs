namespace WebApplication2.Models
{
    public class InformacionResumida
    {
        public double PromedioPeliculasVistas { get; set; }
        public Dictionary<string, double> PromedioPeliculasVistasPorPeriodo { get; set; }
        public Dictionary<string, double> PromedioPeliculasPorRangoEdad { get; set; }
        public Dictionary<char, double> PromedioPeliculasPorSexo { get; set; }
        public Dictionary<string, double> PromedioPeliculasVistasPorPeriodoMasculino { get; set; }
        public Dictionary<string, double> PromedioPeliculasVistasPorPeriodoFemenino { get; set; }
    }

}
