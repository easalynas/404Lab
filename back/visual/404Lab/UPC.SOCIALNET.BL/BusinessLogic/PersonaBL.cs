using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.SOCIALNET.BL.BusinessLogic
{
    public class PersonaBL
    {
        PersonaDA objPersonaDA;
        public PersonaBL()
        {
            objPersonaDA = new PersonaDA();
        }
        public List<Persona> ListarPersona()
        {
            return objPersonaDA.ListarPersona();
        }
        public long Registrar(Persona objPersona)
        {
            return objPersonaDA.Registrar(objPersona);
        }
        public bool Actualizar(Persona objPersona)
        {
            return objPersonaDA.Actualizar(objPersona);
        }
        public bool Eliminar(int Id)
        {
            return objPersonaDA.Eliminar(Id);
        }
    }
    

}
