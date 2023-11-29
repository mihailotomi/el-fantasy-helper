import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { IClubService } from "../services/club/club-service-interface";
import { ClubService } from "../services/club/club-service";

const myContainer = new Container();
myContainer.bind<IClubService>(TYPES.IClubService).to(ClubService);

export { myContainer };
