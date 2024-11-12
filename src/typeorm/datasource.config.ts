import { registerAs } from "@nestjs/config";
import { User } from "../modules/user/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env' });


const config = {
    type: 'mssql',
    host: process.env.DB_IDENTITY_HOST,
    port: parseInt(process.env.DB_IDENTITY_PORT),
    username: process.env.DB_IDENTITY_USER,
    password: process.env.DB_IDENTITY_PASS,
    database: process.env.DB_IDENTITY_DATABASE ?? 'identity',
    migrationsTableName: '__migrations_history',
    autoLoadEntities: true,
    migrations: ["dist/migrations/*{.ts,.js}"],
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
    logging: true,
    options: {
        trustServerCertificate: true
    }
} as DataSourceOptions

export default registerAs('typeorm', () => config)
export const identityConnection = new DataSource(config as DataSourceOptions);