"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Playlist_1 = require("../models/Playlist");
const Song_1 = require("../models/Song");
class seed1499721331012 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            let playlist1 = new Playlist_1.Playlist("Playlist1");
            let song1 = new Song_1.Song("Song1");
            let song2 = new Song_1.Song("Song1");
            let song3 = new Song_1.Song("Song1");
            playlist1.songs = [song1, song2, song3];
            yield Playlist_1.Playlist.save(playlist1);
            let playlist2 = new Playlist_1.Playlist("Playlist2");
            playlist2.songs = [song1];
            yield Playlist_1.Playlist.save(playlist2);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.seed1499721331012 = seed1499721331012;
