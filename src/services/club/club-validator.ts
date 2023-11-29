import { inject, injectable } from "inversify";
import { CheckClubPayloadType, IClubValidator } from "./club-validator-interface";
import { TYPES } from "../../dependency-injection/types";
import { Knex } from "knex";

@injectable()
export class ClubValidator implements IClubValidator {
  constructor(@inject(TYPES.Knex) private knex: Knex) {}

  async checkClubExists(payload: CheckClubPayloadType): Promise<boolean> {
    try {
      const result = await this.knex("club").where(payload.type, payload[payload.type]).first();
      return !!result;
    } catch (error: any) {
      throw new Error(`checkClubExists: ${error?.message}`);
    }
  }
}
