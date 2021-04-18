using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.SOCIALNET.BL.BusinessLogic
{
    class PersonaDA
    {
        private readonly dmSocialNetDataContext db;
        public PersonaDA()
        {
            db = new dmSocialNetDataContext();
        }
        public List<Persona> ListarPersona()
        {
            //agregar trycatch
            var query = from persona in db.Persona
                        select persona;
            return query.ToList();
        }
        public long Registrar(Persona objPersona)
        {
            db.Persona.InsertOnSubmit(objPersona);
            db.SubmitChanges();
            return objPersona.IdPersona;
        }
        public bool Actualizar(Persona objPersona)
        {
            try
            {
                var query = from persona in db.Persona
                            where persona.IdPersona.Equals(objPersona.IdPersona)
                            select persona;
                var row = query.Single();
                row.Apepat = objPersona.Apepat;
                row.Apemat = objPersona.Apemat;
                row.Nombres = objPersona.Nombres;
                row.Sexo = objPersona.Sexo;
                row.Email = objPersona.Email;
                row.Doctip = objPersona.Doctip;
                row.Docnro = objPersona.Docnro;
                row.Edad = objPersona.Edad;
                row.Password = objPersona.Password;
                row.Alias = objPersona.Alias;                
                //row.Fecnac = objPersona.Fecnac;                
                row.Img = objPersona.Img;
                db.SubmitChanges();
                return true;
            } catch (Exception) {
                return false;
            }
            
        }
        public bool Eliminar(int Id)
        {
            try
            {
                var query = from persona in db.Persona
                            where persona.IdPersona.Equals(Id)
                            select persona;
                var row = query.Single();
                db.Persona.DeleteOnSubmit(row);
                db.SubmitChanges();
                return true;
            }
            catch (Exception) 
            {
                return false;
            }
        }
    }
}
