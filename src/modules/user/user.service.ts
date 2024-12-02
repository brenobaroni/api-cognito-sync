import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private readonly dataSources: DataSource;
    constructor(dataSources: DataSource) { this.dataSources = dataSources; }



    async getUsers() {
        try {
            const users = await this.dataSources.manager.find(User);
            return { data: users };

        } catch (error) {
            throw new HttpException('Faild to request users..', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
