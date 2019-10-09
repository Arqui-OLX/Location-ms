import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

}