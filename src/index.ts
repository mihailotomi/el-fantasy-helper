import * as dotenv from 'dotenv';
import { myContainer } from './dependency-injection/inversify.config';
import { IClubService } from './services/club/club-service-interface';
import { TYPES } from './dependency-injection/types';
dotenv.config();

const clubService = myContainer.get<IClubService>(TYPES.IClubService);
