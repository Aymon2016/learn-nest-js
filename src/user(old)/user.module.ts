

// import { Module } from '@nestjs/common';

// import { UserController } from './user.controller';
// import { userStore } from './user.store';

// @Module({
//   controllers: [UserController],
//   providers: [userStore]
// })
// export class usermodule {}

import { Module } from '@nestjs/common';

import { UserController } from './user.controller';

// dynamic and value o pass korte pari factory funtion e

const dev = true
@Module({
  controllers: [UserController],
  // providers: [{provide:"database name" , useValue : "local host"}]

  providers: [{provide:"database name" ,
   useFactory:(isTrue:boolean = true)=>{
    const workingMode = isTrue ? 'Development mode': 'Production mode'
    return workingMode
  },
  // inject:["isTrue"]
  inject:[{token:"isTrue", optional:true}]
},
{
  provide:'isTrue',
  useValue: true
}

]
})
export class usermodule {}