import { Router } from 'express'

import { getAllRegCiclos, createNewRegCiclo, getRegCicloById, getRegCicloByFecha, deleteRegCicloById, UpdateRegCicloById } from '../controllers/formCiclos.controllers'

const router = Router();

router.get('/regCiclo', getAllRegCiclos)

router.post('/regCiclo', createNewRegCiclo)

router.get('/regCiclo/:id', getRegCicloById)
router.get('/regCiclofecha/:fecha', getRegCicloByFecha)

router.delete('/regCiclo/:id', deleteRegCicloById)

router.put('/regCiclo/:id', UpdateRegCicloById)

export default router