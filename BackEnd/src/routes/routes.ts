import { Router } from "express";
import { controller } from "../controller/controller";

const router = Router();

router.get('/test', (req, res) => res.send("Hello world"))
router.get('/instruments', controller.getInstrument)
router.get('/instruments/:id', controller.getInstrumentById)
router.post('/createInstrument', controller.createInstrument)
router.put('/updateInstrument', controller.updateInstrument)
router.get('/deleteInstrument/:id', controller.deleteInstrument)

export default router;