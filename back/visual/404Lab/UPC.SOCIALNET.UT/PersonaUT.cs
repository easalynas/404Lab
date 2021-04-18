using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using UPC.SOCIALNET.BL;
using UPC.SOCIALNET.BL.BusinessLogic;

namespace UPC.SOCIALNET.UT
{
    [TestClass]
    public class PersonaUT
    {
        PersonaBL objP;
        public PersonaUT() {
            objP = new PersonaBL();

        }
        [TestMethod]
        public void Registro()
        {
            Persona obj = new Persona();
            //obj.IdPersona = 1;
            obj.Apepat = "Molina";
            obj.Apemat = "Asencios";
            obj.Nombres = "Victor";
            obj.Sexo = "M";
            obj.Edad = 30;
            var id = objP.Registrar(obj);
            Assert.AreEqual(2,id);
        }
        [TestMethod]
        public void Listar()
        {
            var count = objP.ListarPersona().Count();
            Assert.AreEqual(1, count);
        }
        [TestMethod]
        public void Actualizar()
        {
            Persona persona = new Persona();
            persona.IdPersona = 1;
            persona.Apepat = "Asencios";
            persona.Apemat = "Salazar";
            persona.Nombres = "Guillermina";
            persona.Password = "123123";
            persona.Alias = "guille";
            persona.Sexo = "F";
            persona.Email = "guille@gmail";
            persona.Doctip = 1;
            persona.Docnro = "12345678";
            persona.Edad = 30;
            persona.Img = "imagen.jpg";
            var id = objP.Actualizar(persona);
            Assert.AreEqual(true, id);
        }
        [TestMethod]
        public void Eliminar()
        {
            Persona obj = new Persona();
            var res = objP.Eliminar(1);
            Assert.AreEqual(true, res);
        }
    }
}
