export const ciclosquery = {
    getAllRegistrosCiclos: "select *from tb_wap_rciclo_pro_01",
    createNewRegCiclo: "insert into tb_wap_rciclo_pro_01 values"+
    "(@fecha, @cultivo_revisado, @rancho_revisado, @n_ciclo, @tiempo_ciclo, @n_base,"+
    " @status_producto, @presion_riego_valvula, @presion_riego_cintilla_manguera, @ph_gotero, "+
    "@ce_gotero, @mililitros_captacion, @ph_dren, @ce_dren, @mililitros_dren, @porcentaje_humedad, @evapotranspiracion, @comentario_general)",
    getRegSgetRegSueloById: "select *from tb_wap_rciclo_pro_01 where pk_wap_rciclo_pro_01 = @Id",
    getRegSgetRegSueloByFecha: "select *from tb_wap_rciclo_pro_01 where fecha =  @fecha",
    deleteRegistroById: 'delete from tb_wap_rciclo_pro_01 where pk_wap_rciclo_pro_01 = @Id',
    UpdateRegSueloById: "update tb_wap_rciclo_pro_01 set fecha = @fecha, cultivo = @cultivo_revisado, rancho_revisado = @rancho_revisado, #_ciclo = @#_ciclo, tiempo_ciclo = @tiempo_ciclo, #_base = @#_base, status_producto = @status_producto, presion_riego = @presion_riego_valvula, presion_riego_cintilla_manguera = @presion_riego_cintilla_manguera, ph_gotero = @ph_gotero, ce_gotero = @ce_gotero, mililitros_captacion = @mililitros_captacion, ph_dren = @ph_dren, ce_dren = @ce_dren, mililitros_dren = @mililitros_dren, porcentaje_humedad = @porcentaje_humedad, evapotranspiracion = @evapotranspiracion, comentario_general = @comentario_general where pk_wap_rciclo_pro_01 = @Id"
}