-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-04-17 03:02:05.271

-- tables
-- Table: persona
CREATE TABLE persona (
    percod bigint NOT NULL AUTO_INCREMENT,
    apemat varchar(32) NULL DEFAULT NULL,
    apepat varchar(32) NULL DEFAULT NULL,
    nombres varchar(32) NULL DEFAULT NULL,
    sexo varchar(1) NULL DEFAULT NULL,
    email varchar(64) NULL DEFAULT NULL,
    doctip tinyint(2) NULL DEFAULT 1 COMMENT 'tipo de documento \n1 : dni',
    docnro varchar(11) NULL DEFAULT NULL,
    fecnac date NULL DEFAULT NULL,
    edad tinyint(3) NULL DEFAULT NULL,
    img varchar(32) NULL DEFAULT NULL,
    created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated timestamp NULL,
    CONSTRAINT persona_pk PRIMARY KEY (percod)
);

CREATE INDEX persona_doctip ON persona (doctip);

-- Table: usuario
CREATE TABLE usuario (
    usucod int NOT NULL,
    codigo varchar(10) NULL DEFAULT NULL,
    user varchar(100) NULL DEFAULT NULL,
    pass varchar(32) NULL DEFAULT NULL,
    passold varchar(32) NULL DEFAULT NULL,
    estado tinyint NULL DEFAULT 1,
    permiso int NOT NULL,
    percod bigint NOT NULL,
    created timestamp NOT NULL,
    updated timestamp NOT NULL,
    CONSTRAINT usuario_pk PRIMARY KEY (usucod)
);

-- foreign keys
-- Reference: usuario_persona (table: usuario)
ALTER TABLE usuario ADD CONSTRAINT usuario_persona FOREIGN KEY usuario_persona (percod)
    REFERENCES persona (percod);

-- End of file.

