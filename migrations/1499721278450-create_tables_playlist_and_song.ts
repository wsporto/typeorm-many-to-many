import {Connection, EntityManager, MigrationInterface, QueryRunner} from "typeorm";

export class create_tables_playlist_and_song1499721278450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `song` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(255) NOT NULL) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `playlist` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(255) NOT NULL) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `playlist_song` (`playlistId` int(11) NOT NULL, `songId` int(11) NOT NULL, PRIMARY KEY(`playlistId`, `songId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE INDEX `ind_c245e54d2180d799f979d630e8` ON `playlist_song`(`playlistId`)");
        await queryRunner.query("CREATE INDEX `ind_85dc851404fde53d87160d2689` ON `playlist_song`(`songId`)");
        await queryRunner.query("ALTER TABLE `playlist_song` ADD CONSTRAINT `fk_47e16d4fab4a1bc9c0f834af316` FOREIGN KEY (`playlistId`) REFERENCES `playlist`(`id`)");
        await queryRunner.query("ALTER TABLE `playlist_song` ADD CONSTRAINT `fk_858f68c444286f8bea32c92799d` FOREIGN KEY (`songId`) REFERENCES `song`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `playlist_song` DROP FOREIGN KEY `fk_858f68c444286f8bea32c92799d`");
        await queryRunner.query("ALTER TABLE `playlist_song` DROP FOREIGN KEY `fk_47e16d4fab4a1bc9c0f834af316`");
        await queryRunner.query("ALTER TABLE `playlist_song` DROP INDEX `ind_85dc851404fde53d87160d2689`");
        await queryRunner.query("ALTER TABLE `playlist_song` DROP INDEX `ind_c245e54d2180d799f979d630e8`");
        await queryRunner.query("DROP TABLE `playlist_song`");
        await queryRunner.query("DROP TABLE `playlist`");
        await queryRunner.query("DROP TABLE `song`");
    }

}
