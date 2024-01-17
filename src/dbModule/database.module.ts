

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConfigService } from "./Mongoose.configService ";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule], 
      useClass: MongooseConfigService,
    }),
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}