// import {Injectable} from '@nestjs/common'
// import { AuthService } from '../AuthModule/auth.Service'

// @Injectable()
// export class userService {
//     constructor(private authService:AuthService) {
       
//     }
// }


// for pipe practise 

import { Injectable } from "@nestjs/common";

import { JOBS } from "./jobs";
import { JobType } from "./JobsType";
import { Job } from "./user.interface";


@Injectable()
export class JobsService {
  
  private readonly JOBS = new Map<number, Job>();

  constructor() {
    JOBS.forEach((job) => this.JOBS.set(job.id, job));
  }

  findById(id: number) {
    return this.JOBS.get(id);
  }

  findByIds(ids: number[]) {
    return JOBS.filter((job) =>
      ids.includes(job.id)
    );
  }

  findByRefId(refId: string) {
   return JOBS.find(
      (job) => job.refId === refId
    );
  }

  incSalaryByJobId(id: number, inc: number) {
    const job = this.JOBS.get(id);

    job.salary += inc;

    return job;
  }

  toggleJobActiveStatus(id: number, active: boolean) {
    const job = this.JOBS.get(id);

    if (!job) {
      return;
    }

    job.isActive = active;

    return job;
  }

  toggleJobType(id: number, type: JobType) {
    const job = this.JOBS.get(id);

    if (!job) {
      return;
    }

    job.type = type;

    return job;
  }

  setJobExp(id: number, exp: number) {
    const job = this.JOBS.get(id);

    if (!job) {
      return;
    }

    job.experience = exp;

    return job;
  }
}