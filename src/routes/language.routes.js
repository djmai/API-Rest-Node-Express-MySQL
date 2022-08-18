import { Router } from 'express';

// import { methods as languageController } from '../controllers/language.controller';
import { getLanguages, addLanguage, getLanguage, deleteLanguage, updateLanguage } from '../controllers/language.controller';

const router = Router();

// router.get('/', languageController.getLanguages)
router.get('/', getLanguages)
router.get('/:id', getLanguage)
router.post('/', addLanguage)
router.put('/:id', updateLanguage)
router.delete('/:id', deleteLanguage )

export default router;