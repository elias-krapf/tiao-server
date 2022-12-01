import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user";

@Controller("users")
export class UsersController {

  constructor(private userService: UsersService) {
  }

  @Get(":mailAddress")
  getUser(@Param("mailAddress") mailAddress): Promise<User | null> {
    return this.userService.findByMailAddress(mailAddress);
  }

}
