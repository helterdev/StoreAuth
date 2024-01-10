import { Request, Response } from 'express';
import { TaskModel } from '../db/models/task.model';
export const getTasks = async (req: Request, res: Response) => {
    const tasks = await TaskModel.find({
        user: req.user.id
    }).populate('user');
    return res.status(200).send({
        tasks
    })
};

export const getTask = async (req: Request, res: Response) => {
   try {
    const {id} = req.params;
    console.log(id);
    
    const taskFound = await TaskModel.findById(id);
    if(!taskFound){
        return res.status(400).send({
            message: 'La tarea no se encuentra'
        })
    }
    return res.status(200).send({
        task: taskFound
    }
    )
   } catch (error) {
        return res.send({
            error
        })
   }
   
};

export const postTask = async (req: Request, res: Response) => {
    try {
        const {title, description} = req.body;
        if(!title || !description){
            return res.status(500).send({
                message: 'Falta title or description'
            })
        }
        const newTask = new TaskModel({
            title,
            description,
            user: req.user.id
        });
    
        const createTask = await newTask.save();
        return res.status(200).send({
            task: createTask
        })
    } catch (error) {
        return res.send({
            error
        })
    }
};

export const putTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const Utask = await TaskModel.findByIdAndUpdate(id, body, {
            new: true
        });
        if(!Utask){
            return res.status(400).send({
                message: 'Task no encontrada para actualizar'
            })
        }

        return res.status(200).send({
            task: Utask
        })
    } catch (error) {
        console.log(error);
        
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const Task = await TaskModel.findByIdAndDelete(id);
        if(!Task){
            return res.status(400).send({
                message: 'tarea no encontrada o ya ha sido eliminada'
            })
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.send({
            error
        })
    }
};
