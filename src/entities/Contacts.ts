import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contacts')
export default class Contacts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cellphone: string;
}
