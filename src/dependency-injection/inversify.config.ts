import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { IClubService } from "../services/club/club-service-interface";
import { ClubService } from "../services/club/club-service";
import { Knex } from "knex";
import knexConfig from "../../knexfile";
import { IClubValidator } from "../services/club/club-validator-interface";
import { ClubValidator } from "../services/club/club-validator";

const knexInstance = require("knex")(knexConfig);

const myContainer = new Container();
myContainer.bind<Knex>(TYPES.Knex).toConstantValue(knexInstance);
myContainer.bind<IClubService>(TYPES.IClubService).to(ClubService);
myContainer.bind<IClubValidator>(TYPES.IClubValidator).to(ClubValidator);

export { myContainer };
