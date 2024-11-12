import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseMessage } from 'src/decorators/response-message.decorator';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }


    @Get()
    @ResponseMessage('Fetched Stats Success')
    async getUsers() {
        return await this.userService.getUsers();
    }
}
