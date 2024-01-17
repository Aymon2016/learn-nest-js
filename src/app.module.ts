import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./dbModule/database.module";
import { JobsModule } from "./jobCrud/jobs.module";
import { MongooseModelsModule } from "./mongose.models.module/mongoose.models.module";
import { UsersModule } from "./userCrud/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModelsModule,
    UsersModule,
    JobsModule,
  ],
})
export class AppModule {}