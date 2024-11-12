import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
    private readonly dataSources: DataSource;
    constructor(dataSources: DataSource) { this.dataSources = dataSources; }



    async getUsers() {
        try {
            const users = await this.dataSources.query('SELECT * FROM [User]');

            return { data: users };

        } catch (error) {
            throw new HttpException('Faild to request users..', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
