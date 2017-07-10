
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Playlist } from './models/Playlist';
import { Song } from './models/Song';

createConnection()
    .then(async connection => {
        console.log("----- Before -----");
        await printPlaylists();

        let playlist2 = await Playlist.findOneById(2);
        let song2 = await Song.findOneById(2);
        if(playlist2 && song2) {
            playlist2.songs = [song2];
            await Playlist.save(playlist2);
            console.log("----- After -----");
            await printPlaylists();
        }
        

        console.log('ok');
        connection.close();
        
    }).catch(error => {
        console.log('error=', error);
    })

async function printPlaylists() {
    let playlist1 = await Playlist.findOneById(1, {relations: ["songs"]});
    let playlist2 = await Playlist.findOneById(2, {relations: ["songs"]});

    if(playlist1 && playlist2) {
        console.log("playlist1.songs=", playlist1.songs);
        console.log("playlist2.songs=", playlist2.songs);
    }
}