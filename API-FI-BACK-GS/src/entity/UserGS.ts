import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserGS {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Modelo: string

    @Column()
    Quantidade: string

    @Column()
    preco: string

    @Column()
    marca: string
}