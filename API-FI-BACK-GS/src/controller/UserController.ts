import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { UserGS } from "../entity/UserGS"
import { AppDataSource } from "../data-source"
import { SistemaGS } from "../entity/SistemaGS"

export class UserGSController {

    private userGSRepository = AppDataSource.getRepository(UserGS)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userGSRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.userGSRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userGSRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {

        const produto = request.params
            const user = await AppDataSource.getRepository(UserGS).delete(produto)
            if(user.affected ==1){
                const userUpdated = await AppDataSource.getRepository(UserGS).findOneBy(produto)
                response.json(userUpdated)
                }}
  
    }


export class SistemaGSController {

    private sistemaGSRepository = AppDataSource.getRepository(SistemaGS)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.sistemaGSRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.sistemaGSRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.sistemaGSRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {

        const produto = request.params
            const user = await AppDataSource.getRepository(SistemaGS).delete(produto)
            if(user.affected ==1){
                const userUpdated = await AppDataSource.getRepository(SistemaGS).findOneBy(produto)
                response.json(userUpdated)
                }}
  
    }

    

