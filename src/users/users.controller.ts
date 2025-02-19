import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
@Controller('users')
export class UsersController {
  @Get()
  findAll(willy = true): boolean {
    return willy;
  }

  @Get('intern')
  findIntern(){
      return  "Willy"
      
  }

 @Post()
 create(@Body() user:{}){
return "user"
 }

 @Post("login")
 login(@Body() user:{}){
   return "User logged in"
 }
}

