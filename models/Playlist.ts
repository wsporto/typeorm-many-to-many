import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity } from "typeorm";
import { Song } from './Song';

@Entity()
export class Playlist extends BaseEntity {

    constructor(name:string) {
        super();
        this.name = name;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Song, song => song.playlists, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    @JoinTable({name: "playlist_song"})
    songs: Song[];

}
