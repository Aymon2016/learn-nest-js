import { Injectable } from "@nestjs/common";
import { CreateJobDTO } from './create.job.dto';
// import { Job } from "./jobs.interface";

// const JOBS = new Map<number, Job>();
// let jobId = 1;

@Injectable()
export class JobsService {
  createJob(createJobDto: CreateJobDTO) {
    // const job = Object.assign({ ...createJobDto, id: jobId++ }, new Job());

    // JOBS.set(job.id, job);

    // return job;
  }
}