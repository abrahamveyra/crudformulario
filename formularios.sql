CREATE TABLE tb_wap_rsuelo_pro_01(
pk_wap_rsuelo_pro_01 INT IDENTITY(1,1),
humedad float not null,
fecha datetime unique,
rancho_revisado varchar(50) not null unique,
metodo_aplicacion varchar(50) not null unique,
status_producto varchar(5) not null,
presion_riego_valvula float not null,
presion_riego_cintilla_manguera float not null,
ph_gotero float not null,
ph_bomba float not null,
ph_tierra float not null,
ce_gotero float not null,
ce_bomba float not null,
ce_tierra float not null,
evapotranspiracion float not null,
comentario_general varchar(255) not null,

primary key (pk_wap_rsuelo_pro_01)
)

insert into tb_wap_rsuelo_pro_01 values(2.5, '07/10/2022', 'casa blanca', 'charco', 'si', 5.2, 2.5, 3.5, 3.2, 6, 6.2, 8.2, 5.1, 2.2, 'se revento una manguera')


