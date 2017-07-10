import {Connection, EntityManager, MigrationInterface, QueryRunner} from "typeorm";
import { Playlist } from '../models/Playlist';
import { Song } from '../models/Song';

export class seed1499721331012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        
        let playlist1 = new Playlist("Playlist1");
        let song1 = new Song("Song1");
        let song2 = new Song("Song2");
        let song3 = new Song("Song3");
        playlist1.songs = [song1, song2, song3];
        await Playlist.save(playlist1);
        
        let playlist2 = new Playlist("Playlist2");
        playlist2.songs = [song1];
        await Playlist.save(playlist2);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
