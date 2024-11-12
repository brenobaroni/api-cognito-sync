import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { identityConnection } from './datasource.config';

export class DataSources {
    identity: DataSource
}

@Global()
@Module({
    imports: [],
    providers: [
        {
            provide: DataSources,
            inject: [],
            useFactory: async () => {
                return {
                    identityConnection,
                };
            },
        }
    ],
    exports: [DataSources],
})
export class TypeOrmModule { }


