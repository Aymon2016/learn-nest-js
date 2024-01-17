import { Body, Controller,Get, Post, Param,ParseIntPipe,UseFilters ,BadRequestException} from "@nestjs/common";
import { CreateJobDTO } from "./create.job.dto";
import { IdException } from './exception/IdException'
import { IdExceptionFilter } from './exception/IdException.filter'
import { JobsService } from "./jobs.service";
import { HttpExceptionFilter } from "./exception/http.exception.filter";


@Controller("jobs")
@UseFilters(HttpExceptionFilter)
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  createJob(@Body() createJobDto: CreateJobDTO) {
    return this.jobsService.createJob(createJobDto);
  }

 @Get(":id")
 @UseFilters(IdExceptionFilter)
 findJobById(@Param("id", ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new IdException("Invalid id");
    }

    if (id > 10) {
      throw new BadRequestException("Invalid id");
    }

    return { success: true, id };
  }

}