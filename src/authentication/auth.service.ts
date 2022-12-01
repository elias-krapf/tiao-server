import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { User } from "../users/user";

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {
  }

  async validateUser(mailAddress: string, password: string): Promise<any> {
    const user: User = await this.usersService.findByMailAddress(mailAddress);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

}
