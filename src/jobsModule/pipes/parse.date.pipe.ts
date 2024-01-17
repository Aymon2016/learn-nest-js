import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Optional,
} from "@nestjs/common";

export class ParseDateOptions {
  fromTimestamp: boolean;
  errorMsg?: string;
  dataKey?: string;
}

@Injectable()
export class ParseDatePipe implements PipeTransform {
  

  transform(value: string | number, metadata: ArgumentMetadata) {

       // extract data (key) 
    const { data: isKeyGiven } = metadata;

    if (!isKeyGiven) {
        value = value;
    }else{
        value = value["timestamp"]
    }

        const date = this.convertTimestamp(value)

         if (!date || isNaN(+date)) {

        throw new BadRequestException("invalid date");
        }
        // extract metatype (given data type)

    const { metatype } = metadata;

    switch (metatype) {
      case String:
        return date.toUTCString();

      case Date:
        return date;

      case Number:
        return date.getTime();

      default:
        return date.toISOString();
    }
  }

  convertTimestamp(timestamp: string | number) {
    timestamp = +timestamp;

    const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000);

    return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
  }
}