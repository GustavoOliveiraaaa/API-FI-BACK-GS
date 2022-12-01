import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { UserGS } from "./entity/UserGS"
import { SistemaGS } from "./entity/SistemaGS";

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Modelo: "Deathader",
            Quantidade: "35",
            preco: "27",
            marca:'Razer'
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Modelo: "G305",
            Quantidade: "65",
            preco: "24",
            marca: 'Logitech'
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserGS, {
            Modelo: "Viper mini",
            Quantidade: "250",
            preco: "150",
            marca: 'Razer'
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaGS, {
            name: "Ruan Gabriel Elias Viana",
            email: 'ruangabrielviana@marcossousa.com',
            cpf: '321.892.646-77',
            telefone: '(27) 3637-4293'
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaGS, {
            name: "Lívia Rafaela Gonçalves",
            email: 'livia_rafaela_goncalves@saboia.me',
            cpf: '589.380.168-70',
            telefone: '(84) 3933-5789'
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaGS, {
            name: "Samuel César Henry Novaes",
            email: 'samuel.cesar.novaes@signatreinamentos.com.br',
            cpf: '164.011.915-97',
            telefone: '(91) 3915-1436'
        })
    )




    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
