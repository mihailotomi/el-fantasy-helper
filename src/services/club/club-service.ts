import { Knex } from "knex";
import { IClubService } from "./club-service-interface";
import { inject, injectable } from "inversify";
import { ClubData, ClubResponse } from "../../models";
import axios from "axios";
import { TYPES } from "../../dependency-injection/types";

@injectable()
export class ClubService implements IClubService {
  constructor(@inject(TYPES.Knex) private knex: Knex) {}

  async createClub(clubData: ClubData): Promise<void> {
    try {
      await this.knex("club").insert({
        name: clubData.Name,
        code: clubData.Code,
        imageURL: clubData.Images.Crest,
      });
    } catch (error) {
      throw new Error(`createClub error: ${error.message}`);
    }
  }

  async getClubs(): Promise<ClubData[]> {
    const url = "https://api-live.euroleague.net/v2/competitions/E/seasons/E2023/clubs?Limit=20";

    try {
      const response = await axios.get(url);
      const jsonResponse: ClubResponse = response.data;

      console.log("Total clubs:", jsonResponse.Total);
      return jsonResponse.Data;
    } catch (error) {
      console.error("Error making HTTP request or parsing JSON:", error.message);
      throw error;
    }
  }
}
