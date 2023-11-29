export interface Club {
  id: number;
  code: string;
  name: string;
  imageURL: string;
}

export interface ClubData {
  Code: string;
  Name: string;
  Images: ClubImages;
}

export interface ClubImages {
  Crest: string;
}

export interface ClubResponse {
  Data: ClubData[];
  Total: number;
}