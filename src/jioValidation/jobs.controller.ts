import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateJobDTO } from "./create.job.dto";
import { createJobSchema } from "./create.jobs.schema";

import { JobsService } from "./jobs.service";
import { JoiValidationPipe } from "./joi.validation.pipe";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createJobSchema))
  createJob(@Body() createJobDto: CreateJobDTO) {
    return this.jobsService.createJob(createJobDto);
  }
}