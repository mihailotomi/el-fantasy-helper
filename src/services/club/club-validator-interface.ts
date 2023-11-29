export type CheckClubPayloadType = { type: "code"; code: string } | { type: "id"; id: "number" };

export interface IClubValidator {
  checkClubExists: (payload: CheckClubPayloadType) => Promise<boolean>;
}
