import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaGS {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column()
    telefone: string
}