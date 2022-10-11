import { Router } from 'express'

import { getAllRegCiclos, createNewRegCiclo } from '../controllers/formCiclos.controllers'

const router = Router();

router.get('/regCiclo', getAllRegCiclos)

router.post('/regCiclo', createNewRegCiclo)

router.get('/regCiclo/:id', )
router.get('/regCiclofecha/:fecha', )

router.delete('/regCiclo/:id', )

router.put('/regCiclo/:id', )

export default router