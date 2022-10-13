import { getConnection, sql, ciclosquery } from "../database"; 

export const getAllRegCiclos = async (req, res) => {
    try {
        const pool = await getConnection();
const result = await pool.request().query(ciclosquery.getAllRegistrosCiclos);
res.json(result.recordset);
console.log(result)
    } catch (error) {
      res.status(500);
      res.send(error.messsage);
    }

};

export const createNewRegCiclo = async (req, res) => {
  const {fecha, cultivo_revisado, rancho_revisado, n_ciclo, tiempo_ciclo, n_base, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ce_gotero, mililitros_captacion, ph_dren, ce_dren, mililitros_dren, porcentaje_humedad, evapotranspiracion, comentario_general } = req.body

  if (fecha == null || cultivo_revisado == null || rancho_revisado == null || n_ciclo == null || tiempo_ciclo == null || n_base == null || status_producto == null || presion_riego_valvula == null || presion_riego_cintilla_manguera == null || ph_gotero == null || ce_gotero == null || mililitros_captacion == null || ph_dren == null || ce_dren == null || mililitros_dren == null || porcentaje_humedad == null || evapotranspiracion == null || comentario_general == null) {
      return res.status(404).json({msg: 'por favor llenar todos los campos'})
  }
  try {
      const pool = await getConnection()
  const result = await pool.request()
  .input("fecha", sql.DateTime, fecha)
  .input("cultivo_revisado", sql.VarChar, cultivo_revisado)
  .input("rancho_revisado", sql.VarChar, rancho_revisado)
  .input("n_ciclo", sql.Float, n_ciclo)
  .input("tiempo_ciclo", sql.Float, tiempo_ciclo)
  .input("n_base", sql.Float, n_base)
  .input("status_producto", sql.VarChar, status_producto)
  .input("presion_riego_valvula", sql.Float, presion_riego_valvula)
  .input("presion_riego_cintilla_manguera", sql.Float, presion_riego_cintilla_manguera)
  .input("ph_gotero", sql.Float, ph_gotero)
  .input("ce_gotero", sql.Float, ce_gotero)
  .input("mililitros_captacion", sql.Float, mililitros_captacion)
  .input("ph_dren", sql.Float, ph_dren)
  .input("ce_dren", sql.Float, ce_dren)
  .input("mililitros_dren", sql.Float, mililitros_dren)
  .input("porcentaje_humedad", sql.Float, porcentaje_humedad)
  .input("evapotranspiracion", sql.Float, evapotranspiracion)
  .input("comentario_general", sql.VarChar, comentario_general)
  .query(ciclosquery.createNewRegCiclo)
  res.json({fecha, cultivo_revisado, rancho_revisado, n_ciclo, tiempo_ciclo, n_base, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ce_gotero, mililitros_captacion, ph_dren, ce_dren, mililitros_dren, porcentaje_humedad, evapotranspiracion, comentario_general})
  
  } catch (err) {
      res.status(500);
      res.send(err.messsage)
      console.log(err.messsage)
  }
  }

  export const getRegCicloById = async (req, res) => { 
    const { id } = req.params;
    
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', id)
    .query(ciclosquery.getRegCicloById)
    
    res.send(result.recordset[0])
    
    }

    export const getRegCicloByFecha = async (req, res) => { 
        const { fecha } = req.params;

        try {
            const pool = await getConnection();
            const result = await pool.request()
            .input('fecha', fecha)
            .query(ciclosquery.getRegCicloByFecha)
            
            res.send(result.recordset[0])   
        } catch (err) {
            let result = {
                tabla: "ciclos",
                status: "ERROR",
                mensaje: err.message,
              };
              res.json(result)
        }
        }

        
        export const deleteRegCicloById = async (req, res) => { 
            const { id } = req.params;
            
            const pool = await getConnection();
            const result = await pool.request()
            .input('Id', id)
            .query(ciclosquery.deleteRegCicloById);
            
            res.sendStatus(204);
            
            }

            
            export const UpdateRegCicloById = async (req, res) => {
                const { id } = req.params;
                const {fecha, cultivo_revisado, rancho_revisado, n_ciclo, tiempo_ciclo, n_base, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ce_gotero, mililitros_captacion, ph_dren, ce_dren, mililitros_dren, porcentaje_humedad, evapotranspiracion, comentario_general } = req.body

                if (fecha == null || cultivo_revisado == null || rancho_revisado == null || n_ciclo == null || tiempo_ciclo == null || n_base == null || status_producto == null || presion_riego_valvula == null || presion_riego_cintilla_manguera == null || ph_gotero == null || ce_gotero == null || mililitros_captacion == null || ph_dren == null || ce_dren == null || mililitros_dren == null || porcentaje_humedad == null || evapotranspiracion == null || comentario_general == null) {
                    return res.status(404).json({msg: 'por favor llenar todos los campos'})
                }
    
                 try {
                    const pool = await getConnection();
                    await pool.request()
                    .input("fecha", sql.DateTime, fecha)
                    .input("cultivo_revisado", sql.VarChar, cultivo_revisado)
                    .input("rancho_revisado", sql.VarChar, rancho_revisado)
                    .input("n_ciclo", sql.Float, n_ciclo)
                    .input("tiempo_ciclo", sql.Float, tiempo_ciclo)
                    .input("n_base", sql.Float, n_base)
                    .input("status_producto", sql.VarChar, status_producto)
                    .input("presion_riego_valvula", sql.Float, presion_riego_valvula)
                    .input("presion_riego_cintilla_manguera", sql.Float, presion_riego_cintilla_manguera)
                    .input("ph_gotero", sql.Float, ph_gotero)
                    .input("ce_gotero", sql.Float, ce_gotero)
                    .input("mililitros_captacion", sql.Float, mililitros_captacion)
                    .input("ph_dren", sql.Float, ph_dren)
                    .input("ce_dren", sql.Float, ce_dren)
                    .input("mililitros_dren", sql.Float, mililitros_dren)
                    .input("porcentaje_humedad", sql.Float, porcentaje_humedad)
                    .input("evapotranspiracion", sql.Float, evapotranspiracion)
                    .input("comentario_general", sql.VarChar, comentario_general)
                   .input('Id', id)
                   .query(ciclosquery.UpdateRegCicloById)
       
                   res.json({fecha, cultivo_revisado, rancho_revisado, n_ciclo, tiempo_ciclo, n_base, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ce_gotero, mililitros_captacion, ph_dren, ce_dren, mililitros_dren, porcentaje_humedad, evapotranspiracion, comentario_general})
       
                 } catch (err) {
                    let result = {
                        tabla: "ciclos",
                        status: "ERROR",
                        mensaje: err.message,
                      };
                      res.json(result)
                 }
    }

      