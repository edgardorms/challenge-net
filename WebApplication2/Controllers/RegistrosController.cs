using WebApplication2.Models;
using WebApplication2.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrosController : ControllerBase
    {
        [HttpPost]
        [Route("enviar")]

        public ActionResult<InformacionResumida> ProcesarRegistros([FromForm] IFormFile archivo)
        {

            // Guarda el archivo temporalmente en el servidor
            var rutaArchivo = Path.GetTempFileName();
            using (var stream = new FileStream(rutaArchivo, FileMode.Create))
            {
                archivo.CopyTo(stream);
            }

            // Lee los registros del archivo
            var registros = RegistroService.LeerArchivo(rutaArchivo);

            // Calcula la información resumida
            var informacionResumida = ResumenService.CalcularResumen(registros);

            // Devuelve la información resumida en formato JSON
            return Ok(informacionResumida);
        }


        [HttpGet]

        public string Get()
        {
            return "Hola mundo";
        }
    }
  

}
