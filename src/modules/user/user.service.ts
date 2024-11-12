import { Injectable } from '@nestjs/common';
import { DataSources } from 'src/typeorm/typeorm.module';

@Injectable()
export class UserService {
    private readonly dataSources: DataSources;
    constructor(dataSources: DataSources) { this.dataSources = dataSources; }



    async getUsers() {
        const users = await this.dataSources.identity.query('SELECT * FROM [User]');

        return users;
    }

}
