using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace UPC.SOCIALNET.WCF
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IPersonaSVC" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface IPersonaSVC
    {
        [OperationContract]
        List<Persona> ListarPersona();
        [OperationContract]
        long Registrar(Persona persona);
        [OperationContract]
        bool Actualizar(Persona persona);
        [OperationContract]
        bool Eliminar(int Id);

    }
    [DataContract]
    public class Persona
    {
        [DataMember]
        public long IdPersona { get; set; }
        [DataMember]
        public string Apepat { get; set; }
        [DataMember]
        public string Apemat { get; set; }        
        [DataMember]
        public string Nombres { get; set; }
        [DataMember]
        public string Sexo { get; set; }
        [DataMember]
        public string Email { get; set; }
        [DataMember]
        public int Doctip { get; set; }
        [DataMember]
        public string Docnro { get; set; }
        //[DataMember]
        //public date Fecnac { get; set; }
        [DataMember]
        public int Edad { get; set; }
        [DataMember]
        public string Password { get; set; }
        [DataMember]
        public string Alias { get; set; }
        [DataMember]
        public string Img { get; set; }
    }
}
