import { Injectable,Scope } from '@nestjs/common';
interface User {
    name: string,
    age?: number,
}

@Injectable({scope: Scope.REQUEST})
export class userStore {
    private users: Array<User> = [];

    add(user: User) {
        this.users.push(user);
     }

    getUsers() {
            return [...this.users];
     }
}