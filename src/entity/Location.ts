import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column({type: "float"})
    latitude: number;

    @Column({type: "float"})
    longitude: number;

}