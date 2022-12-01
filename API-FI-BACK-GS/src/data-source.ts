import "reflect-metadata"
import { DataSource } from "typeorm"
import { SistemaGS } from "./entity/SistemaGS"
import { UserGS } from "./entity/UserGS"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "MariO@123",
    database: "Faculdade",
    entities: [SistemaGS,UserGS],
    synchronize: true,
    logging:false
    
})