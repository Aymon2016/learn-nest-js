import { Controller, Post, Body } from '@nestjs/common';

@Controller('/users')
export class UserController {

  @Post('/video')
  addVide(@Body() bodyData: Record<string, any>) {
    return {
      message: 'Video added',
      data: bodyData.data,
    };
  }
}
