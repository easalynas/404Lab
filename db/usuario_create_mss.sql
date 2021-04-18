-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-04-17 05:22:11.234

-- tables
-- Table: persona

CREATE TABLE Persona (
    IdPersona bigint  NOT NULL IDENTITY,
    Apemat varchar(32)  NULL DEFAULT NULL,
    Apepat varchar(32)  NULL DEFAULT NULL,
    Nombres varchar(32)  NULL DEFAULT NULL,
    Sexo varchar(1)  NULL DEFAULT NULL,
    Alias varchar(32)  NULL DEFAULT NULL,
    Password varchar(32) NULL,
    Email varchar(64)  NULL DEFAULT NULL,
    Doctip int  NULL DEFAULT 1,
    Docnro varchar(11)  NULL DEFAULT NULL,
    Fecnac date  NULL DEFAULT NULL,
    Edad int  NULL DEFAULT NULL,
    Img varchar(32)  NULL DEFAULT NULL,
    Created timestamp  NOT NULL,
    Updated datetime  NULL,
    CONSTRAINT persona_pk PRIMARY KEY  (IdPersona)
);

CREATE INDEX Persona_doctip on persona (Doctip ASC)
;

-- Table: usuario
CREATE TABLE Usuario (
    Usucod int  NOT NULL IDENTITY,
    Codigo varchar(10)  NULL DEFAULT NULL,
    Usuario varchar(100)  NULL DEFAULT NULL,
    Pass varchar(32)  NULL DEFAULT NULL,
    Passold varchar(32)  NULL DEFAULT NULL,
    Estado int  NULL DEFAULT 1,
    Permiso int  NOT NULL,
    IdPersona bigint  NOT NULL,
    Created timestamp  NOT NULL,
    Updated datetime  NULL,

    CONSTRAINT usuario_pk PRIMARY KEY  (Usucod)
);

-- foreign keys
-- Reference: usuario_persona (table: usuario)
ALTER TABLE Usuario ADD CONSTRAINT Usuario_Persona
    FOREIGN KEY (IdPersona)
    REFERENCES persona (IdPersona);

-- End of file.



