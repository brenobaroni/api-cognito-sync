import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1731441263331 implements MigrationInterface {
    name = ' $npmConfigName1731441263331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" varchar(100) NOT NULL, "email" varchar(100) NOT NULL, CONSTRAINT "custom" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
