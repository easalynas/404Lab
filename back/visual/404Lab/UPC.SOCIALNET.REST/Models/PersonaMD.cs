using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UPC.SOCIALNET.REST.Models
{
    public class PersonaMD
    {
    public long IdPersona { get; set; }
    public string Apepat { get; set; }
    public string Apemat { get; set; }
    public string Nombres { get; set; }
    public string Sexo { get; set; }
    public string Email { get; set; }
    public int Doctip { get; set; }
    public string Docnro { get; set; }
    //public date Fecnac { get; set; }
    public int Edad { get; set; }
    public string Password { get; set; }
    public string Alias { get; set; }
    public string Img { get; set; }
}
}