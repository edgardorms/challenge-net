using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using WebApplication2.Models;
using WebApplication2.Services;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : Controller
    {

        // Inyección de dependencia para el contexto de la base de datos
        private readonly ChallengeContext _context;

        public StockController(ChallengeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Registro>>> GetStock()
        {

            // Selecciona y mapea los datos de la tabla Encuestas a una lista de Registro
            List<Registro> resultado = await _context.Encuestas
                .Select(b => new Registro
                {
                    NumeroUsuario = (int)b.NumeroUsuario,
                    FechaNacimiento = (DateTime)b.FechaNacimiento,
                    Sexo = b.Sexo,
                    Periodo = (int)b.Periodo,
                    CantidadPeliculas = (int)b.CantidadPeliculas
                })
                .ToListAsync();

            // Calcula la información resumida
            var informacionResumida = ResumenService.CalcularResumen(resultado);

            // Devuelve la información resumida en formato JSON
            return Ok(informacionResumida);
        }
    }
}

