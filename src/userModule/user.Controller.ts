// import {Controller} from '@nestjs/common'
// import { userService } from './user.Service'
// import { AuthService } from '../AuthModule/auth.Service'

// @Controller()
// export class userController {

//     constructor(private readonly authService:AuthService) {
//     }
// }


// pipe practise 

import { JobType } from "./JobsType";
import { JobsService } from "./user.Service";

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseEnumPipe,
  Put,
  Query,
  HttpStatus,
  UsePipes,
} from "@nestjs/common";


@Controller("jobs")
export class userController {

  constructor(private jobsService:JobsService){

  }
  // ParseIntPipe
  @Get(":id")
  findJobById(@Param("id", ParseIntPipe) id: number) {
   console.log(typeof(id))
  }

  // Pipe option for custom error message status code
  @Get("details/:id")
  findJobDetails(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ) {
    console.log(typeof(id))
  }

  // `@UsePipes` decorator to apply the pipe on all arguments (id, inc) of this method
  @Put("inc-salary/:id")
  @UsePipes(ParseIntPipe)
  incSalaryByAmount(@Param("id") id: number, @Query("increment") inc: number) {
    console.log(id,inc)
  }

  // ParseFloatPipe
  @Put("salary/:id")
  incSalary(
    @Param("id", ParseIntPipe) id: number,
    @Query("increment", ParseFloatPipe) inc: number
  ) {
     console.log(id,inc)
  }

  // ParseBoolPipe
  @Put("active/:id")
  toggleJobActiveStatus(
    @Param("id", ParseIntPipe) id: number,
    @Body("active", ParseBoolPipe) active: boolean
  ) {
     console.log(id,active)
  }

  // DefaultValuePipe
  @Put("exp/:id")
  setUpdateJobExp(
    @Param("id", ParseIntPipe) id: number,
    @Query("exp", new DefaultValuePipe(1), ParseIntPipe) exp: number
  ) {
     console.log(id)
  }


  @Put("type/:id")
    toggleJobType(
      @Param("id") id: number,
      @Body("type", new ParseEnumPipe(JobType)) type: JobType
    ) {
      const result = this.jobsService.toggleJobType(id,type)
      return result;
    }
}