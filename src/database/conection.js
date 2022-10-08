import sql from 'mssql'

const dbSettings = {
    user : "sa",
    password: "0860863j",
    server: "localhost",
    database: "formularios",
    options: {
        encrypt: false, // for azure que es la nube de microsoft
        trustServerCertificate: true // change to true for local dev / self-signed certs confia en el certificado del servidor actual
      },
}

async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool;    
    } catch (error) {
      console.log(error)  
    }
    
}


