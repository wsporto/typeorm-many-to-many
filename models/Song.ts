import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity } from 'typeorm';
import { Playlist } from './Playlist';

@Entity()
export class Song extends BaseEntity {

    constructor(name:string) {
        super();
        this.name = name;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Playlist, playlist => playlist.songs, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    playlists: Playlist[];

}
