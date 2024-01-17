import { Module, Global } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { USER_MODEL, UserSchema } from "../userCrud/schemas/user.schema";
import { JOB_MODEL, JobSchema } from "../jobCrud/schemas/job.schemas";

const MODELS = [
  { name: USER_MODEL, schema: UserSchema },
  { name: JOB_MODEL, schema: JobSchema },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}