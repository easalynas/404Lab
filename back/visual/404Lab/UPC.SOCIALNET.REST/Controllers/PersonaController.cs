using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UPC.SOCIALNET.BL;
using UPC.SOCIALNET.BL.BusinessLogic;
using UPC.SOCIALNET.REST.Models;

namespace UPC.SOCIALNET.REST.Controllers
{
    public class PersonaController : ApiController
    {
        private readonly PersonaBL objPersonaBL;
        PersonaController()
        {
            objPersonaBL = new PersonaBL();
        }
        [HttpGet]
        public IHttpActionResult ListarPersona()
        {
            var personas = objPersonaBL.ListarPersona();
            var res = from v in personas
                      select new Persona()
                      {
                          IdPersona = v.IdPersona,
                          Apepat = v.Apepat,
                          Apemat = v.Apemat,
                          Nombres = v.Nombres,
                          Password = v.Password,
                          Alias = v.Alias,
                          Sexo = v.Sexo,
                          Email = v.Email,
                          Doctip = v.Doctip,
                          Docnro = v.Docnro,
                          Fecnac = v.Fecnac,
                          Edad = v.Edad,
                          Img = v.Img
                      };
            return Ok(res);
        }
        [HttpPost]
        public IHttpActionResult Registrar([FromBody]Persona objPersona)
        {
            return Ok(objPersonaBL.Registrar(objPersona));
        }
        [HttpPost]
        public IHttpActionResult Actualizar([FromBody] Persona objPersona)
        {
            return Ok(objPersonaBL.Actualizar(objPersona));
        }
        [HttpPost]
        public IHttpActionResult Eliminar(int Id)
        {
            return Ok(objPersonaBL.Eliminar(Id));
        }
    }
}
