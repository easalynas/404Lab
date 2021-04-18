using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using UPC.SOCIALNET.BL.BusinessLogic;

namespace UPC.SOCIALNET.WCF
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de clase "PersonaSVC" en el código, en svc y en el archivo de configuración a la vez.
    // NOTA: para iniciar el Cliente de prueba WCF para probar este servicio, seleccione PersonaSVC.svc o PersonaSVC.svc.cs en el Explorador de soluciones e inicie la depuración.
    public class PersonaSVC : IPersonaSVC
    {
        private readonly PersonaBL objPersonaBL;
        public PersonaSVC()
        {
            objPersonaBL = new PersonaBL();
        }

        public bool Actualizar(Persona persona)
        {
            try
            {
                var req = new BL.Persona()
                {
                    IdPersona= persona.IdPersona,
                    Apepat = persona.Apepat,
                    Apemat = persona.Apemat,
                    Nombres = persona.Nombres,
                    Sexo = persona.Sexo,
                    Email = persona.Email,
                    Doctip = 1,
                    Docnro = persona.Docnro,
                    Edad = persona.Edad,
                    Password = persona.Password,
                    Alias = persona.Alias,
                    //Fecnac = persona.Fecnac,
                    Img = persona.Img
                };
                return objPersonaBL.Actualizar(req);
            }
            catch (Exception) 
            {
                return false;
            }
            
        }

        public bool Eliminar(int Id)
        {
            return objPersonaBL.Eliminar(Id);
        }

        public List<Persona> ListarPersona()
        {
            var query = objPersonaBL.ListarPersona();
            var res = from persona in query
                      select new Persona {
                          IdPersona = persona.IdPersona,
                          Nombres = persona.Nombres,
                          //Edad = persona.Edad,
                          Sexo = persona.Sexo,
                      };
            return res.ToList();
        }

        public long Registrar(Persona persona)
        {
            var req = new BL.Persona() {
                Apepat = persona.Apepat,
                Apemat = persona.Apemat,                
                Nombres = persona.Nombres,
                Sexo = persona.Sexo,
                Email = persona.Email,
                Doctip = 1,
                Docnro = persona.Docnro,
                Edad = persona.Edad,
                Password = persona.Password,
                Alias = persona.Alias,                
                //Fecnac = persona.Fecnac,
                Img = persona.Img
            };
            return objPersonaBL.Registrar(req);
        }
    }
}
