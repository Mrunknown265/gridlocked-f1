export type ErgastConstructor = {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
};

export type ErgastDriver = {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

export type ErgastDriverStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: ErgastDriver;
  Constructors: ErgastConstructor[];
};

export type DriverStandingsResponse = {
  MRData: {
    total: string;
    StandingsTable: {
      season: string;
      round: string;
      StandingsLists: Array<{
        season: string;
        round: string;
        DriverStandings: ErgastDriverStanding[];
      }>;
    };
  };
};

export type DriverStanding = {
  position: number;
  points: number;
  wins: number;
  driverId: string;
  code: string;
  givenName: string;
  familyName: string;
  permanentNumber: string;
  nationality: string;
  constructorId: string;
  constructorName: string;
};

export type StandingsMeta = {
  season: string;
  round: string;
  totalDrivers: number;
};

export type DriverStandingsResult = {
  standings: DriverStanding[];
  meta: StandingsMeta | null;
  error: string | null;
};
