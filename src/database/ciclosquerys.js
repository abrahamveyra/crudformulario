export const ciclosquery = {
    getAllRegistrosCiclos: "select *from tb_wap_rciclo_pro_01",
    createNewRegCiclo: "insert into tb_wap_rciclo_pro_01 values"+
    "(@fecha, @cultivo_revisado, @rancho_revisado, @n_ciclo, @tiempo_ciclo, @n_base,"+
    " @status_producto, @presion_riego_valvula, @presion_riego_cintilla_manguera, @ph_gotero, "+
    "@ce_gotero, @mililitros_captacion, @ph_dren, @ce_dren, @mililitros_dren, @porcentaje_humedad, @evapotranspiracion, @comentario_general)",
    getRegCicloById: "select *from tb_wap_rciclo_pro_01 where pk_wap_rciclo_pro_01 = @Id",
    getRegCicloByFecha: "select *from tb_wap_rciclo_pro_01 where fecha =  @fecha",
    deleteRegCicloById: 'delete from tb_wap_rciclo_pro_01 where pk_wap_rciclo_pro_01 = @Id',
    UpdateRegCicloById: "update tb_wap_rciclo_pro_01 set fecha = @fecha, cultivo_revisado = @cultivo_revisado, rancho_revisado = @rancho_revisado, #_ciclo = @n_ciclo, tiempo_ciclo = @tiempo_ciclo, #_base = @n_base, status_producto = @status_producto, presion_riego_valvula = @presion_riego_valvula, presion_riego_cintilla_manguera = @presion_riego_cintilla_manguera, ph_gotero = @ph_gotero, ce_gotero = @ce_gotero, mililitros_captacion = @mililitros_captacion, ph_dren = @ph_dren, ce_dren = @ce_dren, mililitros_dren = @mililitros_dren, porcentaje_humedad = @porcentaje_humedad, evapotranspiracion = @evapotranspiracion, comentario_general = @comentario_general where pk_wap_rciclo_pro_01 = @Id"
}