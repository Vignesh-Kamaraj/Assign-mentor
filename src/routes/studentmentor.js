import express from 'express'
import AssignController from '../controller/assignmentor.js'
const router = express.Router()
router.post('/Addmentor', AssignController.AddMentor)
router.post('/Addstudent', AssignController.AddStudent)
router.post('/Assignstudent', AssignController.Assignstudent)
router.post('/UpdateMentorToStudent', AssignController.UpdateMentorForStudent)
router.get('/AllStudentsForMentor', AssignController.AllStudentsForMentor)
router.get('/PreviousMentorForStudent', AssignController.PreviousMentorForStudent)

export default router