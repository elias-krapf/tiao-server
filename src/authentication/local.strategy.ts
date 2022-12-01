import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User } from "../users/user";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private authServer: AuthService) {
    super();
  }

  async validate(mailAddress: string, password: string): Promise<User> {
    const user = await this.authServer.validateUser(mailAddress, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}