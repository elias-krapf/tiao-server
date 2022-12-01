import { Injectable } from "@nestjs/common";
import { User } from "./user";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async findByMailAddress(mailAddress: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: {
        emailAddress: mailAddress,
      }
    });
  }

}
