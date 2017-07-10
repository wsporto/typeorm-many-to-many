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
class create_tables_playlist_and_song1499721278450 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `song` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(255) NOT NULL) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `playlist` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(255) NOT NULL) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `playlist_song` (`playlistId` int(11) NOT NULL, `songId` int(11) NOT NULL, PRIMARY KEY(`playlistId`, `songId`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE INDEX `ind_c245e54d2180d799f979d630e8` ON `playlist_song`(`playlistId`)");
            yield queryRunner.query("CREATE INDEX `ind_85dc851404fde53d87160d2689` ON `playlist_song`(`songId`)");
            yield queryRunner.query("ALTER TABLE `playlist_song` ADD CONSTRAINT `fk_47e16d4fab4a1bc9c0f834af316` FOREIGN KEY (`playlistId`) REFERENCES `playlist`(`id`)");
            yield queryRunner.query("ALTER TABLE `playlist_song` ADD CONSTRAINT `fk_858f68c444286f8bea32c92799d` FOREIGN KEY (`songId`) REFERENCES `song`(`id`)");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `playlist_song` DROP FOREIGN KEY `fk_858f68c444286f8bea32c92799d`");
            yield queryRunner.query("ALTER TABLE `playlist_song` DROP FOREIGN KEY `fk_47e16d4fab4a1bc9c0f834af316`");
            yield queryRunner.query("ALTER TABLE `playlist_song` DROP INDEX `ind_85dc851404fde53d87160d2689`");
            yield queryRunner.query("ALTER TABLE `playlist_song` DROP INDEX `ind_c245e54d2180d799f979d630e8`");
            yield queryRunner.query("DROP TABLE `playlist_song`");
            yield queryRunner.query("DROP TABLE `playlist`");
            yield queryRunner.query("DROP TABLE `song`");
        });
    }
}
exports.create_tables_playlist_and_song1499721278450 = create_tables_playlist_and_song1499721278450;
