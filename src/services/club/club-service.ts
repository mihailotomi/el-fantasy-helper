import { Knex } from "knex";
import { IClubService } from "./club-service-interface";
import { injectable } from "inversify";

@injectable()
export class ClubService implements IClubService {
  async checkClubExists(code: string, knex: Knex): Promise<boolean> {
    try {
      const result = await knex("club").where("code", code).first();
      return !!result;
    } catch (error: any) {
      throw new Error(`checkClubExists: ${error?.message}`);
    }
  }

  log(){
    console.log('opsasaaaaaaaaaaaaa');
  }
}
