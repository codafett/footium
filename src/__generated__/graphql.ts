/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Action = {
  __typename?: 'Action';
  _count?: Maybe<ActionCount>;
  data: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  realWorldTimestamp: Scalars['Float']['output'];
  timestamp: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type ActionCount = {
  __typename?: 'ActionCount';
  clubs: Scalars['Int']['output'];
  ethereumEvents: Scalars['Int']['output'];
  players: Scalars['Int']['output'];
};


export type ActionCountClubsArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type ActionCountEthereumEventsArgs = {
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type ActionCountPlayersArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};

export type ActionListRelationFilter = {
  every?: InputMaybe<ActionWhereInput>;
  none?: InputMaybe<ActionWhereInput>;
  some?: InputMaybe<ActionWhereInput>;
};

export type ActionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActionOrderByWithRelationInput = {
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  data?: InputMaybe<SortOrder>;
  ethereumEvents?: InputMaybe<EthereumEventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum ActionScalarFieldEnum {
  Data = 'data',
  Id = 'id',
  RealWorldTimestamp = 'realWorldTimestamp',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type ActionWhereInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  NOT?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  data?: InputMaybe<JsonFilter>;
  ethereumEvents?: InputMaybe<EthereumEventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ActionWhereUniqueInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  NOT?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  data?: InputMaybe<JsonFilter>;
  ethereumEvents?: InputMaybe<EthereumEventListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  players?: InputMaybe<PlayerListRelationFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
};

export type AggregateFixture = {
  __typename?: 'AggregateFixture';
  _avg?: Maybe<FixtureAvgAggregate>;
  _count?: Maybe<FixtureCountAggregate>;
  _max?: Maybe<FixtureMaxAggregate>;
  _min?: Maybe<FixtureMinAggregate>;
  _sum?: Maybe<FixtureSumAggregate>;
};

export type AvailableHomeGameTime = {
  __typename?: 'AvailableHomeGameTime';
  Club: Array<Club>;
  _count?: Maybe<AvailableHomeGameTimeCount>;
  homeGameTime: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  realWorldGameTime: Scalars['String']['output'];
};


export type AvailableHomeGameTimeClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};

export type AvailableHomeGameTimeCount = {
  __typename?: 'AvailableHomeGameTimeCount';
  Club: Scalars['Int']['output'];
};


export type AvailableHomeGameTimeCountClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};

export type AvailableHomeGameTimeNullableRelationFilter = {
  is?: InputMaybe<AvailableHomeGameTimeWhereInput>;
  isNot?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};

export type AvailableHomeGameTimeOrderByWithRelationInput = {
  Club?: InputMaybe<ClubOrderByRelationAggregateInput>;
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  realWorldGameTime?: InputMaybe<SortOrder>;
};

export enum AvailableHomeGameTimeScalarFieldEnum {
  HomeGameTime = 'homeGameTime',
  Id = 'id',
  RealWorldGameTime = 'realWorldGameTime'
}

export type AvailableHomeGameTimeWhereInput = {
  AND?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  Club?: InputMaybe<ClubListRelationFilter>;
  NOT?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  OR?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  homeGameTime?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IntFilter>;
  realWorldGameTime?: InputMaybe<StringFilter>;
};

export type AvailableHomeGameTimeWhereUniqueInput = {
  AND?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  Club?: InputMaybe<ClubListRelationFilter>;
  NOT?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  OR?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  homeGameTime?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  realWorldGameTime?: InputMaybe<StringFilter>;
};

export type BasicClubInfo = {
  __typename?: 'BasicClubInfo';
  id: Scalars['Float']['output'];
  isInactive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Club = {
  __typename?: 'Club';
  PlayerRegistration: Array<PlayerRegistration>;
  TournamentResult: Array<TournamentResult>;
  _count?: Maybe<ClubCount>;
  abbreviation: Scalars['String']['output'];
  actions: Array<Action>;
  city: Scalars['String']['output'];
  clubBadge: ClubBadge;
  clubBadgeId: Scalars['Int']['output'];
  clubFixtures: Array<ClubFixture>;
  clubTournaments: Array<ClubTournament>;
  colours: Scalars['JSON']['output'];
  description: Scalars['String']['output'];
  fflMembershipStatus: Scalars['Int']['output'];
  hasAppliedToRejoinFFL: Scalars['Boolean']['output'];
  homeGameTime?: Maybe<AvailableHomeGameTime>;
  homeGameTimeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isInactive: Scalars['Boolean']['output'];
  isPartOfAmateurLeague: Scalars['Boolean']['output'];
  kits: Array<Kit>;
  lastAcademyIntake: Scalars['Int']['output'];
  lineups: Array<Lineup>;
  name: Scalars['String']['output'];
  originPlayers: Array<Player>;
  owner: Owner;
  ownerId: Scalars['Int']['output'];
  pattern: Scalars['String']['output'];
  players: Array<Player>;
  reactivationRealTimestamp?: Maybe<Scalars['Float']['output']>;
  seed: Scalars['String']['output'];
  showTwitterAccountName: Scalars['Boolean']['output'];
  stadium: Stadium;
  stadiumId: Scalars['Int']['output'];
  stats: Array<ClubStats>;
  trainingSlots: Array<TrainingSlot>;
  twitterAccountName?: Maybe<Scalars['String']['output']>;
  unregisteredPlayers: Array<Player>;
};


export type ClubPlayerRegistrationArgs = {
  cursor?: InputMaybe<PlayerRegistrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerRegistrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerRegistrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};


export type ClubTournamentResultArgs = {
  cursor?: InputMaybe<TournamentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type ClubActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type ClubClubFixturesArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type ClubClubTournamentsArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type ClubHomeGameTimeArgs = {
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type ClubKitsArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KitWhereInput>;
};


export type ClubLineupsArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type ClubOriginPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type ClubPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type ClubStatsArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type ClubTrainingSlotsArgs = {
  cursor?: InputMaybe<TrainingSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TrainingSlotWhereInput>;
};


export type ClubUnregisteredPlayersArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type ClubBadge = {
  __typename?: 'ClubBadge';
  club?: Maybe<Club>;
  data: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
};


export type ClubBadgeClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};

export type ClubBadgeOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeRelationFilter = {
  is?: InputMaybe<ClubBadgeWhereInput>;
  isNot?: InputMaybe<ClubBadgeWhereInput>;
};

export enum ClubBadgeScalarFieldEnum {
  Data = 'data',
  Id = 'id'
}

export type ClubBadgeWhereInput = {
  AND?: InputMaybe<Array<ClubBadgeWhereInput>>;
  NOT?: InputMaybe<Array<ClubBadgeWhereInput>>;
  OR?: InputMaybe<Array<ClubBadgeWhereInput>>;
  club?: InputMaybe<ClubNullableRelationFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
};

export type ClubBadgeWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubBadgeWhereInput>>;
  NOT?: InputMaybe<Array<ClubBadgeWhereInput>>;
  OR?: InputMaybe<Array<ClubBadgeWhereInput>>;
  club?: InputMaybe<ClubNullableRelationFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type ClubCount = {
  __typename?: 'ClubCount';
  PlayerRegistration: Scalars['Int']['output'];
  TournamentResult: Scalars['Int']['output'];
  actions: Scalars['Int']['output'];
  clubFixtures: Scalars['Int']['output'];
  clubTournaments: Scalars['Int']['output'];
  kits: Scalars['Int']['output'];
  lineups: Scalars['Int']['output'];
  originPlayers: Scalars['Int']['output'];
  players: Scalars['Int']['output'];
  stats: Scalars['Int']['output'];
  trainingSlots: Scalars['Int']['output'];
};


export type ClubCountPlayerRegistrationArgs = {
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};


export type ClubCountTournamentResultArgs = {
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type ClubCountActionsArgs = {
  where?: InputMaybe<ActionWhereInput>;
};


export type ClubCountClubFixturesArgs = {
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type ClubCountClubTournamentsArgs = {
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type ClubCountKitsArgs = {
  where?: InputMaybe<KitWhereInput>;
};


export type ClubCountLineupsArgs = {
  where?: InputMaybe<LineupWhereInput>;
};


export type ClubCountOriginPlayersArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type ClubCountPlayersArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type ClubCountStatsArgs = {
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type ClubCountTrainingSlotsArgs = {
  where?: InputMaybe<TrainingSlotWhereInput>;
};

export type ClubFixture = {
  __typename?: 'ClubFixture';
  club: Club;
  clubId: Scalars['Int']['output'];
  clubStats: ClubStats;
  clubStatsId: Scalars['Int']['output'];
  date: Scalars['Float']['output'];
  dummy?: Maybe<Scalars['String']['output']>;
  fixture: Fixture;
  fixtureId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isHome: Scalars['Boolean']['output'];
};

export type ClubFixtureListRelationFilter = {
  every?: InputMaybe<ClubFixtureWhereInput>;
  none?: InputMaybe<ClubFixtureWhereInput>;
  some?: InputMaybe<ClubFixtureWhereInput>;
};

export type ClubFixtureNullableRelationFilter = {
  is?: InputMaybe<ClubFixtureWhereInput>;
  isNot?: InputMaybe<ClubFixtureWhereInput>;
};

export type ClubFixtureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubFixtureOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  clubStats?: InputMaybe<ClubStatsOrderByWithRelationInput>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrderInput>;
  fixture?: InputMaybe<FixtureOrderByWithRelationInput>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHome?: InputMaybe<SortOrder>;
};

export enum ClubFixtureScalarFieldEnum {
  ClubId = 'clubId',
  ClubStatsId = 'clubStatsId',
  Date = 'date',
  Dummy = 'dummy',
  FixtureId = 'fixtureId',
  Id = 'id',
  IsHome = 'isHome'
}

export type ClubFixtureWhereInput = {
  AND?: InputMaybe<Array<ClubFixtureWhereInput>>;
  NOT?: InputMaybe<Array<ClubFixtureWhereInput>>;
  OR?: InputMaybe<Array<ClubFixtureWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubStats?: InputMaybe<ClubStatsRelationFilter>;
  clubStatsId?: InputMaybe<IntFilter>;
  date?: InputMaybe<FloatFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  fixture?: InputMaybe<FixtureRelationFilter>;
  fixtureId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isHome?: InputMaybe<BoolFilter>;
};

export type ClubFixtureWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubFixtureWhereInput>>;
  NOT?: InputMaybe<Array<ClubFixtureWhereInput>>;
  OR?: InputMaybe<Array<ClubFixtureWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubStats?: InputMaybe<ClubStatsRelationFilter>;
  clubStatsId?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<FloatFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  fixture?: InputMaybe<FixtureRelationFilter>;
  fixtureId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isHome?: InputMaybe<BoolFilter>;
};

export type ClubListRelationFilter = {
  every?: InputMaybe<ClubWhereInput>;
  none?: InputMaybe<ClubWhereInput>;
  some?: InputMaybe<ClubWhereInput>;
};

export type ClubNullableRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export type ClubOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubOrderByWithRelationInput = {
  PlayerRegistration?: InputMaybe<PlayerRegistrationOrderByRelationAggregateInput>;
  TournamentResult?: InputMaybe<TournamentResultOrderByRelationAggregateInput>;
  abbreviation?: InputMaybe<SortOrder>;
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  city?: InputMaybe<SortOrder>;
  clubBadge?: InputMaybe<ClubBadgeOrderByWithRelationInput>;
  clubBadgeId?: InputMaybe<SortOrder>;
  clubFixtures?: InputMaybe<ClubFixtureOrderByRelationAggregateInput>;
  clubTournaments?: InputMaybe<ClubTournamentOrderByRelationAggregateInput>;
  colours?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fflMembershipStatus?: InputMaybe<SortOrder>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeOrderByWithRelationInput>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isInactive?: InputMaybe<SortOrder>;
  kits?: InputMaybe<KitOrderByRelationAggregateInput>;
  lastAcademyIntake?: InputMaybe<SortOrder>;
  lineups?: InputMaybe<LineupOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  originPlayers?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  pattern?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  reactivationRealTimestamp?: InputMaybe<SortOrderInput>;
  seed?: InputMaybe<SortOrder>;
  showTwitterAccountName?: InputMaybe<SortOrder>;
  stadium?: InputMaybe<StadiumOrderByWithRelationInput>;
  stadiumId?: InputMaybe<SortOrder>;
  stats?: InputMaybe<ClubStatsOrderByRelationAggregateInput>;
  trainingSlots?: InputMaybe<TrainingSlotOrderByRelationAggregateInput>;
  twitterAccountName?: InputMaybe<SortOrderInput>;
};

export type ClubRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export enum ClubScalarFieldEnum {
  Abbreviation = 'abbreviation',
  City = 'city',
  ClubBadgeId = 'clubBadgeId',
  Colours = 'colours',
  Description = 'description',
  FflMembershipStatus = 'fflMembershipStatus',
  HomeGameTimeId = 'homeGameTimeId',
  Id = 'id',
  IsInactive = 'isInactive',
  LastAcademyIntake = 'lastAcademyIntake',
  Name = 'name',
  OwnerId = 'ownerId',
  Pattern = 'pattern',
  ReactivationRealTimestamp = 'reactivationRealTimestamp',
  Seed = 'seed',
  ShowTwitterAccountName = 'showTwitterAccountName',
  StadiumId = 'stadiumId',
  TwitterAccountName = 'twitterAccountName'
}

export type ClubStats = {
  __typename?: 'ClubStats';
  assists: Scalars['Int']['output'];
  attemptedDribbles: Scalars['Int']['output'];
  attemptedPasses: Scalars['Int']['output'];
  backHeelShots: Scalars['Int']['output'];
  blocks: Scalars['Int']['output'];
  carries: Scalars['Int']['output'];
  clearances: Scalars['Int']['output'];
  club: Club;
  clubFixture?: Maybe<ClubFixture>;
  clubId: Scalars['Int']['output'];
  clubTournament?: Maybe<ClubTournament>;
  completedDribbles: Scalars['Int']['output'];
  completedPasses: Scalars['Int']['output'];
  consecutiveInGameLineupSet: Scalars['Int']['output'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int']['output'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int']['output'];
  consecutivePreGameLineupSet: Scalars['Int']['output'];
  corners: Scalars['Int']['output'];
  crosses: Scalars['Int']['output'];
  divingHeaderShots: Scalars['Int']['output'];
  draws: Scalars['Int']['output'];
  dribbleSuccessRate?: Maybe<Scalars['Float']['output']>;
  duelsLost: Scalars['Int']['output'];
  duelsWon: Scalars['Int']['output'];
  failedInterceptions: Scalars['Int']['output'];
  fiftyFiftiesLost: Scalars['Int']['output'];
  fiftyFiftiesWon: Scalars['Int']['output'];
  firstHalfPossession?: Maybe<Scalars['Float']['output']>;
  fouls: Scalars['Int']['output'];
  freeKicks: Scalars['Int']['output'];
  freeKicksScored: Scalars['Int']['output'];
  games: Scalars['Int']['output'];
  gkSaves: Scalars['Int']['output'];
  goals: Scalars['Int']['output'];
  goalsAgainst: Scalars['Int']['output'];
  groundPasses: Scalars['Int']['output'];
  halfVolleyShots: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interceptedPasses: Scalars['Int']['output'];
  interceptions: Scalars['Int']['output'];
  lastInGameLineupSetTimestamp: Scalars['Float']['output'];
  lastPreGameLineupSetTimestamp: Scalars['Float']['output'];
  lobShots: Scalars['Int']['output'];
  lobbedPasses?: Maybe<Scalars['Int']['output']>;
  losses: Scalars['Int']['output'];
  normalShots: Scalars['Int']['output'];
  offsidePasses: Scalars['Int']['output'];
  offsides: Scalars['Int']['output'];
  overheadKickShots: Scalars['Int']['output'];
  passAccuracy?: Maybe<Scalars['Float']['output']>;
  passes: Scalars['Int']['output'];
  penaltiesConceded: Scalars['Int']['output'];
  penaltiesMissed: Scalars['Int']['output'];
  penaltiesSaved: Scalars['Int']['output'];
  penaltiesScored: Scalars['Int']['output'];
  penaltiesWon: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  possession: Scalars['Float']['output'];
  possessionInfo: Scalars['JSON']['output'];
  possessionWon: Scalars['Int']['output'];
  redCards: Scalars['Int']['output'];
  secondHalfPossession?: Maybe<Scalars['Float']['output']>;
  shotAccuracy?: Maybe<Scalars['Float']['output']>;
  shotsBlocked: Scalars['Int']['output'];
  shotsFromInsideTheBox: Scalars['Int']['output'];
  shotsFromOutsideTheBox?: Maybe<Scalars['Int']['output']>;
  shotsOffTarget: Scalars['Int']['output'];
  shotsOnTarget: Scalars['Int']['output'];
  tacklesExecuted: Scalars['Int']['output'];
  tacklesReceived: Scalars['Int']['output'];
  totalShots: Scalars['Int']['output'];
  volleyShots: Scalars['Int']['output'];
  wins: Scalars['Int']['output'];
  yellowCards: Scalars['Int']['output'];
};


export type ClubStatsClubFixtureArgs = {
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type ClubStatsClubTournamentArgs = {
  where?: InputMaybe<ClubTournamentWhereInput>;
};

export type ClubStatsListRelationFilter = {
  every?: InputMaybe<ClubStatsWhereInput>;
  none?: InputMaybe<ClubStatsWhereInput>;
  some?: InputMaybe<ClubStatsWhereInput>;
};

export type ClubStatsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubStatsOrderByWithRelationInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubFixture?: InputMaybe<ClubFixtureOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  clubTournament?: InputMaybe<ClubTournamentOrderByWithRelationInput>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penaltiesConceded?: InputMaybe<SortOrder>;
  penaltiesMissed?: InputMaybe<SortOrder>;
  penaltiesSaved?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  penaltiesWon?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionInfo?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  totalShots?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsRelationFilter = {
  is?: InputMaybe<ClubStatsWhereInput>;
  isNot?: InputMaybe<ClubStatsWhereInput>;
};

export enum ClubStatsScalarFieldEnum {
  Assists = 'assists',
  AttemptedDribbles = 'attemptedDribbles',
  AttemptedPasses = 'attemptedPasses',
  BackHeelShots = 'backHeelShots',
  Blocks = 'blocks',
  Carries = 'carries',
  Clearances = 'clearances',
  ClubId = 'clubId',
  CompletedDribbles = 'completedDribbles',
  CompletedPasses = 'completedPasses',
  ConsecutiveInGameLineupSet = 'consecutiveInGameLineupSet',
  ConsecutiveNotMakingInGameLineupSet = 'consecutiveNotMakingInGameLineupSet',
  ConsecutiveNotMakingPreGameLineupSet = 'consecutiveNotMakingPreGameLineupSet',
  ConsecutivePreGameLineupSet = 'consecutivePreGameLineupSet',
  Corners = 'corners',
  Crosses = 'crosses',
  DivingHeaderShots = 'divingHeaderShots',
  Draws = 'draws',
  DuelsLost = 'duelsLost',
  DuelsWon = 'duelsWon',
  FailedInterceptions = 'failedInterceptions',
  FiftyFiftiesLost = 'fiftyFiftiesLost',
  FiftyFiftiesWon = 'fiftyFiftiesWon',
  Fouls = 'fouls',
  FreeKicks = 'freeKicks',
  FreeKicksScored = 'freeKicksScored',
  Games = 'games',
  GkSaves = 'gkSaves',
  Goals = 'goals',
  GoalsAgainst = 'goalsAgainst',
  GroundPasses = 'groundPasses',
  HalfVolleyShots = 'halfVolleyShots',
  Id = 'id',
  InterceptedPasses = 'interceptedPasses',
  Interceptions = 'interceptions',
  LastInGameLineupSetTimestamp = 'lastInGameLineupSetTimestamp',
  LastPreGameLineupSetTimestamp = 'lastPreGameLineupSetTimestamp',
  LobShots = 'lobShots',
  Losses = 'losses',
  NormalShots = 'normalShots',
  OffsidePasses = 'offsidePasses',
  Offsides = 'offsides',
  OverheadKickShots = 'overheadKickShots',
  Passes = 'passes',
  PenaltiesConceded = 'penaltiesConceded',
  PenaltiesMissed = 'penaltiesMissed',
  PenaltiesSaved = 'penaltiesSaved',
  PenaltiesScored = 'penaltiesScored',
  PenaltiesWon = 'penaltiesWon',
  Points = 'points',
  Possession = 'possession',
  PossessionInfo = 'possessionInfo',
  PossessionWon = 'possessionWon',
  RedCards = 'redCards',
  ShotsBlocked = 'shotsBlocked',
  ShotsFromInsideTheBox = 'shotsFromInsideTheBox',
  ShotsOffTarget = 'shotsOffTarget',
  ShotsOnTarget = 'shotsOnTarget',
  TacklesExecuted = 'tacklesExecuted',
  TacklesReceived = 'tacklesReceived',
  TotalShots = 'totalShots',
  VolleyShots = 'volleyShots',
  Wins = 'wins',
  YellowCards = 'yellowCards'
}

export type ClubStatsWhereInput = {
  AND?: InputMaybe<Array<ClubStatsWhereInput>>;
  NOT?: InputMaybe<Array<ClubStatsWhereInput>>;
  OR?: InputMaybe<Array<ClubStatsWhereInput>>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubFixture?: InputMaybe<ClubFixtureNullableRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubTournament?: InputMaybe<ClubTournamentNullableRelationFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  consecutiveInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFilter>;
  consecutivePreGameLineupSet?: InputMaybe<IntFilter>;
  corners?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  draws?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicks?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  games?: InputMaybe<IntFilter>;
  gkSaves?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsAgainst?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lobShots?: InputMaybe<IntFilter>;
  losses?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  passes?: InputMaybe<IntFilter>;
  penaltiesConceded?: InputMaybe<IntFilter>;
  penaltiesMissed?: InputMaybe<IntFilter>;
  penaltiesSaved?: InputMaybe<IntFilter>;
  penaltiesScored?: InputMaybe<IntFilter>;
  penaltiesWon?: InputMaybe<IntFilter>;
  points?: InputMaybe<IntFilter>;
  possession?: InputMaybe<FloatFilter>;
  possessionInfo?: InputMaybe<JsonFilter>;
  possessionWon?: InputMaybe<IntFilter>;
  redCards?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  totalShots?: InputMaybe<IntFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  wins?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type ClubStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubStatsWhereInput>>;
  NOT?: InputMaybe<Array<ClubStatsWhereInput>>;
  OR?: InputMaybe<Array<ClubStatsWhereInput>>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubFixture?: InputMaybe<ClubFixtureNullableRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubTournament?: InputMaybe<ClubTournamentNullableRelationFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  consecutiveInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFilter>;
  consecutivePreGameLineupSet?: InputMaybe<IntFilter>;
  corners?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  draws?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicks?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  games?: InputMaybe<IntFilter>;
  gkSaves?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsAgainst?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lobShots?: InputMaybe<IntFilter>;
  losses?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  passes?: InputMaybe<IntFilter>;
  penaltiesConceded?: InputMaybe<IntFilter>;
  penaltiesMissed?: InputMaybe<IntFilter>;
  penaltiesSaved?: InputMaybe<IntFilter>;
  penaltiesScored?: InputMaybe<IntFilter>;
  penaltiesWon?: InputMaybe<IntFilter>;
  points?: InputMaybe<IntFilter>;
  possession?: InputMaybe<FloatFilter>;
  possessionInfo?: InputMaybe<JsonFilter>;
  possessionWon?: InputMaybe<IntFilter>;
  redCards?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  totalShots?: InputMaybe<IntFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  wins?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type ClubTournament = {
  __typename?: 'ClubTournament';
  club: Club;
  clubId: Scalars['Int']['output'];
  clubStats: ClubStats;
  clubStatsId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  tournament: Tournament;
  tournamentId: Scalars['Int']['output'];
};

export type ClubTournamentListRelationFilter = {
  every?: InputMaybe<ClubTournamentWhereInput>;
  none?: InputMaybe<ClubTournamentWhereInput>;
  some?: InputMaybe<ClubTournamentWhereInput>;
};

export type ClubTournamentNullableRelationFilter = {
  is?: InputMaybe<ClubTournamentWhereInput>;
  isNot?: InputMaybe<ClubTournamentWhereInput>;
};

export type ClubTournamentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubTournamentOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  clubStats?: InputMaybe<ClubStatsOrderByWithRelationInput>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export enum ClubTournamentScalarFieldEnum {
  ClubId = 'clubId',
  ClubStatsId = 'clubStatsId',
  Id = 'id',
  Position = 'position',
  TournamentId = 'tournamentId'
}

export type ClubTournamentWhereInput = {
  AND?: InputMaybe<Array<ClubTournamentWhereInput>>;
  NOT?: InputMaybe<Array<ClubTournamentWhereInput>>;
  OR?: InputMaybe<Array<ClubTournamentWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubStats?: InputMaybe<ClubStatsRelationFilter>;
  clubStatsId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  position?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type ClubTournamentWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubTournamentWhereInput>>;
  NOT?: InputMaybe<Array<ClubTournamentWhereInput>>;
  OR?: InputMaybe<Array<ClubTournamentWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubStats?: InputMaybe<ClubStatsRelationFilter>;
  clubStatsId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type ClubWhereInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  PlayerRegistration?: InputMaybe<PlayerRegistrationListRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  abbreviation?: InputMaybe<StringFilter>;
  actions?: InputMaybe<ActionListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  clubBadge?: InputMaybe<ClubBadgeRelationFilter>;
  clubBadgeId?: InputMaybe<IntFilter>;
  clubFixtures?: InputMaybe<ClubFixtureListRelationFilter>;
  clubTournaments?: InputMaybe<ClubTournamentListRelationFilter>;
  colours?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringFilter>;
  fflMembershipStatus?: InputMaybe<IntFilter>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeNullableRelationFilter>;
  homeGameTimeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isInactive?: InputMaybe<BoolFilter>;
  kits?: InputMaybe<KitListRelationFilter>;
  lastAcademyIntake?: InputMaybe<IntFilter>;
  lineups?: InputMaybe<LineupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  originPlayers?: InputMaybe<PlayerListRelationFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  ownerId?: InputMaybe<IntFilter>;
  pattern?: InputMaybe<StringFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  reactivationRealTimestamp?: InputMaybe<FloatNullableFilter>;
  seed?: InputMaybe<StringFilter>;
  showTwitterAccountName?: InputMaybe<BoolFilter>;
  stadium?: InputMaybe<StadiumRelationFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  stats?: InputMaybe<ClubStatsListRelationFilter>;
  trainingSlots?: InputMaybe<TrainingSlotListRelationFilter>;
  twitterAccountName?: InputMaybe<StringNullableFilter>;
};

export type ClubWhereUniqueInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  PlayerRegistration?: InputMaybe<PlayerRegistrationListRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  abbreviation?: InputMaybe<StringFilter>;
  actions?: InputMaybe<ActionListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  clubBadge?: InputMaybe<ClubBadgeRelationFilter>;
  clubBadgeId?: InputMaybe<Scalars['Int']['input']>;
  clubFixtures?: InputMaybe<ClubFixtureListRelationFilter>;
  clubTournaments?: InputMaybe<ClubTournamentListRelationFilter>;
  colours?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringFilter>;
  fflMembershipStatus?: InputMaybe<IntFilter>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeNullableRelationFilter>;
  homeGameTimeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isInactive?: InputMaybe<BoolFilter>;
  kits?: InputMaybe<KitListRelationFilter>;
  lastAcademyIntake?: InputMaybe<IntFilter>;
  lineups?: InputMaybe<LineupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  originPlayers?: InputMaybe<PlayerListRelationFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  ownerId?: InputMaybe<IntFilter>;
  pattern?: InputMaybe<StringFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  reactivationRealTimestamp?: InputMaybe<FloatNullableFilter>;
  seed?: InputMaybe<StringFilter>;
  showTwitterAccountName?: InputMaybe<BoolFilter>;
  stadium?: InputMaybe<StadiumRelationFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  stats?: InputMaybe<ClubStatsListRelationFilter>;
  trainingSlots?: InputMaybe<TrainingSlotListRelationFilter>;
  twitterAccountName?: InputMaybe<StringNullableFilter>;
};

export type Competition = {
  __typename?: 'Competition';
  _count?: Maybe<CompetitionCount>;
  division: Division;
  divisionId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  leagueIndex?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parentCompetitionId?: Maybe<Scalars['Int']['output']>;
  playerStats: Array<CompetitionPlayerStats>;
  promotionSelectorsFrom: Array<PromotionSelector>;
  scheduler: Scalars['JSON']['output'];
  seed: Scalars['String']['output'];
  tournaments: Array<Tournament>;
  type: Scalars['String']['output'];
};


export type CompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type CompetitionPromotionSelectorsFromArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type CompetitionTournamentsArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentWhereInput>;
};

export type CompetitionCount = {
  __typename?: 'CompetitionCount';
  playerStats: Scalars['Int']['output'];
  promotionSelectorsFrom: Scalars['Int']['output'];
  tournaments: Scalars['Int']['output'];
};


export type CompetitionCountPlayerStatsArgs = {
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type CompetitionCountPromotionSelectorsFromArgs = {
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type CompetitionCountTournamentsArgs = {
  where?: InputMaybe<TournamentWhereInput>;
};

export type CompetitionListRelationFilter = {
  every?: InputMaybe<CompetitionWhereInput>;
  none?: InputMaybe<CompetitionWhereInput>;
  some?: InputMaybe<CompetitionWhereInput>;
};

export type CompetitionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompetitionOrderByWithRelationInput = {
  division?: InputMaybe<DivisionOrderByWithRelationInput>;
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  leagueIndex?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  parentCompetitionId?: InputMaybe<SortOrderInput>;
  playerStats?: InputMaybe<CompetitionPlayerStatsOrderByRelationAggregateInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorOrderByRelationAggregateInput>;
  scheduler?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  tournaments?: InputMaybe<TournamentOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStats = {
  __typename?: 'CompetitionPlayerStats';
  competition: Competition;
  competitionId: Scalars['Int']['output'];
  dummy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  playerStatRecord: PlayerStatsRecord;
  playerStatRecordId: Scalars['Int']['output'];
};

export type CompetitionPlayerStatsCompetitionIdPlayerStatRecordIdCompoundUniqueInput = {
  competitionId: Scalars['Int']['input'];
  playerStatRecordId: Scalars['Int']['input'];
};

export type CompetitionPlayerStatsListRelationFilter = {
  every?: InputMaybe<CompetitionPlayerStatsWhereInput>;
  none?: InputMaybe<CompetitionPlayerStatsWhereInput>;
  some?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};

export type CompetitionPlayerStatsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsOrderByWithRelationInput = {
  competition?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordOrderByWithRelationInput>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export enum CompetitionPlayerStatsScalarFieldEnum {
  CompetitionId = 'competitionId',
  Dummy = 'dummy',
  Id = 'id',
  PlayerStatRecordId = 'playerStatRecordId'
}

export type CompetitionPlayerStatsWhereInput = {
  AND?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  OR?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordRelationFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
};

export type CompetitionPlayerStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  OR?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  competitionId_playerStatRecordId?: InputMaybe<CompetitionPlayerStatsCompetitionIdPlayerStatRecordIdCompoundUniqueInput>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordRelationFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
};

export type CompetitionRelationFilter = {
  is?: InputMaybe<CompetitionWhereInput>;
  isNot?: InputMaybe<CompetitionWhereInput>;
};

export enum CompetitionScalarFieldEnum {
  DivisionId = 'divisionId',
  Id = 'id',
  LeagueIndex = 'leagueIndex',
  Name = 'name',
  ParentCompetitionId = 'parentCompetitionId',
  Scheduler = 'scheduler',
  Seed = 'seed',
  Type = 'type'
}

export type CompetitionWhereInput = {
  AND?: InputMaybe<Array<CompetitionWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionWhereInput>>;
  OR?: InputMaybe<Array<CompetitionWhereInput>>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  leagueIndex?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCompetitionId?: InputMaybe<IntNullableFilter>;
  playerStats?: InputMaybe<CompetitionPlayerStatsListRelationFilter>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorListRelationFilter>;
  scheduler?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  tournaments?: InputMaybe<TournamentListRelationFilter>;
  type?: InputMaybe<StringFilter>;
};

export type CompetitionWhereUniqueInput = {
  AND?: InputMaybe<Array<CompetitionWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionWhereInput>>;
  OR?: InputMaybe<Array<CompetitionWhereInput>>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  leagueIndex?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCompetitionId?: InputMaybe<IntNullableFilter>;
  playerStats?: InputMaybe<CompetitionPlayerStatsListRelationFilter>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorListRelationFilter>;
  scheduler?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  tournaments?: InputMaybe<TournamentListRelationFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ConfigValueOutput = {
  __typename?: 'ConfigValueOutput';
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type CustomRegistrationWindow = {
  __typename?: 'CustomRegistrationWindow';
  closingRealTimestamp?: Maybe<Scalars['Float']['output']>;
  closingTimestamp?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  openingRealTimestamp: Scalars['Float']['output'];
  openingTimestamp: Scalars['Float']['output'];
  seasonId: Scalars['Float']['output'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Division = {
  __typename?: 'Division';
  Prize: Array<Prize>;
  _count?: Maybe<DivisionCount>;
  competitions: Array<Competition>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tier: Scalars['Int']['output'];
};


export type DivisionPrizeArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type DivisionCompetitionsArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionWhereInput>;
};

export type DivisionCount = {
  __typename?: 'DivisionCount';
  Prize: Scalars['Int']['output'];
  competitions: Scalars['Int']['output'];
};


export type DivisionCountPrizeArgs = {
  where?: InputMaybe<PrizeWhereInput>;
};


export type DivisionCountCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhereInput>;
};

export type DivisionOrderByWithRelationInput = {
  Prize?: InputMaybe<PrizeOrderByRelationAggregateInput>;
  competitions?: InputMaybe<CompetitionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionRelationFilter = {
  is?: InputMaybe<DivisionWhereInput>;
  isNot?: InputMaybe<DivisionWhereInput>;
};

export enum DivisionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Tier = 'tier'
}

export type DivisionWhereInput = {
  AND?: InputMaybe<Array<DivisionWhereInput>>;
  NOT?: InputMaybe<Array<DivisionWhereInput>>;
  OR?: InputMaybe<Array<DivisionWhereInput>>;
  Prize?: InputMaybe<PrizeListRelationFilter>;
  competitions?: InputMaybe<CompetitionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  tier?: InputMaybe<IntFilter>;
};

export type DivisionWhereUniqueInput = {
  AND?: InputMaybe<Array<DivisionWhereInput>>;
  NOT?: InputMaybe<Array<DivisionWhereInput>>;
  OR?: InputMaybe<Array<DivisionWhereInput>>;
  Prize?: InputMaybe<PrizeListRelationFilter>;
  competitions?: InputMaybe<CompetitionListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  tier?: InputMaybe<IntFilter>;
};

export type EntryStructureType = {
  __typename?: 'EntryStructureType';
  payoutPercent: Scalars['Float']['output'];
  payoutPrize: Scalars['String']['output'];
  position: Scalars['Int']['output'];
};

export type EnumPrizeAssignmentStatusFilter = {
  equals?: InputMaybe<PrizeAssignmentStatus>;
  in?: InputMaybe<Array<PrizeAssignmentStatus>>;
  not?: InputMaybe<NestedEnumPrizeAssignmentStatusFilter>;
  notIn?: InputMaybe<Array<PrizeAssignmentStatus>>;
};

export type EnumPrizeClaimStatusFilter = {
  equals?: InputMaybe<PrizeClaimStatus>;
  in?: InputMaybe<Array<PrizeClaimStatus>>;
  not?: InputMaybe<NestedEnumPrizeClaimStatusFilter>;
  notIn?: InputMaybe<Array<PrizeClaimStatus>>;
};

export type EnumPrizeTypeFilter = {
  equals?: InputMaybe<PrizeType>;
  in?: InputMaybe<Array<PrizeType>>;
  not?: InputMaybe<NestedEnumPrizeTypeFilter>;
  notIn?: InputMaybe<Array<PrizeType>>;
};

export type EnumSeasonStateFilter = {
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type EnumSeasonStateNullableFilter = {
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateNullableFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type EnumStadiumStandSideFilter = {
  equals?: InputMaybe<StadiumStandSide>;
  in?: InputMaybe<Array<StadiumStandSide>>;
  not?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  notIn?: InputMaybe<Array<StadiumStandSide>>;
};

export type EnumStadiumStandSizeFilter = {
  equals?: InputMaybe<StadiumStandSize>;
  in?: InputMaybe<Array<StadiumStandSize>>;
  not?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  notIn?: InputMaybe<Array<StadiumStandSize>>;
};

export type EnumStadiumStandStyleFilter = {
  equals?: InputMaybe<StadiumStandStyle>;
  in?: InputMaybe<Array<StadiumStandStyle>>;
  not?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  notIn?: InputMaybe<Array<StadiumStandStyle>>;
};

export type EnumTournamentStateFilter = {
  equals?: InputMaybe<TournamentState>;
  in?: InputMaybe<Array<TournamentState>>;
  not?: InputMaybe<NestedEnumTournamentStateFilter>;
  notIn?: InputMaybe<Array<TournamentState>>;
};

export type EthereumEvent = {
  __typename?: 'EthereumEvent';
  _count?: Maybe<EthereumEventCount>;
  blockNumber: Scalars['Int']['output'];
  event: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  transactionHash: Scalars['String']['output'];
};

export type EthereumEventCount = {
  __typename?: 'EthereumEventCount';
  actions: Scalars['Int']['output'];
};


export type EthereumEventCountActionsArgs = {
  where?: InputMaybe<ActionWhereInput>;
};

export type EthereumEventListRelationFilter = {
  every?: InputMaybe<EthereumEventWhereInput>;
  none?: InputMaybe<EthereumEventWhereInput>;
  some?: InputMaybe<EthereumEventWhereInput>;
};

export type EthereumEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EthereumEventOrderByWithRelationInput = {
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  event?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
};

export enum EthereumEventScalarFieldEnum {
  BlockNumber = 'blockNumber',
  Event = 'event',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type EthereumEventWhereInput = {
  AND?: InputMaybe<Array<EthereumEventWhereInput>>;
  NOT?: InputMaybe<Array<EthereumEventWhereInput>>;
  OR?: InputMaybe<Array<EthereumEventWhereInput>>;
  actions?: InputMaybe<ActionListRelationFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  event?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
};

export type EthereumEventWhereUniqueInput = {
  AND?: InputMaybe<Array<EthereumEventWhereInput>>;
  NOT?: InputMaybe<Array<EthereumEventWhereInput>>;
  OR?: InputMaybe<Array<EthereumEventWhereInput>>;
  actions?: InputMaybe<ActionListRelationFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  event?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  transactionHash?: InputMaybe<StringFilter>;
};

export type Fixture = {
  __typename?: 'Fixture';
  _count?: Maybe<FixtureCount>;
  clubFixtures: Array<ClubFixture>;
  date: Scalars['Float']['output'];
  fixtureIndex: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  inGameTimestamp: Scalars['Float']['output'];
  isNeutralVenue: Scalars['Boolean']['output'];
  match?: Maybe<Match>;
  matchId?: Maybe<Scalars['String']['output']>;
  realWorldTimestamp: Scalars['Float']['output'];
  roundIndex: Scalars['Int']['output'];
  seed: Scalars['String']['output'];
  state: Scalars['String']['output'];
  tournament: Tournament;
  tournamentId: Scalars['Int']['output'];
};


export type FixtureClubFixturesArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type FixtureMatchArgs = {
  where?: InputMaybe<MatchWhereInput>;
};

export type FixtureAvgAggregate = {
  __typename?: 'FixtureAvgAggregate';
  date?: Maybe<Scalars['Float']['output']>;
  fixtureIndex?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  inGameTimestamp?: Maybe<Scalars['Float']['output']>;
  realWorldTimestamp?: Maybe<Scalars['Float']['output']>;
  roundIndex?: Maybe<Scalars['Float']['output']>;
  tournamentId?: Maybe<Scalars['Float']['output']>;
};

export type FixtureCount = {
  __typename?: 'FixtureCount';
  clubFixtures: Scalars['Int']['output'];
};


export type FixtureCountClubFixturesArgs = {
  where?: InputMaybe<ClubFixtureWhereInput>;
};

export type FixtureCountAggregate = {
  __typename?: 'FixtureCountAggregate';
  _all: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  fixtureIndex: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  inGameTimestamp: Scalars['Int']['output'];
  isNeutralVenue: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  realWorldTimestamp: Scalars['Int']['output'];
  roundIndex: Scalars['Int']['output'];
  seed: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  tournamentId: Scalars['Int']['output'];
};

export type FixtureListRelationFilter = {
  every?: InputMaybe<FixtureWhereInput>;
  none?: InputMaybe<FixtureWhereInput>;
  some?: InputMaybe<FixtureWhereInput>;
};

export type FixtureMaxAggregate = {
  __typename?: 'FixtureMaxAggregate';
  date?: Maybe<Scalars['Float']['output']>;
  fixtureIndex?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inGameTimestamp?: Maybe<Scalars['Float']['output']>;
  isNeutralVenue?: Maybe<Scalars['Boolean']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  realWorldTimestamp?: Maybe<Scalars['Float']['output']>;
  roundIndex?: Maybe<Scalars['Int']['output']>;
  seed?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['Int']['output']>;
};

export type FixtureMinAggregate = {
  __typename?: 'FixtureMinAggregate';
  date?: Maybe<Scalars['Float']['output']>;
  fixtureIndex?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inGameTimestamp?: Maybe<Scalars['Float']['output']>;
  isNeutralVenue?: Maybe<Scalars['Boolean']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  realWorldTimestamp?: Maybe<Scalars['Float']['output']>;
  roundIndex?: Maybe<Scalars['Int']['output']>;
  seed?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  tournamentId?: Maybe<Scalars['Int']['output']>;
};

export type FixtureNullableRelationFilter = {
  is?: InputMaybe<FixtureWhereInput>;
  isNot?: InputMaybe<FixtureWhereInput>;
};

export type FixtureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FixtureOrderByWithRelationInput = {
  clubFixtures?: InputMaybe<ClubFixtureOrderByRelationAggregateInput>;
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  isNeutralVenue?: InputMaybe<SortOrder>;
  match?: InputMaybe<MatchOrderByWithRelationInput>;
  matchId?: InputMaybe<SortOrderInput>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureRelationFilter = {
  is?: InputMaybe<FixtureWhereInput>;
  isNot?: InputMaybe<FixtureWhereInput>;
};

export enum FixtureScalarFieldEnum {
  Date = 'date',
  FixtureIndex = 'fixtureIndex',
  Id = 'id',
  InGameTimestamp = 'inGameTimestamp',
  IsNeutralVenue = 'isNeutralVenue',
  MatchId = 'matchId',
  RealWorldTimestamp = 'realWorldTimestamp',
  RoundIndex = 'roundIndex',
  Seed = 'seed',
  State = 'state',
  TournamentId = 'tournamentId'
}

export type FixtureSumAggregate = {
  __typename?: 'FixtureSumAggregate';
  date?: Maybe<Scalars['Float']['output']>;
  fixtureIndex?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inGameTimestamp?: Maybe<Scalars['Float']['output']>;
  realWorldTimestamp?: Maybe<Scalars['Float']['output']>;
  roundIndex?: Maybe<Scalars['Int']['output']>;
  tournamentId?: Maybe<Scalars['Int']['output']>;
};

export type FixtureWhereInput = {
  AND?: InputMaybe<Array<FixtureWhereInput>>;
  NOT?: InputMaybe<Array<FixtureWhereInput>>;
  OR?: InputMaybe<Array<FixtureWhereInput>>;
  clubFixtures?: InputMaybe<ClubFixtureListRelationFilter>;
  date?: InputMaybe<FloatFilter>;
  fixtureIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  inGameTimestamp?: InputMaybe<FloatFilter>;
  isNeutralVenue?: InputMaybe<BoolFilter>;
  match?: InputMaybe<MatchNullableRelationFilter>;
  matchId?: InputMaybe<StringNullableFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  roundIndex?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type FixtureWhereUniqueInput = {
  AND?: InputMaybe<Array<FixtureWhereInput>>;
  NOT?: InputMaybe<Array<FixtureWhereInput>>;
  OR?: InputMaybe<Array<FixtureWhereInput>>;
  clubFixtures?: InputMaybe<ClubFixtureListRelationFilter>;
  date?: InputMaybe<FloatFilter>;
  fixtureIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inGameTimestamp?: InputMaybe<FloatFilter>;
  isNeutralVenue?: InputMaybe<BoolFilter>;
  match?: InputMaybe<MatchNullableRelationFilter>;
  matchId?: InputMaybe<Scalars['String']['input']>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  roundIndex?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Formation = {
  __typename?: 'Formation';
  _count?: Maybe<FormationCount>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slots: Array<FormationSlot>;
  tactics: Array<Tactics>;
};


export type FormationSlotsArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type FormationTacticsArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TacticsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TacticsWhereInput>;
};

export type FormationCount = {
  __typename?: 'FormationCount';
  slots: Scalars['Int']['output'];
  tactics: Scalars['Int']['output'];
};


export type FormationCountSlotsArgs = {
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type FormationCountTacticsArgs = {
  where?: InputMaybe<TacticsWhereInput>;
};

export type FormationOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slots?: InputMaybe<FormationSlotOrderByRelationAggregateInput>;
  tactics?: InputMaybe<TacticsOrderByRelationAggregateInput>;
};

export type FormationRelationFilter = {
  is?: InputMaybe<FormationWhereInput>;
  isNot?: InputMaybe<FormationWhereInput>;
};

export enum FormationScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type FormationSlot = {
  __typename?: 'FormationSlot';
  formation: Formation;
  formationId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pitchPosition: Scalars['String']['output'];
  slotIndex: Scalars['Int']['output'];
};

export type FormationSlotListRelationFilter = {
  every?: InputMaybe<FormationSlotWhereInput>;
  none?: InputMaybe<FormationSlotWhereInput>;
  some?: InputMaybe<FormationSlotWhereInput>;
};

export type FormationSlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FormationSlotOrderByWithRelationInput = {
  formation?: InputMaybe<FormationOrderByWithRelationInput>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pitchPosition?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export enum FormationSlotScalarFieldEnum {
  FormationId = 'formationId',
  Id = 'id',
  PitchPosition = 'pitchPosition',
  SlotIndex = 'slotIndex'
}

export type FormationSlotWhereInput = {
  AND?: InputMaybe<Array<FormationSlotWhereInput>>;
  NOT?: InputMaybe<Array<FormationSlotWhereInput>>;
  OR?: InputMaybe<Array<FormationSlotWhereInput>>;
  formation?: InputMaybe<FormationRelationFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  pitchPosition?: InputMaybe<StringFilter>;
  slotIndex?: InputMaybe<IntFilter>;
};

export type FormationSlotWhereUniqueInput = {
  AND?: InputMaybe<Array<FormationSlotWhereInput>>;
  NOT?: InputMaybe<Array<FormationSlotWhereInput>>;
  OR?: InputMaybe<Array<FormationSlotWhereInput>>;
  formation?: InputMaybe<FormationRelationFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pitchPosition?: InputMaybe<StringFilter>;
  slotIndex?: InputMaybe<IntFilter>;
};

export type FormationWhereInput = {
  AND?: InputMaybe<Array<FormationWhereInput>>;
  NOT?: InputMaybe<Array<FormationWhereInput>>;
  OR?: InputMaybe<Array<FormationWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slots?: InputMaybe<FormationSlotListRelationFilter>;
  tactics?: InputMaybe<TacticsListRelationFilter>;
};

export type FormationWhereUniqueInput = {
  AND?: InputMaybe<Array<FormationWhereInput>>;
  NOT?: InputMaybe<Array<FormationWhereInput>>;
  OR?: InputMaybe<Array<FormationWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  slots?: InputMaybe<FormationSlotListRelationFilter>;
  tactics?: InputMaybe<TacticsListRelationFilter>;
};

export type GameState = {
  __typename?: 'GameState';
  currentSeasonId: Scalars['Int']['output'];
  seasonState: SeasonState;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['Int']['input']>>;
  has?: InputMaybe<Scalars['Int']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['Int']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['Int']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Kit = {
  __typename?: 'Kit';
  club: Club;
  clubId: Scalars['Int']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  kitType: Scalars['String']['output'];
};

export type KitListRelationFilter = {
  every?: InputMaybe<KitWhereInput>;
  none?: InputMaybe<KitWhereInput>;
  some?: InputMaybe<KitWhereInput>;
};

export type KitOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type KitOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kitType?: InputMaybe<SortOrder>;
};

export enum KitScalarFieldEnum {
  ClubId = 'clubId',
  Data = 'data',
  Id = 'id',
  KitType = 'kitType'
}

export type KitWhereInput = {
  AND?: InputMaybe<Array<KitWhereInput>>;
  NOT?: InputMaybe<Array<KitWhereInput>>;
  OR?: InputMaybe<Array<KitWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  kitType?: InputMaybe<StringFilter>;
};

export type KitWhereUniqueInput = {
  AND?: InputMaybe<Array<KitWhereInput>>;
  NOT?: InputMaybe<Array<KitWhereInput>>;
  OR?: InputMaybe<Array<KitWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kitType?: InputMaybe<StringFilter>;
};

export type LeaguePromotionRelegation = {
  __typename?: 'LeaguePromotionRelegation';
  numberOfPromotedClubs: Scalars['Float']['output'];
  numberOfRelegatedClubs: Scalars['Float']['output'];
};

export type Lineup = {
  __typename?: 'Lineup';
  _count?: Maybe<LineupCount>;
  club: Club;
  clubId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isSelected: Scalars['Boolean']['output'];
  playerLineups: Array<PlayerLineup>;
  tactics: Tactics;
  tacticsId: Scalars['Int']['output'];
};


export type LineupPlayerLineupsArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};

export type LineupCount = {
  __typename?: 'LineupCount';
  playerLineups: Scalars['Int']['output'];
};


export type LineupCountPlayerLineupsArgs = {
  where?: InputMaybe<PlayerLineupWhereInput>;
};

export type LineupListRelationFilter = {
  every?: InputMaybe<LineupWhereInput>;
  none?: InputMaybe<LineupWhereInput>;
  some?: InputMaybe<LineupWhereInput>;
};

export type LineupNullableRelationFilter = {
  is?: InputMaybe<LineupWhereInput>;
  isNot?: InputMaybe<LineupWhereInput>;
};

export type LineupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LineupOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isSelected?: InputMaybe<SortOrder>;
  playerLineups?: InputMaybe<PlayerLineupOrderByRelationAggregateInput>;
  tactics?: InputMaybe<TacticsOrderByWithRelationInput>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupRelationFilter = {
  is?: InputMaybe<LineupWhereInput>;
  isNot?: InputMaybe<LineupWhereInput>;
};

export enum LineupScalarFieldEnum {
  ClubId = 'clubId',
  Id = 'id',
  IsSelected = 'isSelected',
  TacticsId = 'tacticsId'
}

export type LineupWhereInput = {
  AND?: InputMaybe<Array<LineupWhereInput>>;
  NOT?: InputMaybe<Array<LineupWhereInput>>;
  OR?: InputMaybe<Array<LineupWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isSelected?: InputMaybe<BoolFilter>;
  playerLineups?: InputMaybe<PlayerLineupListRelationFilter>;
  tactics?: InputMaybe<TacticsRelationFilter>;
  tacticsId?: InputMaybe<IntFilter>;
};

export type LineupWhereUniqueInput = {
  AND?: InputMaybe<Array<LineupWhereInput>>;
  NOT?: InputMaybe<Array<LineupWhereInput>>;
  OR?: InputMaybe<Array<LineupWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isSelected?: InputMaybe<BoolFilter>;
  playerLineups?: InputMaybe<PlayerLineupListRelationFilter>;
  tactics?: InputMaybe<TacticsRelationFilter>;
  tacticsId?: InputMaybe<Scalars['Int']['input']>;
};

export type Match = {
  __typename?: 'Match';
  _count?: Maybe<MatchCount>;
  activeEvents: Scalars['JSON']['output'];
  awayTeam: Scalars['JSON']['output'];
  ballLocation: Scalars['JSON']['output'];
  digest: Scalars['String']['output'];
  fixture?: Maybe<Fixture>;
  frames: Scalars['JSON']['output'];
  getStartTimestamp?: Maybe<Scalars['Float']['output']>;
  grid: Scalars['JSON']['output'];
  homeTeam: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  initialParams: Scalars['JSON']['output'];
  isResultProcessed: Scalars['Boolean']['output'];
  keyEvents: Scalars['JSON']['output'];
  lastTeamToTouchBall: Scalars['Int']['output'];
  matchChanges: Array<MatchChange>;
  penaltyShootoutState: Scalars['JSON']['output'];
  pendingAdminChanges: Scalars['JSON']['output'];
  pendingTacticalChanges: Scalars['JSON']['output'];
  periodStates: Scalars['JSON']['output'];
  players: Scalars['JSON']['output'];
  possessionClubId: Scalars['Int']['output'];
  possessionIntervalMinutes: Array<Scalars['Int']['output']>;
  possessionIntervalMinutesCompleted: Scalars['JSON']['output'];
  possessionPlayerId?: Maybe<Scalars['String']['output']>;
  ratingsSummary: Scalars['JSON']['output'];
  referee: Scalars['JSON']['output'];
  seed: Scalars['String']['output'];
  startTimestamp: Scalars['Float']['output'];
  state: Scalars['Int']['output'];
  timestamp: Scalars['Float']['output'];
  underPressure: Scalars['Boolean']['output'];
};


export type MatchFixtureArgs = {
  where?: InputMaybe<FixtureWhereInput>;
};


export type MatchGetStartTimestampArgs = {
  period: Scalars['Float']['input'];
};


export type MatchMatchChangesArgs = {
  cursor?: InputMaybe<MatchChangeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchChangeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchChangeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchChangeWhereInput>;
};

export type MatchChange = {
  __typename?: 'MatchChange';
  changes: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  digest: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  match: Match;
  matchId: Scalars['String']['output'];
  timestampReceived: Scalars['Float']['output'];
};

export type MatchChangeListRelationFilter = {
  every?: InputMaybe<MatchChangeWhereInput>;
  none?: InputMaybe<MatchChangeWhereInput>;
  some?: InputMaybe<MatchChangeWhereInput>;
};

export type MatchChangeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MatchChangeOrderByWithRelationInput = {
  changes?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  digest?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  match?: InputMaybe<MatchOrderByWithRelationInput>;
  matchId?: InputMaybe<SortOrder>;
  timestampReceived?: InputMaybe<SortOrder>;
};

export enum MatchChangeScalarFieldEnum {
  Changes = 'changes',
  CreatedAt = 'createdAt',
  Digest = 'digest',
  Id = 'id',
  MatchId = 'matchId',
  TimestampReceived = 'timestampReceived'
}

export type MatchChangeWhereInput = {
  AND?: InputMaybe<Array<MatchChangeWhereInput>>;
  NOT?: InputMaybe<Array<MatchChangeWhereInput>>;
  OR?: InputMaybe<Array<MatchChangeWhereInput>>;
  changes?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  digest?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  match?: InputMaybe<MatchRelationFilter>;
  matchId?: InputMaybe<StringFilter>;
  timestampReceived?: InputMaybe<FloatFilter>;
};

export type MatchChangeWhereUniqueInput = {
  AND?: InputMaybe<Array<MatchChangeWhereInput>>;
  NOT?: InputMaybe<Array<MatchChangeWhereInput>>;
  OR?: InputMaybe<Array<MatchChangeWhereInput>>;
  changes?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  digest?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  match?: InputMaybe<MatchRelationFilter>;
  matchId?: InputMaybe<StringFilter>;
  timestampReceived?: InputMaybe<FloatFilter>;
};

export type MatchConfiguration = {
  __typename?: 'MatchConfiguration';
  cardProbabilities: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  performanceModifiers: Scalars['JSON']['output'];
};

export type MatchConfigurationOrderByWithRelationInput = {
  cardProbabilities?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  performanceModifiers?: InputMaybe<SortOrder>;
};

export enum MatchConfigurationScalarFieldEnum {
  CardProbabilities = 'cardProbabilities',
  Id = 'id',
  PerformanceModifiers = 'performanceModifiers'
}

export type MatchConfigurationWhereInput = {
  AND?: InputMaybe<Array<MatchConfigurationWhereInput>>;
  NOT?: InputMaybe<Array<MatchConfigurationWhereInput>>;
  OR?: InputMaybe<Array<MatchConfigurationWhereInput>>;
  cardProbabilities?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  performanceModifiers?: InputMaybe<JsonFilter>;
};

export type MatchConfigurationWhereUniqueInput = {
  AND?: InputMaybe<Array<MatchConfigurationWhereInput>>;
  NOT?: InputMaybe<Array<MatchConfigurationWhereInput>>;
  OR?: InputMaybe<Array<MatchConfigurationWhereInput>>;
  cardProbabilities?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  performanceModifiers?: InputMaybe<JsonFilter>;
};

export type MatchCount = {
  __typename?: 'MatchCount';
  matchChanges: Scalars['Int']['output'];
};


export type MatchCountMatchChangesArgs = {
  where?: InputMaybe<MatchChangeWhereInput>;
};

export type MatchNullableRelationFilter = {
  is?: InputMaybe<MatchWhereInput>;
  isNot?: InputMaybe<MatchWhereInput>;
};

export type MatchOrderByWithRelationInput = {
  activeEvents?: InputMaybe<SortOrder>;
  awayTeam?: InputMaybe<SortOrder>;
  ballLocation?: InputMaybe<SortOrder>;
  digest?: InputMaybe<SortOrder>;
  fixture?: InputMaybe<FixtureOrderByWithRelationInput>;
  frames?: InputMaybe<SortOrder>;
  grid?: InputMaybe<SortOrder>;
  homeTeam?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  initialParams?: InputMaybe<SortOrder>;
  isResultProcessed?: InputMaybe<SortOrder>;
  keyEvents?: InputMaybe<SortOrder>;
  lastTeamToTouchBall?: InputMaybe<SortOrder>;
  matchChanges?: InputMaybe<MatchChangeOrderByRelationAggregateInput>;
  penaltyShootoutState?: InputMaybe<SortOrder>;
  pendingAdminChanges?: InputMaybe<SortOrder>;
  pendingTacticalChanges?: InputMaybe<SortOrder>;
  periodStates?: InputMaybe<SortOrder>;
  players?: InputMaybe<SortOrder>;
  possessionClubId?: InputMaybe<SortOrder>;
  possessionIntervalMinutes?: InputMaybe<SortOrder>;
  possessionIntervalMinutesCompleted?: InputMaybe<SortOrder>;
  possessionPlayerId?: InputMaybe<SortOrderInput>;
  ratingsSummary?: InputMaybe<SortOrder>;
  referee?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  underPressure?: InputMaybe<SortOrder>;
};

export type MatchRelationFilter = {
  is?: InputMaybe<MatchWhereInput>;
  isNot?: InputMaybe<MatchWhereInput>;
};

export enum MatchScalarFieldEnum {
  ActiveEvents = 'activeEvents',
  AwayTeam = 'awayTeam',
  BallLocation = 'ballLocation',
  Digest = 'digest',
  Frames = 'frames',
  Grid = 'grid',
  HomeTeam = 'homeTeam',
  Id = 'id',
  InitialParams = 'initialParams',
  IsResultProcessed = 'isResultProcessed',
  KeyEvents = 'keyEvents',
  LastTeamToTouchBall = 'lastTeamToTouchBall',
  PenaltyShootoutState = 'penaltyShootoutState',
  PendingAdminChanges = 'pendingAdminChanges',
  PendingTacticalChanges = 'pendingTacticalChanges',
  PeriodStates = 'periodStates',
  Players = 'players',
  PossessionClubId = 'possessionClubId',
  PossessionIntervalMinutes = 'possessionIntervalMinutes',
  PossessionIntervalMinutesCompleted = 'possessionIntervalMinutesCompleted',
  PossessionPlayerId = 'possessionPlayerId',
  RatingsSummary = 'ratingsSummary',
  Referee = 'referee',
  Seed = 'seed',
  StartTimestamp = 'startTimestamp',
  State = 'state',
  Timestamp = 'timestamp',
  UnderPressure = 'underPressure'
}

export type MatchWhereInput = {
  AND?: InputMaybe<Array<MatchWhereInput>>;
  NOT?: InputMaybe<Array<MatchWhereInput>>;
  OR?: InputMaybe<Array<MatchWhereInput>>;
  activeEvents?: InputMaybe<JsonFilter>;
  awayTeam?: InputMaybe<JsonFilter>;
  ballLocation?: InputMaybe<JsonFilter>;
  digest?: InputMaybe<StringFilter>;
  fixture?: InputMaybe<FixtureNullableRelationFilter>;
  frames?: InputMaybe<JsonFilter>;
  grid?: InputMaybe<JsonFilter>;
  homeTeam?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  initialParams?: InputMaybe<JsonFilter>;
  isResultProcessed?: InputMaybe<BoolFilter>;
  keyEvents?: InputMaybe<JsonFilter>;
  lastTeamToTouchBall?: InputMaybe<IntFilter>;
  matchChanges?: InputMaybe<MatchChangeListRelationFilter>;
  penaltyShootoutState?: InputMaybe<JsonFilter>;
  pendingAdminChanges?: InputMaybe<JsonFilter>;
  pendingTacticalChanges?: InputMaybe<JsonFilter>;
  periodStates?: InputMaybe<JsonFilter>;
  players?: InputMaybe<JsonFilter>;
  possessionClubId?: InputMaybe<IntFilter>;
  possessionIntervalMinutes?: InputMaybe<IntNullableListFilter>;
  possessionIntervalMinutesCompleted?: InputMaybe<JsonFilter>;
  possessionPlayerId?: InputMaybe<StringNullableFilter>;
  ratingsSummary?: InputMaybe<JsonFilter>;
  referee?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  state?: InputMaybe<IntFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  underPressure?: InputMaybe<BoolFilter>;
};

export type MatchWhereUniqueInput = {
  AND?: InputMaybe<Array<MatchWhereInput>>;
  NOT?: InputMaybe<Array<MatchWhereInput>>;
  OR?: InputMaybe<Array<MatchWhereInput>>;
  activeEvents?: InputMaybe<JsonFilter>;
  awayTeam?: InputMaybe<JsonFilter>;
  ballLocation?: InputMaybe<JsonFilter>;
  digest?: InputMaybe<StringFilter>;
  fixture?: InputMaybe<FixtureNullableRelationFilter>;
  frames?: InputMaybe<JsonFilter>;
  grid?: InputMaybe<JsonFilter>;
  homeTeam?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialParams?: InputMaybe<JsonFilter>;
  isResultProcessed?: InputMaybe<BoolFilter>;
  keyEvents?: InputMaybe<JsonFilter>;
  lastTeamToTouchBall?: InputMaybe<IntFilter>;
  matchChanges?: InputMaybe<MatchChangeListRelationFilter>;
  penaltyShootoutState?: InputMaybe<JsonFilter>;
  pendingAdminChanges?: InputMaybe<JsonFilter>;
  pendingTacticalChanges?: InputMaybe<JsonFilter>;
  periodStates?: InputMaybe<JsonFilter>;
  players?: InputMaybe<JsonFilter>;
  possessionClubId?: InputMaybe<IntFilter>;
  possessionIntervalMinutes?: InputMaybe<IntNullableListFilter>;
  possessionIntervalMinutesCompleted?: InputMaybe<JsonFilter>;
  possessionPlayerId?: InputMaybe<StringNullableFilter>;
  ratingsSummary?: InputMaybe<JsonFilter>;
  referee?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  state?: InputMaybe<IntFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  underPressure?: InputMaybe<BoolFilter>;
};

export type MerkleRoot = {
  __typename?: 'MerkleRoot';
  id: Scalars['Int']['output'];
  root: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type MerkleRootOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  root?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export enum MerkleRootScalarFieldEnum {
  Id = 'id',
  Root = 'root',
  Timestamp = 'timestamp'
}

export type MerkleRootWhereInput = {
  AND?: InputMaybe<Array<MerkleRootWhereInput>>;
  NOT?: InputMaybe<Array<MerkleRootWhereInput>>;
  OR?: InputMaybe<Array<MerkleRootWhereInput>>;
  id?: InputMaybe<IntFilter>;
  root?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<FloatFilter>;
};

export type MerkleRootWhereUniqueInput = {
  AND?: InputMaybe<Array<MerkleRootWhereInput>>;
  NOT?: InputMaybe<Array<MerkleRootWhereInput>>;
  OR?: InputMaybe<Array<MerkleRootWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  root?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<FloatFilter>;
};

export type Metadata = {
  __typename?: 'Metadata';
  currentRealTimestamp: Scalars['Float']['output'];
  currentSeasonId?: Maybe<Scalars['Int']['output']>;
  currentTimestamp: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  lastActionRealTimestamp: Scalars['Float']['output'];
  lastActionTimestamp: Scalars['Float']['output'];
  seasonState?: Maybe<SeasonState>;
  seed: Scalars['String']['output'];
  startTimestamp: Scalars['Float']['output'];
  timeline?: Maybe<Scalars['JSON']['output']>;
};

export type MetadataOrderByWithRelationInput = {
  currentRealTimestamp?: InputMaybe<SortOrder>;
  currentSeasonId?: InputMaybe<SortOrderInput>;
  currentTimestamp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastActionRealTimestamp?: InputMaybe<SortOrder>;
  lastActionTimestamp?: InputMaybe<SortOrder>;
  seasonState?: InputMaybe<SortOrderInput>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timeline?: InputMaybe<SortOrderInput>;
};

export enum MetadataScalarFieldEnum {
  CurrentRealTimestamp = 'currentRealTimestamp',
  CurrentSeasonId = 'currentSeasonId',
  CurrentTimestamp = 'currentTimestamp',
  Id = 'id',
  LastActionRealTimestamp = 'lastActionRealTimestamp',
  LastActionTimestamp = 'lastActionTimestamp',
  SeasonState = 'seasonState',
  Seed = 'seed',
  StartTimestamp = 'startTimestamp',
  Timeline = 'timeline'
}

export type MetadataWhereInput = {
  AND?: InputMaybe<Array<MetadataWhereInput>>;
  NOT?: InputMaybe<Array<MetadataWhereInput>>;
  OR?: InputMaybe<Array<MetadataWhereInput>>;
  currentRealTimestamp?: InputMaybe<FloatFilter>;
  currentSeasonId?: InputMaybe<IntNullableFilter>;
  currentTimestamp?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IntFilter>;
  lastActionRealTimestamp?: InputMaybe<FloatFilter>;
  lastActionTimestamp?: InputMaybe<FloatFilter>;
  seasonState?: InputMaybe<EnumSeasonStateNullableFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  timeline?: InputMaybe<JsonNullableFilter>;
};

export type MetadataWhereUniqueInput = {
  AND?: InputMaybe<Array<MetadataWhereInput>>;
  NOT?: InputMaybe<Array<MetadataWhereInput>>;
  OR?: InputMaybe<Array<MetadataWhereInput>>;
  currentRealTimestamp?: InputMaybe<FloatFilter>;
  currentSeasonId?: InputMaybe<IntNullableFilter>;
  currentTimestamp?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastActionRealTimestamp?: InputMaybe<FloatFilter>;
  lastActionTimestamp?: InputMaybe<FloatFilter>;
  seasonState?: InputMaybe<EnumSeasonStateNullableFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  timeline?: InputMaybe<JsonNullableFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitAction: SubmittedActionResponseType;
};


export type MutationSubmitActionArgs = {
  action: Scalars['String']['input'];
  address: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumPrizeAssignmentStatusFilter = {
  equals?: InputMaybe<PrizeAssignmentStatus>;
  in?: InputMaybe<Array<PrizeAssignmentStatus>>;
  not?: InputMaybe<NestedEnumPrizeAssignmentStatusFilter>;
  notIn?: InputMaybe<Array<PrizeAssignmentStatus>>;
};

export type NestedEnumPrizeClaimStatusFilter = {
  equals?: InputMaybe<PrizeClaimStatus>;
  in?: InputMaybe<Array<PrizeClaimStatus>>;
  not?: InputMaybe<NestedEnumPrizeClaimStatusFilter>;
  notIn?: InputMaybe<Array<PrizeClaimStatus>>;
};

export type NestedEnumPrizeTypeFilter = {
  equals?: InputMaybe<PrizeType>;
  in?: InputMaybe<Array<PrizeType>>;
  not?: InputMaybe<NestedEnumPrizeTypeFilter>;
  notIn?: InputMaybe<Array<PrizeType>>;
};

export type NestedEnumSeasonStateFilter = {
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type NestedEnumSeasonStateNullableFilter = {
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateNullableFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type NestedEnumStadiumStandSideFilter = {
  equals?: InputMaybe<StadiumStandSide>;
  in?: InputMaybe<Array<StadiumStandSide>>;
  not?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  notIn?: InputMaybe<Array<StadiumStandSide>>;
};

export type NestedEnumStadiumStandSizeFilter = {
  equals?: InputMaybe<StadiumStandSize>;
  in?: InputMaybe<Array<StadiumStandSize>>;
  not?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  notIn?: InputMaybe<Array<StadiumStandSize>>;
};

export type NestedEnumStadiumStandStyleFilter = {
  equals?: InputMaybe<StadiumStandStyle>;
  in?: InputMaybe<Array<StadiumStandStyle>>;
  not?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  notIn?: InputMaybe<Array<StadiumStandStyle>>;
};

export type NestedEnumTournamentStateFilter = {
  equals?: InputMaybe<TournamentState>;
  in?: InputMaybe<Array<TournamentState>>;
  not?: InputMaybe<NestedEnumTournamentStateFilter>;
  notIn?: InputMaybe<Array<TournamentState>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Owner = {
  __typename?: 'Owner';
  PrizeClaim: Array<PrizeClaim>;
  TournamentResult: Array<TournamentResult>;
  _count?: Maybe<OwnerCount>;
  address: Scalars['String']['output'];
  clubs: Array<Club>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  players: Array<Player>;
};


export type OwnerPrizeClaimArgs = {
  cursor?: InputMaybe<PrizeClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeClaimWhereInput>;
};


export type OwnerTournamentResultArgs = {
  cursor?: InputMaybe<TournamentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type OwnerClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type OwnerPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type OwnerCount = {
  __typename?: 'OwnerCount';
  PrizeClaim: Scalars['Int']['output'];
  TournamentResult: Scalars['Int']['output'];
  clubs: Scalars['Int']['output'];
  players: Scalars['Int']['output'];
};


export type OwnerCountPrizeClaimArgs = {
  where?: InputMaybe<PrizeClaimWhereInput>;
};


export type OwnerCountTournamentResultArgs = {
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type OwnerCountClubsArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type OwnerCountPlayersArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};

export type OwnerNullableRelationFilter = {
  is?: InputMaybe<OwnerWhereInput>;
  isNot?: InputMaybe<OwnerWhereInput>;
};

export type OwnerOrderByWithRelationInput = {
  PrizeClaim?: InputMaybe<PrizeClaimOrderByRelationAggregateInput>;
  TournamentResult?: InputMaybe<TournamentResultOrderByRelationAggregateInput>;
  address?: InputMaybe<SortOrder>;
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
};

export type OwnerRelationFilter = {
  is?: InputMaybe<OwnerWhereInput>;
  isNot?: InputMaybe<OwnerWhereInput>;
};

export enum OwnerScalarFieldEnum {
  Address = 'address',
  Id = 'id',
  IsAdmin = 'isAdmin'
}

export type OwnerWhereInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>;
  NOT?: InputMaybe<Array<OwnerWhereInput>>;
  OR?: InputMaybe<Array<OwnerWhereInput>>;
  PrizeClaim?: InputMaybe<PrizeClaimListRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  address?: InputMaybe<StringFilter>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
};

export type OwnerWhereUniqueInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>;
  NOT?: InputMaybe<Array<OwnerWhereInput>>;
  OR?: InputMaybe<Array<OwnerWhereInput>>;
  PrizeClaim?: InputMaybe<PrizeClaimListRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<BoolFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
};

export type Player = {
  __typename?: 'Player';
  _count?: Maybe<PlayerCount>;
  assetId?: Maybe<Scalars['Int']['output']>;
  club?: Maybe<Club>;
  clubId?: Maybe<Scalars['Int']['output']>;
  creationRating: Scalars['Float']['output'];
  firstName: Scalars['String']['output'];
  firstSeason: Season;
  firstSeasonId: Scalars['Int']['output'];
  fullName: Scalars['String']['output'];
  generationId: Scalars['Int']['output'];
  heightMeters: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  imageUrls?: Maybe<PlayerImages>;
  isAcademy: Scalars['Boolean']['output'];
  isInitial: Scalars['Boolean']['output'];
  isPartOfAcademyMerkleTree: Scalars['Boolean']['output'];
  isReserve: Scalars['Boolean']['output'];
  isRetired: Scalars['Boolean']['output'];
  isReward: Scalars['Boolean']['output'];
  isTraining: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  merkleRoot?: Maybe<Scalars['String']['output']>;
  mintPrice?: Maybe<Scalars['Float']['output']>;
  nationality: Scalars['String']['output'];
  originClub: Club;
  originClubId: Scalars['Int']['output'];
  owner?: Maybe<Owner>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  playerAttributes: Array<PlayerAttributes>;
  playerLineups: Array<PlayerLineup>;
  positionalRating: Array<PositionalRating>;
  potential: Scalars['Int']['output'];
  rarity: Scalars['String']['output'];
  seed: Scalars['String']['output'];
  timesteppedPlayerAttributes?: Maybe<PlayerAttributes>;
};


export type PlayerClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type PlayerOwnerArgs = {
  where?: InputMaybe<OwnerWhereInput>;
};


export type PlayerPlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type PlayerPlayerLineupsArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type PlayerPositionalRatingArgs = {
  cursor?: InputMaybe<PositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PositionalRatingWhereInput>;
};

export type PlayerAttributes = {
  __typename?: 'PlayerAttributes';
  accumulatedMinutes: Scalars['Float']['output'];
  accumulatedYellows: Scalars['Int']['output'];
  age: Scalars['Int']['output'];
  condition: Scalars['Float']['output'];
  footedness: Scalars['String']['output'];
  gamesSuspended: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLatest: Scalars['Boolean']['output'];
  leadership: Scalars['Float']['output'];
  player: Player;
  playerId: Scalars['String']['output'];
  season?: Maybe<Season>;
  seasonId?: Maybe<Scalars['Int']['output']>;
  stamina: Scalars['Float']['output'];
  timestamp: Scalars['Float']['output'];
  unlockedPotential: Scalars['Int']['output'];
  usedPotential: Scalars['Int']['output'];
  weakFootAbility: Scalars['Int']['output'];
};


export type PlayerAttributesSeasonArgs = {
  where?: InputMaybe<SeasonWhereInput>;
};

export type PlayerAttributesListRelationFilter = {
  every?: InputMaybe<PlayerAttributesWhereInput>;
  none?: InputMaybe<PlayerAttributesWhereInput>;
  some?: InputMaybe<PlayerAttributesWhereInput>;
};

export type PlayerAttributesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerAttributesOrderByWithRelationInput = {
  accumulatedMinutes?: InputMaybe<SortOrder>;
  accumulatedYellows?: InputMaybe<SortOrder>;
  age?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  footedness?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
  season?: InputMaybe<SeasonOrderByWithRelationInput>;
  seasonId?: InputMaybe<SortOrderInput>;
  stamina?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  unlockedPotential?: InputMaybe<SortOrder>;
  usedPotential?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export enum PlayerAttributesScalarFieldEnum {
  AccumulatedMinutes = 'accumulatedMinutes',
  AccumulatedYellows = 'accumulatedYellows',
  Age = 'age',
  Condition = 'condition',
  Footedness = 'footedness',
  GamesSuspended = 'gamesSuspended',
  Id = 'id',
  IsLatest = 'isLatest',
  Leadership = 'leadership',
  PlayerId = 'playerId',
  SeasonId = 'seasonId',
  Stamina = 'stamina',
  Timestamp = 'timestamp',
  UnlockedPotential = 'unlockedPotential',
  UsedPotential = 'usedPotential',
  WeakFootAbility = 'weakFootAbility'
}

export type PlayerAttributesWhereInput = {
  AND?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  accumulatedMinutes?: InputMaybe<FloatFilter>;
  accumulatedYellows?: InputMaybe<IntFilter>;
  age?: InputMaybe<IntFilter>;
  condition?: InputMaybe<FloatFilter>;
  footedness?: InputMaybe<StringFilter>;
  gamesSuspended?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isLatest?: InputMaybe<BoolFilter>;
  leadership?: InputMaybe<FloatFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  season?: InputMaybe<SeasonNullableRelationFilter>;
  seasonId?: InputMaybe<IntNullableFilter>;
  stamina?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  unlockedPotential?: InputMaybe<IntFilter>;
  usedPotential?: InputMaybe<IntFilter>;
  weakFootAbility?: InputMaybe<IntFilter>;
};

export type PlayerAttributesWhereUniqueInput = {
  AND?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  accumulatedMinutes?: InputMaybe<FloatFilter>;
  accumulatedYellows?: InputMaybe<IntFilter>;
  age?: InputMaybe<IntFilter>;
  condition?: InputMaybe<FloatFilter>;
  footedness?: InputMaybe<StringFilter>;
  gamesSuspended?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isLatest?: InputMaybe<BoolFilter>;
  leadership?: InputMaybe<FloatFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  season?: InputMaybe<SeasonNullableRelationFilter>;
  seasonId?: InputMaybe<IntNullableFilter>;
  stamina?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  unlockedPotential?: InputMaybe<IntFilter>;
  usedPotential?: InputMaybe<IntFilter>;
  weakFootAbility?: InputMaybe<IntFilter>;
};

export type PlayerCount = {
  __typename?: 'PlayerCount';
  PlayerRegistration: Scalars['Int']['output'];
  actions: Scalars['Int']['output'];
  playerAttributes: Scalars['Int']['output'];
  playerLineups: Scalars['Int']['output'];
  playerStatsRecord: Scalars['Int']['output'];
  positionalRating: Scalars['Int']['output'];
};


export type PlayerCountPlayerRegistrationArgs = {
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};


export type PlayerCountActionsArgs = {
  where?: InputMaybe<ActionWhereInput>;
};


export type PlayerCountPlayerAttributesArgs = {
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type PlayerCountPlayerLineupsArgs = {
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type PlayerCountPlayerStatsRecordArgs = {
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type PlayerCountPositionalRatingArgs = {
  where?: InputMaybe<PositionalRatingWhereInput>;
};

export type PlayerImages = {
  __typename?: 'PlayerImages';
  card?: Maybe<Scalars['String']['output']>;
  player?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
};

export type PlayerLineup = {
  __typename?: 'PlayerLineup';
  formationSlotIndex: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isCaptain: Scalars['Boolean']['output'];
  lineup: Lineup;
  lineupId: Scalars['Int']['output'];
  player: Player;
  playerId: Scalars['String']['output'];
};

export type PlayerLineupListRelationFilter = {
  every?: InputMaybe<PlayerLineupWhereInput>;
  none?: InputMaybe<PlayerLineupWhereInput>;
  some?: InputMaybe<PlayerLineupWhereInput>;
};

export type PlayerLineupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerLineupOrderByWithRelationInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCaptain?: InputMaybe<SortOrder>;
  lineup?: InputMaybe<LineupOrderByWithRelationInput>;
  lineupId?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
};

export enum PlayerLineupScalarFieldEnum {
  FormationSlotIndex = 'formationSlotIndex',
  Id = 'id',
  IsCaptain = 'isCaptain',
  LineupId = 'lineupId',
  PlayerId = 'playerId'
}

export type PlayerLineupWhereInput = {
  AND?: InputMaybe<Array<PlayerLineupWhereInput>>;
  NOT?: InputMaybe<Array<PlayerLineupWhereInput>>;
  OR?: InputMaybe<Array<PlayerLineupWhereInput>>;
  formationSlotIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isCaptain?: InputMaybe<BoolFilter>;
  lineup?: InputMaybe<LineupRelationFilter>;
  lineupId?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
};

export type PlayerLineupWhereUniqueInput = {
  AND?: InputMaybe<Array<PlayerLineupWhereInput>>;
  NOT?: InputMaybe<Array<PlayerLineupWhereInput>>;
  OR?: InputMaybe<Array<PlayerLineupWhereInput>>;
  formationSlotIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCaptain?: InputMaybe<BoolFilter>;
  lineup?: InputMaybe<LineupRelationFilter>;
  lineupId?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
};

export type PlayerListRelationFilter = {
  every?: InputMaybe<PlayerWhereInput>;
  none?: InputMaybe<PlayerWhereInput>;
  some?: InputMaybe<PlayerWhereInput>;
};

export type PlayerNullableRelationFilter = {
  is?: InputMaybe<PlayerWhereInput>;
  isNot?: InputMaybe<PlayerWhereInput>;
};

export type PlayerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithRelationInput = {
  assetId?: InputMaybe<SortOrderInput>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrderInput>;
  creationRating?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAcademy?: InputMaybe<SortOrder>;
  isInitial?: InputMaybe<SortOrder>;
  isPartOfAcademyMerkleTree?: InputMaybe<SortOrder>;
  isReserve?: InputMaybe<SortOrder>;
  isRetired?: InputMaybe<SortOrder>;
  isReward?: InputMaybe<SortOrder>;
  isTraining?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  merkleRoot?: InputMaybe<SortOrderInput>;
  mintPrice?: InputMaybe<SortOrderInput>;
  nationality?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrderInput>;
  potential?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
};

export type PlayerRegistration = {
  __typename?: 'PlayerRegistration';
  club?: Maybe<Club>;
  clubId?: Maybe<Scalars['Int']['output']>;
  expiredAtRealTimestamp?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  player: Player;
  playerId: Scalars['String']['output'];
  registeredAtRealTimestamp: Scalars['Float']['output'];
  registrationWindow: RegistrationWindow;
  registrationWindowId: Scalars['Int']['output'];
};


export type PlayerRegistrationClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};

export type PlayerRegistrationListRelationFilter = {
  every?: InputMaybe<PlayerRegistrationWhereInput>;
  none?: InputMaybe<PlayerRegistrationWhereInput>;
  some?: InputMaybe<PlayerRegistrationWhereInput>;
};

export type PlayerRegistrationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerRegistrationOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrderInput>;
  expiredAtRealTimestamp?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
  registeredAtRealTimestamp?: InputMaybe<SortOrder>;
  registrationWindow?: InputMaybe<RegistrationWindowOrderByWithRelationInput>;
  registrationWindowId?: InputMaybe<SortOrder>;
};

export enum PlayerRegistrationScalarFieldEnum {
  ClubId = 'clubId',
  ExpiredAtRealTimestamp = 'expiredAtRealTimestamp',
  Id = 'id',
  PlayerId = 'playerId',
  RegisteredAtRealTimestamp = 'registeredAtRealTimestamp',
  RegistrationWindowId = 'registrationWindowId'
}

export type PlayerRegistrationWhereInput = {
  AND?: InputMaybe<Array<PlayerRegistrationWhereInput>>;
  NOT?: InputMaybe<Array<PlayerRegistrationWhereInput>>;
  OR?: InputMaybe<Array<PlayerRegistrationWhereInput>>;
  club?: InputMaybe<ClubNullableRelationFilter>;
  clubId?: InputMaybe<IntNullableFilter>;
  expiredAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  registeredAtRealTimestamp?: InputMaybe<FloatFilter>;
  registrationWindow?: InputMaybe<RegistrationWindowRelationFilter>;
  registrationWindowId?: InputMaybe<IntFilter>;
};

export type PlayerRegistrationWhereUniqueInput = {
  AND?: InputMaybe<Array<PlayerRegistrationWhereInput>>;
  NOT?: InputMaybe<Array<PlayerRegistrationWhereInput>>;
  OR?: InputMaybe<Array<PlayerRegistrationWhereInput>>;
  club?: InputMaybe<ClubNullableRelationFilter>;
  clubId?: InputMaybe<IntNullableFilter>;
  expiredAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  registeredAtRealTimestamp?: InputMaybe<FloatFilter>;
  registrationWindow?: InputMaybe<RegistrationWindowRelationFilter>;
  registrationWindowId?: InputMaybe<IntFilter>;
};

export type PlayerRelationFilter = {
  is?: InputMaybe<PlayerWhereInput>;
  isNot?: InputMaybe<PlayerWhereInput>;
};

export enum PlayerScalarFieldEnum {
  AssetId = 'assetId',
  ClubId = 'clubId',
  CreationRating = 'creationRating',
  FirstName = 'firstName',
  FirstSeasonId = 'firstSeasonId',
  FullName = 'fullName',
  GenerationId = 'generationId',
  HeightMeters = 'heightMeters',
  Id = 'id',
  Images = 'images',
  IsAcademy = 'isAcademy',
  IsInitial = 'isInitial',
  IsPartOfAcademyMerkleTree = 'isPartOfAcademyMerkleTree',
  IsReserve = 'isReserve',
  IsRetired = 'isRetired',
  IsReward = 'isReward',
  IsTraining = 'isTraining',
  LastName = 'lastName',
  MerkleRoot = 'merkleRoot',
  MintPrice = 'mintPrice',
  Nationality = 'nationality',
  OriginClubId = 'originClubId',
  OwnerId = 'ownerId',
  Potential = 'potential',
  Rarity = 'rarity',
  Seed = 'seed'
}

export type PlayerStatsRecord = {
  __typename?: 'PlayerStatsRecord';
  _count?: Maybe<PlayerStatsRecordCount>;
  appearances: Scalars['Int']['output'];
  assists: Scalars['Int']['output'];
  attemptedDribbles: Scalars['Int']['output'];
  attemptedPasses: Scalars['Int']['output'];
  backHeelShots: Scalars['Int']['output'];
  blocks: Scalars['Int']['output'];
  carries: Scalars['Int']['output'];
  clearances: Scalars['Int']['output'];
  competitionPlayerStats: Array<CompetitionPlayerStats>;
  completedDribbles: Scalars['Int']['output'];
  completedPasses: Scalars['Int']['output'];
  crosses: Scalars['Int']['output'];
  divingHeaderShots: Scalars['Int']['output'];
  dribbleSuccessRate?: Maybe<Scalars['Float']['output']>;
  duelsLost: Scalars['Int']['output'];
  duelsWon: Scalars['Int']['output'];
  failedInterceptions: Scalars['Int']['output'];
  fiftyFiftiesLost: Scalars['Int']['output'];
  fiftyFiftiesWon: Scalars['Int']['output'];
  fouls: Scalars['Int']['output'];
  freeKicksScored: Scalars['Int']['output'];
  goals: Scalars['Int']['output'];
  goalsConceded: Scalars['Int']['output'];
  groundPasses: Scalars['Int']['output'];
  halfVolleyShots: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interceptedPasses: Scalars['Int']['output'];
  interceptions: Scalars['Int']['output'];
  isGlobal: Scalars['Boolean']['output'];
  lobShots: Scalars['Int']['output'];
  normalShots: Scalars['Int']['output'];
  offsidePasses: Scalars['Int']['output'];
  offsides: Scalars['Int']['output'];
  overheadKickShots: Scalars['Int']['output'];
  passAccuracy?: Maybe<Scalars['Float']['output']>;
  penaltiesScored: Scalars['Int']['output'];
  player: Player;
  playerId: Scalars['String']['output'];
  playerTimeInfo: Scalars['JSON']['output'];
  redCards: Scalars['Int']['output'];
  saves: Scalars['Int']['output'];
  shotAccuracy?: Maybe<Scalars['Float']['output']>;
  shotsBlocked: Scalars['Int']['output'];
  shotsFromInsideTheBox: Scalars['Int']['output'];
  shotsOffTarget: Scalars['Int']['output'];
  shotsOnTarget: Scalars['Int']['output'];
  tacklesExecuted: Scalars['Int']['output'];
  tacklesReceived: Scalars['Int']['output'];
  timeInPossessionMilliseconds: Scalars['Float']['output'];
  totalShots: Scalars['Int']['output'];
  tournamentPlayerStats: Array<TournamentPlayerStats>;
  volleyShots: Scalars['Int']['output'];
  yellowCards: Scalars['Int']['output'];
};


export type PlayerStatsRecordCompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type PlayerStatsRecordTournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type PlayerStatsRecordCount = {
  __typename?: 'PlayerStatsRecordCount';
  competitionPlayerStats: Scalars['Int']['output'];
  tournamentPlayerStats: Scalars['Int']['output'];
};


export type PlayerStatsRecordCountCompetitionPlayerStatsArgs = {
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type PlayerStatsRecordCountTournamentPlayerStatsArgs = {
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type PlayerStatsRecordOrderByWithRelationInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsOrderByRelationAggregateInput>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isGlobal?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
  playerTimeInfo?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  totalShots?: InputMaybe<SortOrder>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsOrderByRelationAggregateInput>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordRelationFilter = {
  is?: InputMaybe<PlayerStatsRecordWhereInput>;
  isNot?: InputMaybe<PlayerStatsRecordWhereInput>;
};

export enum PlayerStatsRecordScalarFieldEnum {
  Appearances = 'appearances',
  Assists = 'assists',
  AttemptedDribbles = 'attemptedDribbles',
  AttemptedPasses = 'attemptedPasses',
  BackHeelShots = 'backHeelShots',
  Blocks = 'blocks',
  Carries = 'carries',
  Clearances = 'clearances',
  CompletedDribbles = 'completedDribbles',
  CompletedPasses = 'completedPasses',
  Crosses = 'crosses',
  DivingHeaderShots = 'divingHeaderShots',
  DuelsLost = 'duelsLost',
  DuelsWon = 'duelsWon',
  FailedInterceptions = 'failedInterceptions',
  FiftyFiftiesLost = 'fiftyFiftiesLost',
  FiftyFiftiesWon = 'fiftyFiftiesWon',
  Fouls = 'fouls',
  FreeKicksScored = 'freeKicksScored',
  Goals = 'goals',
  GoalsConceded = 'goalsConceded',
  GroundPasses = 'groundPasses',
  HalfVolleyShots = 'halfVolleyShots',
  Id = 'id',
  InterceptedPasses = 'interceptedPasses',
  Interceptions = 'interceptions',
  IsGlobal = 'isGlobal',
  LobShots = 'lobShots',
  NormalShots = 'normalShots',
  OffsidePasses = 'offsidePasses',
  Offsides = 'offsides',
  OverheadKickShots = 'overheadKickShots',
  PenaltiesScored = 'penaltiesScored',
  PlayerId = 'playerId',
  PlayerTimeInfo = 'playerTimeInfo',
  RedCards = 'redCards',
  Saves = 'saves',
  ShotsBlocked = 'shotsBlocked',
  ShotsFromInsideTheBox = 'shotsFromInsideTheBox',
  ShotsOffTarget = 'shotsOffTarget',
  ShotsOnTarget = 'shotsOnTarget',
  TacklesExecuted = 'tacklesExecuted',
  TacklesReceived = 'tacklesReceived',
  TimeInPossessionMilliseconds = 'timeInPossessionMilliseconds',
  TotalShots = 'totalShots',
  VolleyShots = 'volleyShots',
  YellowCards = 'yellowCards'
}

export type PlayerStatsRecordWhereInput = {
  AND?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  NOT?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  OR?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  appearances?: InputMaybe<IntFilter>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsListRelationFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsConceded?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  isGlobal?: InputMaybe<BoolFilter>;
  lobShots?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  penaltiesScored?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  playerTimeInfo?: InputMaybe<JsonFilter>;
  redCards?: InputMaybe<IntFilter>;
  saves?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFilter>;
  totalShots?: InputMaybe<IntFilter>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsListRelationFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type PlayerStatsRecordWhereUniqueInput = {
  AND?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  NOT?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  OR?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  appearances?: InputMaybe<IntFilter>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsListRelationFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsConceded?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  isGlobal?: InputMaybe<BoolFilter>;
  lobShots?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  penaltiesScored?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  playerTimeInfo?: InputMaybe<JsonFilter>;
  redCards?: InputMaybe<IntFilter>;
  saves?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFilter>;
  totalShots?: InputMaybe<IntFilter>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsListRelationFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type PlayerWhereInput = {
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  NOT?: InputMaybe<Array<PlayerWhereInput>>;
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  assetId?: InputMaybe<IntNullableFilter>;
  club?: InputMaybe<ClubNullableRelationFilter>;
  clubId?: InputMaybe<IntNullableFilter>;
  creationRating?: InputMaybe<FloatFilter>;
  firstName?: InputMaybe<StringFilter>;
  firstSeasonId?: InputMaybe<IntFilter>;
  fullName?: InputMaybe<StringFilter>;
  generationId?: InputMaybe<IntFilter>;
  heightMeters?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  isAcademy?: InputMaybe<BoolFilter>;
  isInitial?: InputMaybe<BoolFilter>;
  isPartOfAcademyMerkleTree?: InputMaybe<BoolFilter>;
  isReserve?: InputMaybe<BoolFilter>;
  isRetired?: InputMaybe<BoolFilter>;
  isReward?: InputMaybe<BoolFilter>;
  isTraining?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  merkleRoot?: InputMaybe<StringNullableFilter>;
  mintPrice?: InputMaybe<FloatNullableFilter>;
  nationality?: InputMaybe<StringFilter>;
  originClubId?: InputMaybe<IntFilter>;
  owner?: InputMaybe<OwnerNullableRelationFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  potential?: InputMaybe<IntFilter>;
  rarity?: InputMaybe<StringFilter>;
  seed?: InputMaybe<StringFilter>;
};

export type PlayerWhereUniqueInput = {
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  NOT?: InputMaybe<Array<PlayerWhereInput>>;
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  assetId?: InputMaybe<Scalars['Int']['input']>;
  club?: InputMaybe<ClubNullableRelationFilter>;
  clubId?: InputMaybe<IntNullableFilter>;
  creationRating?: InputMaybe<FloatFilter>;
  firstName?: InputMaybe<StringFilter>;
  firstSeasonId?: InputMaybe<IntFilter>;
  fullName?: InputMaybe<StringFilter>;
  generationId?: InputMaybe<IntFilter>;
  heightMeters?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAcademy?: InputMaybe<BoolFilter>;
  isInitial?: InputMaybe<BoolFilter>;
  isPartOfAcademyMerkleTree?: InputMaybe<BoolFilter>;
  isReserve?: InputMaybe<BoolFilter>;
  isRetired?: InputMaybe<BoolFilter>;
  isReward?: InputMaybe<BoolFilter>;
  isTraining?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  merkleRoot?: InputMaybe<StringNullableFilter>;
  mintPrice?: InputMaybe<FloatNullableFilter>;
  nationality?: InputMaybe<StringFilter>;
  originClubId?: InputMaybe<IntFilter>;
  owner?: InputMaybe<OwnerNullableRelationFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  potential?: InputMaybe<IntFilter>;
  rarity?: InputMaybe<StringFilter>;
  seed?: InputMaybe<StringFilter>;
};

export type PositionalRating = {
  __typename?: 'PositionalRating';
  id: Scalars['Int']['output'];
  isLatest: Scalars['Boolean']['output'];
  player: Player;
  playerId: Scalars['String']['output'];
  position: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  relativeCompetence: Scalars['Int']['output'];
  timestamp: Scalars['Float']['output'];
};

export type PositionalRatingOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  relativeCompetence?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export enum PositionalRatingScalarFieldEnum {
  Id = 'id',
  IsLatest = 'isLatest',
  PlayerId = 'playerId',
  Position = 'position',
  Rating = 'rating',
  RelativeCompetence = 'relativeCompetence',
  Timestamp = 'timestamp'
}

export type PositionalRatingWhereInput = {
  AND?: InputMaybe<Array<PositionalRatingWhereInput>>;
  NOT?: InputMaybe<Array<PositionalRatingWhereInput>>;
  OR?: InputMaybe<Array<PositionalRatingWhereInput>>;
  id?: InputMaybe<IntFilter>;
  isLatest?: InputMaybe<BoolFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  relativeCompetence?: InputMaybe<IntFilter>;
  timestamp?: InputMaybe<FloatFilter>;
};

export type PositionalRatingWhereUniqueInput = {
  AND?: InputMaybe<Array<PositionalRatingWhereInput>>;
  NOT?: InputMaybe<Array<PositionalRatingWhereInput>>;
  OR?: InputMaybe<Array<PositionalRatingWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isLatest?: InputMaybe<BoolFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  relativeCompetence?: InputMaybe<IntFilter>;
  timestamp?: InputMaybe<FloatFilter>;
};

export type Prize = {
  __typename?: 'Prize';
  PrizeAssignment: Array<PrizeAssignment>;
  _count?: Maybe<PrizeCount>;
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  distributionType?: Maybe<Scalars['String']['output']>;
  division: Division;
  divisionId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  season: Season;
  seasonId: Scalars['Int']['output'];
  type: PrizeType;
  values: Array<PrizeValue>;
};


export type PrizePrizeAssignmentArgs = {
  cursor?: InputMaybe<PrizeAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};


export type PrizeValuesArgs = {
  cursor?: InputMaybe<PrizeValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeValueWhereInput>;
};

export type PrizeAssignment = {
  __typename?: 'PrizeAssignment';
  Prize: Prize;
  PrizeClaim?: Maybe<PrizeClaim>;
  TournamentResult: TournamentResult;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  prizeClaimId?: Maybe<Scalars['Int']['output']>;
  prizeId: Scalars['Int']['output'];
  status: PrizeAssignmentStatus;
  tournamentResultId: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};


export type PrizeAssignmentPrizeClaimArgs = {
  where?: InputMaybe<PrizeClaimWhereInput>;
};

export type PrizeAssignmentListRelationFilter = {
  every?: InputMaybe<PrizeAssignmentWhereInput>;
  none?: InputMaybe<PrizeAssignmentWhereInput>;
  some?: InputMaybe<PrizeAssignmentWhereInput>;
};

export type PrizeAssignmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PrizeAssignmentOrderByWithRelationInput = {
  Prize?: InputMaybe<PrizeOrderByWithRelationInput>;
  PrizeClaim?: InputMaybe<PrizeClaimOrderByWithRelationInput>;
  TournamentResult?: InputMaybe<TournamentResultOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  prizeClaimId?: InputMaybe<SortOrderInput>;
  prizeId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tournamentResultId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum PrizeAssignmentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  PrizeClaimId = 'prizeClaimId',
  PrizeId = 'prizeId',
  Status = 'status',
  TournamentResultId = 'tournamentResultId',
  Value = 'value'
}

export enum PrizeAssignmentStatus {
  Active = 'ACTIVE',
  Complete = 'COMPLETE',
  Expired = 'EXPIRED',
  Pending = 'PENDING'
}

export type PrizeAssignmentWhereInput = {
  AND?: InputMaybe<Array<PrizeAssignmentWhereInput>>;
  NOT?: InputMaybe<Array<PrizeAssignmentWhereInput>>;
  OR?: InputMaybe<Array<PrizeAssignmentWhereInput>>;
  Prize?: InputMaybe<PrizeRelationFilter>;
  PrizeClaim?: InputMaybe<PrizeClaimNullableRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  prizeClaimId?: InputMaybe<IntNullableFilter>;
  prizeId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPrizeAssignmentStatusFilter>;
  tournamentResultId?: InputMaybe<IntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PrizeAssignmentWhereUniqueInput = {
  AND?: InputMaybe<Array<PrizeAssignmentWhereInput>>;
  NOT?: InputMaybe<Array<PrizeAssignmentWhereInput>>;
  OR?: InputMaybe<Array<PrizeAssignmentWhereInput>>;
  Prize?: InputMaybe<PrizeRelationFilter>;
  PrizeClaim?: InputMaybe<PrizeClaimNullableRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  prizeClaimId?: InputMaybe<IntNullableFilter>;
  prizeId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPrizeAssignmentStatusFilter>;
  tournamentResultId?: InputMaybe<IntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PrizeClaim = {
  __typename?: 'PrizeClaim';
  Owner: Owner;
  PrizeAssignment: Array<PrizeAssignment>;
  Season: Season;
  _count?: Maybe<PrizeClaimCount>;
  claimValue: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAtRealTimestamp?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  merkleRoot?: Maybe<Scalars['String']['output']>;
  ownerId: Scalars['Int']['output'];
  seasonId: Scalars['Int']['output'];
  status: PrizeClaimStatus;
  updatedAt: Scalars['DateTime']['output'];
};


export type PrizeClaimPrizeAssignmentArgs = {
  cursor?: InputMaybe<PrizeAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};

export type PrizeClaimCount = {
  __typename?: 'PrizeClaimCount';
  PrizeAssignment: Scalars['Int']['output'];
};


export type PrizeClaimCountPrizeAssignmentArgs = {
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};

export type PrizeClaimListRelationFilter = {
  every?: InputMaybe<PrizeClaimWhereInput>;
  none?: InputMaybe<PrizeClaimWhereInput>;
  some?: InputMaybe<PrizeClaimWhereInput>;
};

export type PrizeClaimNullableRelationFilter = {
  is?: InputMaybe<PrizeClaimWhereInput>;
  isNot?: InputMaybe<PrizeClaimWhereInput>;
};

export type PrizeClaimOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PrizeClaimOrderByWithRelationInput = {
  Owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentOrderByRelationAggregateInput>;
  Season?: InputMaybe<SeasonOrderByWithRelationInput>;
  claimValue?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAtRealTimestamp?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  merkleRoot?: InputMaybe<SortOrderInput>;
  ownerId?: InputMaybe<SortOrder>;
  seasonId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PrizeClaimOwnerIdSeasonIdContractAddressCompoundUniqueInput = {
  contractAddress: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
  seasonId: Scalars['Int']['input'];
};

export enum PrizeClaimScalarFieldEnum {
  ClaimValue = 'claimValue',
  ContractAddress = 'contractAddress',
  CreatedAt = 'createdAt',
  ExpiresAtRealTimestamp = 'expiresAtRealTimestamp',
  Id = 'id',
  MerkleRoot = 'merkleRoot',
  OwnerId = 'ownerId',
  SeasonId = 'seasonId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum PrizeClaimStatus {
  Claimed = 'CLAIMED',
  Expired = 'EXPIRED',
  Unclaimed = 'UNCLAIMED',
  Uncommitted = 'UNCOMMITTED'
}

export type PrizeClaimWhereInput = {
  AND?: InputMaybe<Array<PrizeClaimWhereInput>>;
  NOT?: InputMaybe<Array<PrizeClaimWhereInput>>;
  OR?: InputMaybe<Array<PrizeClaimWhereInput>>;
  Owner?: InputMaybe<OwnerRelationFilter>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentListRelationFilter>;
  Season?: InputMaybe<SeasonRelationFilter>;
  claimValue?: InputMaybe<StringFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  merkleRoot?: InputMaybe<StringNullableFilter>;
  ownerId?: InputMaybe<IntFilter>;
  seasonId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPrizeClaimStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PrizeClaimWhereUniqueInput = {
  AND?: InputMaybe<Array<PrizeClaimWhereInput>>;
  NOT?: InputMaybe<Array<PrizeClaimWhereInput>>;
  OR?: InputMaybe<Array<PrizeClaimWhereInput>>;
  Owner?: InputMaybe<OwnerRelationFilter>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentListRelationFilter>;
  Season?: InputMaybe<SeasonRelationFilter>;
  claimValue?: InputMaybe<StringFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  merkleRoot?: InputMaybe<StringNullableFilter>;
  ownerId?: InputMaybe<IntFilter>;
  ownerId_seasonId_contractAddress?: InputMaybe<PrizeClaimOwnerIdSeasonIdContractAddressCompoundUniqueInput>;
  seasonId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPrizeClaimStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PrizeCount = {
  __typename?: 'PrizeCount';
  PrizeAssignment: Scalars['Int']['output'];
  values: Scalars['Int']['output'];
};


export type PrizeCountPrizeAssignmentArgs = {
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};


export type PrizeCountValuesArgs = {
  where?: InputMaybe<PrizeValueWhereInput>;
};

export type PrizeInfo = {
  __typename?: 'PrizeInfo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  type: PrizeType;
  value?: Maybe<Scalars['String']['output']>;
};

export type PrizeListRelationFilter = {
  every?: InputMaybe<PrizeWhereInput>;
  none?: InputMaybe<PrizeWhereInput>;
  some?: InputMaybe<PrizeWhereInput>;
};

export type PrizeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PrizeOrderByWithRelationInput = {
  PrizeAssignment?: InputMaybe<PrizeAssignmentOrderByRelationAggregateInput>;
  assignedAt?: InputMaybe<SortOrderInput>;
  contractAddress?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  distributionType?: InputMaybe<SortOrderInput>;
  division?: InputMaybe<DivisionOrderByWithRelationInput>;
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SeasonOrderByWithRelationInput>;
  seasonId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  values?: InputMaybe<PrizeValueOrderByRelationAggregateInput>;
};

export type PrizeRelationFilter = {
  is?: InputMaybe<PrizeWhereInput>;
  isNot?: InputMaybe<PrizeWhereInput>;
};

export enum PrizeScalarFieldEnum {
  AssignedAt = 'assignedAt',
  ContractAddress = 'contractAddress',
  Description = 'description',
  DistributionType = 'distributionType',
  DivisionId = 'divisionId',
  Id = 'id',
  SeasonId = 'seasonId',
  Type = 'type'
}

export type PrizeStructure = {
  __typename?: 'PrizeStructure';
  competitionStructure: Array<Scalars['String']['output']>;
  entryStructure: Array<EntryStructureType>;
  prize: PrizeInfo;
};

export enum PrizeType {
  EthToken = 'ETH_TOKEN'
}

export type PrizeValue = {
  __typename?: 'PrizeValue';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  prize: Prize;
  prizeId: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type PrizeValueListRelationFilter = {
  every?: InputMaybe<PrizeValueWhereInput>;
  none?: InputMaybe<PrizeValueWhereInput>;
  some?: InputMaybe<PrizeValueWhereInput>;
};

export type PrizeValueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PrizeValueOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  prize?: InputMaybe<PrizeOrderByWithRelationInput>;
  prizeId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum PrizeValueScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  PrizeId = 'prizeId',
  Value = 'value'
}

export type PrizeValueWhereInput = {
  AND?: InputMaybe<Array<PrizeValueWhereInput>>;
  NOT?: InputMaybe<Array<PrizeValueWhereInput>>;
  OR?: InputMaybe<Array<PrizeValueWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  prize?: InputMaybe<PrizeRelationFilter>;
  prizeId?: InputMaybe<IntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PrizeValueWhereUniqueInput = {
  AND?: InputMaybe<Array<PrizeValueWhereInput>>;
  NOT?: InputMaybe<Array<PrizeValueWhereInput>>;
  OR?: InputMaybe<Array<PrizeValueWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  prize?: InputMaybe<PrizeRelationFilter>;
  prizeId?: InputMaybe<IntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PrizeWhereInput = {
  AND?: InputMaybe<Array<PrizeWhereInput>>;
  NOT?: InputMaybe<Array<PrizeWhereInput>>;
  OR?: InputMaybe<Array<PrizeWhereInput>>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentListRelationFilter>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  contractAddress?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  distributionType?: InputMaybe<StringNullableFilter>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumPrizeTypeFilter>;
  values?: InputMaybe<PrizeValueListRelationFilter>;
};

export type PrizeWhereUniqueInput = {
  AND?: InputMaybe<Array<PrizeWhereInput>>;
  NOT?: InputMaybe<Array<PrizeWhereInput>>;
  OR?: InputMaybe<Array<PrizeWhereInput>>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentListRelationFilter>;
  assignedAt?: InputMaybe<DateTimeNullableFilter>;
  contractAddress?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  distributionType?: InputMaybe<StringNullableFilter>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumPrizeTypeFilter>;
  values?: InputMaybe<PrizeValueListRelationFilter>;
};

export type PromotionSelector = {
  __typename?: 'PromotionSelector';
  competitionFrom: Competition;
  competitionIdFrom: Scalars['Int']['output'];
  competitionIdTo: Scalars['Int']['output'];
  end: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  start: Scalars['JSON']['output'];
  type: Scalars['String']['output'];
};

export type PromotionSelectorListRelationFilter = {
  every?: InputMaybe<PromotionSelectorWhereInput>;
  none?: InputMaybe<PromotionSelectorWhereInput>;
  some?: InputMaybe<PromotionSelectorWhereInput>;
};

export type PromotionSelectorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PromotionSelectorOrderByWithRelationInput = {
  competitionFrom?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum PromotionSelectorScalarFieldEnum {
  CompetitionIdFrom = 'competitionIdFrom',
  CompetitionIdTo = 'competitionIdTo',
  End = 'end',
  Id = 'id',
  Start = 'start',
  Type = 'type'
}

export type PromotionSelectorWhereInput = {
  AND?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  NOT?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  OR?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  competitionFrom?: InputMaybe<CompetitionRelationFilter>;
  competitionIdFrom?: InputMaybe<IntFilter>;
  competitionIdTo?: InputMaybe<IntFilter>;
  end?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  start?: InputMaybe<JsonFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PromotionSelectorWhereUniqueInput = {
  AND?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  NOT?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  OR?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  competitionFrom?: InputMaybe<CompetitionRelationFilter>;
  competitionIdFrom?: InputMaybe<IntFilter>;
  competitionIdTo?: InputMaybe<IntFilter>;
  end?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<JsonFilter>;
  type?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  academyMerkleRoot: Scalars['String']['output'];
  academyMerkleRootToCommit: Scalars['String']['output'];
  academyPlayerMerkleProof: Array<Scalars['String']['output']>;
  actions: Array<Action>;
  aggregateFixture: AggregateFixture;
  allClubsBasicInfo: Array<BasicClubInfo>;
  availableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  availableHomeGameTimes: Array<AvailableHomeGameTime>;
  club?: Maybe<Club>;
  clubBadge?: Maybe<ClubBadge>;
  clubBadges: Array<ClubBadge>;
  clubFixture?: Maybe<ClubFixture>;
  clubFixtures: Array<ClubFixture>;
  clubTournament?: Maybe<ClubTournament>;
  clubs: Array<Club>;
  competition?: Maybe<Competition>;
  competitions: Array<Competition>;
  customRegistrationWindows: Array<CustomRegistrationWindow>;
  division?: Maybe<Division>;
  divisions: Array<Division>;
  ethereumEvents: Array<EthereumEvent>;
  findFirstAvailableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  findFirstAvailableHomeGameTimeOrThrow?: Maybe<AvailableHomeGameTime>;
  findFirstClub?: Maybe<Club>;
  findFirstClubBadge?: Maybe<ClubBadge>;
  findFirstClubBadgeOrThrow?: Maybe<ClubBadge>;
  findFirstClubFixture?: Maybe<ClubFixture>;
  findFirstClubFixtureOrThrow?: Maybe<ClubFixture>;
  findFirstClubOrThrow?: Maybe<Club>;
  findFirstClubStats?: Maybe<ClubStats>;
  findFirstClubStatsOrThrow?: Maybe<ClubStats>;
  findFirstClubTournament?: Maybe<ClubTournament>;
  findFirstClubTournamentOrThrow?: Maybe<ClubTournament>;
  findFirstCompetition?: Maybe<Competition>;
  findFirstCompetitionOrThrow?: Maybe<Competition>;
  findFirstCompetitionPlayerStats?: Maybe<CompetitionPlayerStats>;
  findFirstCompetitionPlayerStatsOrThrow?: Maybe<CompetitionPlayerStats>;
  findFirstDivision?: Maybe<Division>;
  findFirstDivisionOrThrow?: Maybe<Division>;
  findFirstFixture?: Maybe<Fixture>;
  findFirstFixtureOrThrow?: Maybe<Fixture>;
  findFirstFormation?: Maybe<Formation>;
  findFirstFormationOrThrow?: Maybe<Formation>;
  findFirstFormationSlot?: Maybe<FormationSlot>;
  findFirstFormationSlotOrThrow?: Maybe<FormationSlot>;
  findFirstKit?: Maybe<Kit>;
  findFirstKitOrThrow?: Maybe<Kit>;
  findFirstLineup?: Maybe<Lineup>;
  findFirstLineupOrThrow?: Maybe<Lineup>;
  findFirstMatch?: Maybe<Match>;
  findFirstMatchChange?: Maybe<MatchChange>;
  findFirstMatchChangeOrThrow?: Maybe<MatchChange>;
  findFirstMatchConfiguration?: Maybe<MatchConfiguration>;
  findFirstMatchConfigurationOrThrow?: Maybe<MatchConfiguration>;
  findFirstMatchOrThrow?: Maybe<Match>;
  findFirstMerkleRoot?: Maybe<MerkleRoot>;
  findFirstMerkleRootOrThrow?: Maybe<MerkleRoot>;
  findFirstMetadata?: Maybe<Metadata>;
  findFirstMetadataOrThrow?: Maybe<Metadata>;
  findFirstOwner?: Maybe<Owner>;
  findFirstOwnerOrThrow?: Maybe<Owner>;
  findFirstPlayer?: Maybe<Player>;
  findFirstPlayerAttributes?: Maybe<PlayerAttributes>;
  findFirstPlayerAttributesOrThrow?: Maybe<PlayerAttributes>;
  findFirstPlayerLineup?: Maybe<PlayerLineup>;
  findFirstPlayerLineupOrThrow?: Maybe<PlayerLineup>;
  findFirstPlayerOrThrow?: Maybe<Player>;
  findFirstPlayerRegistration?: Maybe<PlayerRegistration>;
  findFirstPlayerRegistrationOrThrow?: Maybe<PlayerRegistration>;
  findFirstPlayerStatsRecord?: Maybe<PlayerStatsRecord>;
  findFirstPlayerStatsRecordOrThrow?: Maybe<PlayerStatsRecord>;
  findFirstPositionalRating?: Maybe<PositionalRating>;
  findFirstPositionalRatingOrThrow?: Maybe<PositionalRating>;
  findFirstPrize?: Maybe<Prize>;
  findFirstPrizeAssignment?: Maybe<PrizeAssignment>;
  findFirstPrizeAssignmentOrThrow?: Maybe<PrizeAssignment>;
  findFirstPrizeClaim?: Maybe<PrizeClaim>;
  findFirstPromotionSelector?: Maybe<PromotionSelector>;
  findFirstPromotionSelectorOrThrow?: Maybe<PromotionSelector>;
  findFirstRegistrationWindow?: Maybe<RegistrationWindow>;
  findFirstRegistrationWindowOrThrow?: Maybe<RegistrationWindow>;
  findFirstSeason?: Maybe<Season>;
  findFirstSeasonOrThrow?: Maybe<Season>;
  findFirstStadium?: Maybe<Stadium>;
  findFirstStadiumOrThrow?: Maybe<Stadium>;
  findFirstStadiumStand?: Maybe<StadiumStand>;
  findFirstStadiumStandOrThrow?: Maybe<StadiumStand>;
  findFirstTactics?: Maybe<Tactics>;
  findFirstTacticsOrThrow?: Maybe<Tactics>;
  findFirstTournament?: Maybe<Tournament>;
  findFirstTournamentOrThrow?: Maybe<Tournament>;
  findFirstTournamentPlayerStats?: Maybe<TournamentPlayerStats>;
  findFirstTournamentPlayerStatsOrThrow?: Maybe<TournamentPlayerStats>;
  findFirstTournamentResult?: Maybe<TournamentResult>;
  findFirstTournamentResultOrThrow?: Maybe<TournamentResult>;
  findFirstTrainingSlot?: Maybe<TrainingSlot>;
  findFirstTrainingSlotOrThrow?: Maybe<TrainingSlot>;
  findUniqueClubStats?: Maybe<ClubStats>;
  findUniqueClubStatsOrThrow?: Maybe<ClubStats>;
  findUniqueCompetitionPlayerStats?: Maybe<CompetitionPlayerStats>;
  findUniqueCompetitionPlayerStatsOrThrow?: Maybe<CompetitionPlayerStats>;
  findUniqueMetadata?: Maybe<Metadata>;
  findUniqueMetadataOrThrow?: Maybe<Metadata>;
  findUniquePlayerAttributes?: Maybe<PlayerAttributes>;
  findUniquePlayerAttributesOrThrow?: Maybe<PlayerAttributes>;
  findUniqueTactics?: Maybe<Tactics>;
  findUniqueTacticsOrThrow?: Maybe<Tactics>;
  findUniqueTournamentPlayerStats?: Maybe<TournamentPlayerStats>;
  findUniqueTournamentPlayerStatsOrThrow?: Maybe<TournamentPlayerStats>;
  fixture?: Maybe<Fixture>;
  fixtures: Array<Fixture>;
  formation?: Maybe<Formation>;
  formationSlot?: Maybe<FormationSlot>;
  formationSlots: Array<FormationSlot>;
  formations: Array<Formation>;
  gameState: GameState;
  getAvailableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  getClub?: Maybe<Club>;
  getClubBadge?: Maybe<ClubBadge>;
  getClubFixture?: Maybe<ClubFixture>;
  getClubTournament?: Maybe<ClubTournament>;
  getCompetition?: Maybe<Competition>;
  getConfigValues?: Maybe<Array<ConfigValueOutput>>;
  getDivision?: Maybe<Division>;
  getFixture?: Maybe<Fixture>;
  getFormation?: Maybe<Formation>;
  getFormationSlot?: Maybe<FormationSlot>;
  getKit?: Maybe<Kit>;
  getLineup?: Maybe<Lineup>;
  getMatch?: Maybe<Match>;
  getMatchChange?: Maybe<MatchChange>;
  getMatchConfiguration?: Maybe<MatchConfiguration>;
  getMerkleRoot?: Maybe<MerkleRoot>;
  getOwner?: Maybe<Owner>;
  getPlayer?: Maybe<Player>;
  getPlayerLineup?: Maybe<PlayerLineup>;
  getPlayerRegistration?: Maybe<PlayerRegistration>;
  getPlayerStatsRecord?: Maybe<PlayerStatsRecord>;
  getPositionalRating?: Maybe<PositionalRating>;
  getPrizeAssignment?: Maybe<PrizeAssignment>;
  getPromotionSelector?: Maybe<PromotionSelector>;
  getRegistrationWindow?: Maybe<RegistrationWindow>;
  getSeason?: Maybe<Season>;
  getStadium?: Maybe<Stadium>;
  getStadiumStand?: Maybe<StadiumStand>;
  getTournament?: Maybe<Tournament>;
  getTournamentResult?: Maybe<TournamentResult>;
  getTrainingSlot?: Maybe<TrainingSlot>;
  kit?: Maybe<Kit>;
  kits: Array<Kit>;
  leaguePromotionRelegation: LeaguePromotionRelegation;
  lineup?: Maybe<Lineup>;
  lineups: Array<Lineup>;
  match?: Maybe<Match>;
  matchChange?: Maybe<MatchChange>;
  matchChanges: Array<MatchChange>;
  matchConfiguration?: Maybe<MatchConfiguration>;
  matchConfigurations: Array<MatchConfiguration>;
  merkleRoot?: Maybe<MerkleRoot>;
  merkleRoots: Array<MerkleRoot>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  player?: Maybe<Player>;
  playerLineup?: Maybe<PlayerLineup>;
  playerLineups: Array<PlayerLineup>;
  playerRegistration?: Maybe<PlayerRegistration>;
  playerRegistrations: Array<PlayerRegistration>;
  playerStatsRecord?: Maybe<PlayerStatsRecord>;
  playerStatsRecords: Array<PlayerStatsRecord>;
  players: Array<Player>;
  positionalRating?: Maybe<PositionalRating>;
  positionalRatings: Array<PositionalRating>;
  prize?: Maybe<Prize>;
  prizeAssignment?: Maybe<PrizeAssignment>;
  prizeAssignments: Array<PrizeAssignment>;
  prizeClaim?: Maybe<PrizeClaim>;
  prizeClaimMerkleProof: Array<Scalars['String']['output']>;
  prizeClaimMerkleRoot: Scalars['String']['output'];
  prizeClaimMerkleRootToCommit: Scalars['String']['output'];
  prizeClaims: Array<PrizeClaim>;
  prizeValue?: Maybe<PrizeValue>;
  prizeValues: Array<PrizeValue>;
  prizes: Array<Prize>;
  promotionSelector?: Maybe<PromotionSelector>;
  promotionSelectors: Array<PromotionSelector>;
  registrationWindow?: Maybe<RegistrationWindow>;
  registrationWindows: Array<RegistrationWindow>;
  season?: Maybe<Season>;
  seasons: Array<Season>;
  serverMetadata: ServerMetadata;
  stadium?: Maybe<Stadium>;
  stadiumStand?: Maybe<StadiumStand>;
  stadiumStands: Array<StadiumStand>;
  stadiums: Array<Stadium>;
  structuredPrizes: Array<PrizeStructure>;
  totalClaimValue: Scalars['String']['output'];
  tournament?: Maybe<Tournament>;
  tournamentResult?: Maybe<TournamentResult>;
  tournamentResults: Array<TournamentResult>;
  tournaments: Array<Tournament>;
  trainingSlot?: Maybe<TrainingSlot>;
  trainingSlots: Array<TrainingSlot>;
};


export type QueryAcademyPlayerMerkleProofArgs = {
  playerId: Scalars['String']['input'];
};


export type QueryActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryAggregateFixtureArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryAllClubsBasicInfoArgs = {
  ownerAddress: Scalars['String']['input'];
};


export type QueryAvailableHomeGameTimeArgs = {
  where: AvailableHomeGameTimeWhereUniqueInput;
};


export type QueryAvailableHomeGameTimesArgs = {
  cursor?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AvailableHomeGameTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryClubArgs = {
  where: ClubWhereUniqueInput;
};


export type QueryClubBadgeArgs = {
  where: ClubBadgeWhereUniqueInput;
};


export type QueryClubBadgesArgs = {
  cursor?: InputMaybe<ClubBadgeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBadgeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryClubFixtureArgs = {
  where: ClubFixtureWhereUniqueInput;
};


export type QueryClubFixturesArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryClubTournamentArgs = {
  where: ClubTournamentWhereUniqueInput;
};


export type QueryClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryCompetitionArgs = {
  where: CompetitionWhereUniqueInput;
};


export type QueryCompetitionsArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryDivisionArgs = {
  where: DivisionWhereUniqueInput;
};


export type QueryDivisionsArgs = {
  cursor?: InputMaybe<DivisionWhereUniqueInput>;
  distinct?: InputMaybe<Array<DivisionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryEthereumEventsArgs = {
  cursor?: InputMaybe<EthereumEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EthereumEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EthereumEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type QueryFindFirstAvailableHomeGameTimeArgs = {
  cursor?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AvailableHomeGameTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryFindFirstAvailableHomeGameTimeOrThrowArgs = {
  cursor?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AvailableHomeGameTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryFindFirstClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryFindFirstClubBadgeArgs = {
  cursor?: InputMaybe<ClubBadgeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBadgeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryFindFirstClubBadgeOrThrowArgs = {
  cursor?: InputMaybe<ClubBadgeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBadgeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryFindFirstClubFixtureArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryFindFirstClubFixtureOrThrowArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryFindFirstClubOrThrowArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryFindFirstClubStatsArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type QueryFindFirstClubStatsOrThrowArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type QueryFindFirstClubTournamentArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type QueryFindFirstClubTournamentOrThrowArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type QueryFindFirstCompetitionArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryFindFirstCompetitionOrThrowArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryFindFirstCompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type QueryFindFirstCompetitionPlayerStatsOrThrowArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type QueryFindFirstDivisionArgs = {
  cursor?: InputMaybe<DivisionWhereUniqueInput>;
  distinct?: InputMaybe<Array<DivisionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryFindFirstDivisionOrThrowArgs = {
  cursor?: InputMaybe<DivisionWhereUniqueInput>;
  distinct?: InputMaybe<Array<DivisionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryFindFirstFixtureArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryFindFirstFixtureOrThrowArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryFindFirstFormationArgs = {
  cursor?: InputMaybe<FormationWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryFindFirstFormationOrThrowArgs = {
  cursor?: InputMaybe<FormationWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryFindFirstFormationSlotArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryFindFirstFormationSlotOrThrowArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryFindFirstKitArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryFindFirstKitOrThrowArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryFindFirstLineupArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryFindFirstLineupOrThrowArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryFindFirstMatchArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryFindFirstMatchChangeArgs = {
  cursor?: InputMaybe<MatchChangeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchChangeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchChangeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchChangeWhereInput>;
};


export type QueryFindFirstMatchChangeOrThrowArgs = {
  cursor?: InputMaybe<MatchChangeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchChangeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchChangeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchChangeWhereInput>;
};


export type QueryFindFirstMatchConfigurationArgs = {
  cursor?: InputMaybe<MatchConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchConfigurationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchConfigurationWhereInput>;
};


export type QueryFindFirstMatchConfigurationOrThrowArgs = {
  cursor?: InputMaybe<MatchConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchConfigurationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchConfigurationWhereInput>;
};


export type QueryFindFirstMatchOrThrowArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryFindFirstMerkleRootArgs = {
  cursor?: InputMaybe<MerkleRootWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerkleRootScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryFindFirstMerkleRootOrThrowArgs = {
  cursor?: InputMaybe<MerkleRootWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerkleRootScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryFindFirstMetadataArgs = {
  cursor?: InputMaybe<MetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<MetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetadataWhereInput>;
};


export type QueryFindFirstMetadataOrThrowArgs = {
  cursor?: InputMaybe<MetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<MetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetadataWhereInput>;
};


export type QueryFindFirstOwnerArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryFindFirstOwnerOrThrowArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryFindFirstPlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryFindFirstPlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type QueryFindFirstPlayerAttributesOrThrowArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type QueryFindFirstPlayerLineupArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryFindFirstPlayerLineupOrThrowArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryFindFirstPlayerOrThrowArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryFindFirstPlayerRegistrationArgs = {
  cursor?: InputMaybe<PlayerRegistrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerRegistrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerRegistrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};


export type QueryFindFirstPlayerRegistrationOrThrowArgs = {
  cursor?: InputMaybe<PlayerRegistrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerRegistrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerRegistrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};


export type QueryFindFirstPlayerStatsRecordArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerStatsRecordScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryFindFirstPlayerStatsRecordOrThrowArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerStatsRecordScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryFindFirstPositionalRatingArgs = {
  cursor?: InputMaybe<PositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PositionalRatingWhereInput>;
};


export type QueryFindFirstPositionalRatingOrThrowArgs = {
  cursor?: InputMaybe<PositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PositionalRatingWhereInput>;
};


export type QueryFindFirstPrizeArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type QueryFindFirstPrizeAssignmentArgs = {
  cursor?: InputMaybe<PrizeAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};


export type QueryFindFirstPrizeAssignmentOrThrowArgs = {
  cursor?: InputMaybe<PrizeAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};


export type QueryFindFirstPrizeClaimArgs = {
  cursor?: InputMaybe<PrizeClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeClaimWhereInput>;
};


export type QueryFindFirstPromotionSelectorArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QueryFindFirstPromotionSelectorOrThrowArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QueryFindFirstRegistrationWindowArgs = {
  cursor?: InputMaybe<RegistrationWindowWhereUniqueInput>;
  distinct?: InputMaybe<Array<RegistrationWindowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RegistrationWindowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RegistrationWindowWhereInput>;
};


export type QueryFindFirstRegistrationWindowOrThrowArgs = {
  cursor?: InputMaybe<RegistrationWindowWhereUniqueInput>;
  distinct?: InputMaybe<Array<RegistrationWindowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RegistrationWindowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RegistrationWindowWhereInput>;
};


export type QueryFindFirstSeasonArgs = {
  cursor?: InputMaybe<SeasonWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryFindFirstSeasonOrThrowArgs = {
  cursor?: InputMaybe<SeasonWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryFindFirstStadiumArgs = {
  cursor?: InputMaybe<StadiumWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryFindFirstStadiumOrThrowArgs = {
  cursor?: InputMaybe<StadiumWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryFindFirstStadiumStandArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryFindFirstStadiumStandOrThrowArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryFindFirstTacticsArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TacticsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TacticsWhereInput>;
};


export type QueryFindFirstTacticsOrThrowArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TacticsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TacticsWhereInput>;
};


export type QueryFindFirstTournamentArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryFindFirstTournamentOrThrowArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryFindFirstTournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type QueryFindFirstTournamentPlayerStatsOrThrowArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type QueryFindFirstTournamentResultArgs = {
  cursor?: InputMaybe<TournamentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type QueryFindFirstTournamentResultOrThrowArgs = {
  cursor?: InputMaybe<TournamentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type QueryFindFirstTrainingSlotArgs = {
  cursor?: InputMaybe<TrainingSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TrainingSlotWhereInput>;
};


export type QueryFindFirstTrainingSlotOrThrowArgs = {
  cursor?: InputMaybe<TrainingSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TrainingSlotWhereInput>;
};


export type QueryFindUniqueClubStatsArgs = {
  where: ClubStatsWhereUniqueInput;
};


export type QueryFindUniqueClubStatsOrThrowArgs = {
  where: ClubStatsWhereUniqueInput;
};


export type QueryFindUniqueCompetitionPlayerStatsArgs = {
  where: CompetitionPlayerStatsWhereUniqueInput;
};


export type QueryFindUniqueCompetitionPlayerStatsOrThrowArgs = {
  where: CompetitionPlayerStatsWhereUniqueInput;
};


export type QueryFindUniqueMetadataArgs = {
  where: MetadataWhereUniqueInput;
};


export type QueryFindUniqueMetadataOrThrowArgs = {
  where: MetadataWhereUniqueInput;
};


export type QueryFindUniquePlayerAttributesArgs = {
  where: PlayerAttributesWhereUniqueInput;
};


export type QueryFindUniquePlayerAttributesOrThrowArgs = {
  where: PlayerAttributesWhereUniqueInput;
};


export type QueryFindUniqueTacticsArgs = {
  where: TacticsWhereUniqueInput;
};


export type QueryFindUniqueTacticsOrThrowArgs = {
  where: TacticsWhereUniqueInput;
};


export type QueryFindUniqueTournamentPlayerStatsArgs = {
  where: TournamentPlayerStatsWhereUniqueInput;
};


export type QueryFindUniqueTournamentPlayerStatsOrThrowArgs = {
  where: TournamentPlayerStatsWhereUniqueInput;
};


export type QueryFixtureArgs = {
  where: FixtureWhereUniqueInput;
};


export type QueryFixturesArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type QueryFormationSlotArgs = {
  where: FormationSlotWhereUniqueInput;
};


export type QueryFormationSlotsArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryFormationsArgs = {
  cursor?: InputMaybe<FormationWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryGetAvailableHomeGameTimeArgs = {
  where: AvailableHomeGameTimeWhereUniqueInput;
};


export type QueryGetClubArgs = {
  where: ClubWhereUniqueInput;
};


export type QueryGetClubBadgeArgs = {
  where: ClubBadgeWhereUniqueInput;
};


export type QueryGetClubFixtureArgs = {
  where: ClubFixtureWhereUniqueInput;
};


export type QueryGetClubTournamentArgs = {
  where: ClubTournamentWhereUniqueInput;
};


export type QueryGetCompetitionArgs = {
  where: CompetitionWhereUniqueInput;
};


export type QueryGetConfigValuesArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type QueryGetDivisionArgs = {
  where: DivisionWhereUniqueInput;
};


export type QueryGetFixtureArgs = {
  where: FixtureWhereUniqueInput;
};


export type QueryGetFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type QueryGetFormationSlotArgs = {
  where: FormationSlotWhereUniqueInput;
};


export type QueryGetKitArgs = {
  where: KitWhereUniqueInput;
};


export type QueryGetLineupArgs = {
  where: LineupWhereUniqueInput;
};


export type QueryGetMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type QueryGetMatchChangeArgs = {
  where: MatchChangeWhereUniqueInput;
};


export type QueryGetMatchConfigurationArgs = {
  where: MatchConfigurationWhereUniqueInput;
};


export type QueryGetMerkleRootArgs = {
  where: MerkleRootWhereUniqueInput;
};


export type QueryGetOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type QueryGetPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryGetPlayerLineupArgs = {
  where: PlayerLineupWhereUniqueInput;
};


export type QueryGetPlayerRegistrationArgs = {
  where: PlayerRegistrationWhereUniqueInput;
};


export type QueryGetPlayerStatsRecordArgs = {
  where: PlayerStatsRecordWhereUniqueInput;
};


export type QueryGetPositionalRatingArgs = {
  where: PositionalRatingWhereUniqueInput;
};


export type QueryGetPrizeAssignmentArgs = {
  where: PrizeAssignmentWhereUniqueInput;
};


export type QueryGetPromotionSelectorArgs = {
  where: PromotionSelectorWhereUniqueInput;
};


export type QueryGetRegistrationWindowArgs = {
  where: RegistrationWindowWhereUniqueInput;
};


export type QueryGetSeasonArgs = {
  where: SeasonWhereUniqueInput;
};


export type QueryGetStadiumArgs = {
  where: StadiumWhereUniqueInput;
};


export type QueryGetStadiumStandArgs = {
  where: StadiumStandWhereUniqueInput;
};


export type QueryGetTournamentArgs = {
  where: TournamentWhereUniqueInput;
};


export type QueryGetTournamentResultArgs = {
  where: TournamentResultWhereUniqueInput;
};


export type QueryGetTrainingSlotArgs = {
  where: TrainingSlotWhereUniqueInput;
};


export type QueryKitArgs = {
  where: KitWhereUniqueInput;
};


export type QueryKitsArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryLineupArgs = {
  where: LineupWhereUniqueInput;
};


export type QueryLineupsArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type QueryMatchChangeArgs = {
  where: MatchChangeWhereUniqueInput;
};


export type QueryMatchChangesArgs = {
  cursor?: InputMaybe<MatchChangeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchChangeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchChangeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchChangeWhereInput>;
};


export type QueryMatchConfigurationArgs = {
  where: MatchConfigurationWhereUniqueInput;
};


export type QueryMatchConfigurationsArgs = {
  cursor?: InputMaybe<MatchConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchConfigurationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MatchConfigurationWhereInput>;
};


export type QueryMerkleRootArgs = {
  where: MerkleRootWhereUniqueInput;
};


export type QueryMerkleRootsArgs = {
  cursor?: InputMaybe<MerkleRootWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerkleRootScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type QueryOwnersArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryPlayerLineupArgs = {
  where: PlayerLineupWhereUniqueInput;
};


export type QueryPlayerLineupsArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryPlayerRegistrationArgs = {
  where: PlayerRegistrationWhereUniqueInput;
};


export type QueryPlayerRegistrationsArgs = {
  cursor?: InputMaybe<PlayerRegistrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerRegistrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerRegistrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};


export type QueryPlayerStatsRecordArgs = {
  where: PlayerStatsRecordWhereUniqueInput;
};


export type QueryPlayerStatsRecordsArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerStatsRecordScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryPositionalRatingArgs = {
  where: PositionalRatingWhereUniqueInput;
};


export type QueryPositionalRatingsArgs = {
  cursor?: InputMaybe<PositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PositionalRatingWhereInput>;
};


export type QueryPrizeArgs = {
  where: PrizeWhereUniqueInput;
};


export type QueryPrizeAssignmentArgs = {
  where: PrizeAssignmentWhereUniqueInput;
};


export type QueryPrizeAssignmentsArgs = {
  cursor?: InputMaybe<PrizeAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};


export type QueryPrizeClaimArgs = {
  where: PrizeClaimWhereUniqueInput;
};


export type QueryPrizeClaimMerkleProofArgs = {
  prizeClaimId: Scalars['Float']['input'];
};


export type QueryPrizeClaimMerkleRootArgs = {
  contractAddress: Scalars['String']['input'];
};


export type QueryPrizeClaimMerkleRootToCommitArgs = {
  contractAddress: Scalars['String']['input'];
  regenerate?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPrizeClaimsArgs = {
  cursor?: InputMaybe<PrizeClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeClaimWhereInput>;
};


export type QueryPrizeValueArgs = {
  where: PrizeValueWhereUniqueInput;
};


export type QueryPrizeValuesArgs = {
  cursor?: InputMaybe<PrizeValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeValueWhereInput>;
};


export type QueryPrizesArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type QueryPromotionSelectorArgs = {
  where: PromotionSelectorWhereUniqueInput;
};


export type QueryPromotionSelectorsArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QueryRegistrationWindowArgs = {
  where: RegistrationWindowWhereUniqueInput;
};


export type QueryRegistrationWindowsArgs = {
  cursor?: InputMaybe<RegistrationWindowWhereUniqueInput>;
  distinct?: InputMaybe<Array<RegistrationWindowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RegistrationWindowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RegistrationWindowWhereInput>;
};


export type QuerySeasonArgs = {
  where: SeasonWhereUniqueInput;
};


export type QuerySeasonsArgs = {
  cursor?: InputMaybe<SeasonWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryStadiumArgs = {
  where: StadiumWhereUniqueInput;
};


export type QueryStadiumStandArgs = {
  where: StadiumStandWhereUniqueInput;
};


export type QueryStadiumStandsArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryStadiumsArgs = {
  cursor?: InputMaybe<StadiumWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryStructuredPrizesArgs = {
  competitionName: Scalars['String']['input'];
  seasonId: Scalars['Float']['input'];
};


export type QueryTotalClaimValueArgs = {
  contractAddress: Scalars['String']['input'];
  ownerId: Scalars['Float']['input'];
};


export type QueryTournamentArgs = {
  where: TournamentWhereUniqueInput;
};


export type QueryTournamentResultArgs = {
  where: TournamentResultWhereUniqueInput;
};


export type QueryTournamentResultsArgs = {
  cursor?: InputMaybe<TournamentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type QueryTournamentsArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryTrainingSlotArgs = {
  where: TrainingSlotWhereUniqueInput;
};


export type QueryTrainingSlotsArgs = {
  cursor?: InputMaybe<TrainingSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TrainingSlotWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegistrationWindow = {
  __typename?: 'RegistrationWindow';
  PlayerRegistration: Array<PlayerRegistration>;
  _count?: Maybe<RegistrationWindowCount>;
  closingTimestamp?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  openingTimestamp: Scalars['Float']['output'];
  season: Season;
  seasonId: Scalars['Int']['output'];
  unregistrationsAllowed?: Maybe<Scalars['Int']['output']>;
};


export type RegistrationWindowPlayerRegistrationArgs = {
  cursor?: InputMaybe<PlayerRegistrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerRegistrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerRegistrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};

export type RegistrationWindowCount = {
  __typename?: 'RegistrationWindowCount';
  PlayerRegistration: Scalars['Int']['output'];
};


export type RegistrationWindowCountPlayerRegistrationArgs = {
  where?: InputMaybe<PlayerRegistrationWhereInput>;
};

export type RegistrationWindowListRelationFilter = {
  every?: InputMaybe<RegistrationWindowWhereInput>;
  none?: InputMaybe<RegistrationWindowWhereInput>;
  some?: InputMaybe<RegistrationWindowWhereInput>;
};

export type RegistrationWindowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RegistrationWindowOrderByWithRelationInput = {
  PlayerRegistration?: InputMaybe<PlayerRegistrationOrderByRelationAggregateInput>;
  closingTimestamp?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  openingTimestamp?: InputMaybe<SortOrder>;
  season?: InputMaybe<SeasonOrderByWithRelationInput>;
  seasonId?: InputMaybe<SortOrder>;
  unregistrationsAllowed?: InputMaybe<SortOrderInput>;
};

export type RegistrationWindowRelationFilter = {
  is?: InputMaybe<RegistrationWindowWhereInput>;
  isNot?: InputMaybe<RegistrationWindowWhereInput>;
};

export enum RegistrationWindowScalarFieldEnum {
  ClosingTimestamp = 'closingTimestamp',
  Id = 'id',
  OpeningTimestamp = 'openingTimestamp',
  SeasonId = 'seasonId',
  UnregistrationsAllowed = 'unregistrationsAllowed'
}

export type RegistrationWindowWhereInput = {
  AND?: InputMaybe<Array<RegistrationWindowWhereInput>>;
  NOT?: InputMaybe<Array<RegistrationWindowWhereInput>>;
  OR?: InputMaybe<Array<RegistrationWindowWhereInput>>;
  PlayerRegistration?: InputMaybe<PlayerRegistrationListRelationFilter>;
  closingTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  openingTimestamp?: InputMaybe<FloatFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  unregistrationsAllowed?: InputMaybe<IntNullableFilter>;
};

export type RegistrationWindowWhereUniqueInput = {
  AND?: InputMaybe<Array<RegistrationWindowWhereInput>>;
  NOT?: InputMaybe<Array<RegistrationWindowWhereInput>>;
  OR?: InputMaybe<Array<RegistrationWindowWhereInput>>;
  PlayerRegistration?: InputMaybe<PlayerRegistrationListRelationFilter>;
  closingTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  openingTimestamp?: InputMaybe<FloatFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  unregistrationsAllowed?: InputMaybe<IntNullableFilter>;
};

export type Season = {
  __typename?: 'Season';
  _count?: Maybe<SeasonCount>;
  academyExpireAtRealTimestamp?: Maybe<Scalars['Float']['output']>;
  endTimestamp?: Maybe<Scalars['Float']['output']>;
  fixtureScheduleRealTimestamp?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  numTeamsPromoted: Scalars['Int']['output'];
  preSeasonStartedAt?: Maybe<Scalars['Float']['output']>;
  startTimestamp?: Maybe<Scalars['Float']['output']>;
  state: SeasonState;
  tournamentCompleteAtRealTimestamp?: Maybe<Scalars['Float']['output']>;
};

export type SeasonCount = {
  __typename?: 'SeasonCount';
  PlayerAttributes: Scalars['Int']['output'];
  Prize: Scalars['Int']['output'];
  PrizeClaim: Scalars['Int']['output'];
  RegistrationWindow: Scalars['Int']['output'];
  TournamentResult: Scalars['Int']['output'];
  players: Scalars['Int']['output'];
  tournaments: Scalars['Int']['output'];
};


export type SeasonCountPlayerAttributesArgs = {
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type SeasonCountPrizeArgs = {
  where?: InputMaybe<PrizeWhereInput>;
};


export type SeasonCountPrizeClaimArgs = {
  where?: InputMaybe<PrizeClaimWhereInput>;
};


export type SeasonCountRegistrationWindowArgs = {
  where?: InputMaybe<RegistrationWindowWhereInput>;
};


export type SeasonCountTournamentResultArgs = {
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type SeasonCountPlayersArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type SeasonCountTournamentsArgs = {
  where?: InputMaybe<TournamentWhereInput>;
};

export type SeasonNullableRelationFilter = {
  is?: InputMaybe<SeasonWhereInput>;
  isNot?: InputMaybe<SeasonWhereInput>;
};

export type SeasonOrderByWithRelationInput = {
  PlayerAttributes?: InputMaybe<PlayerAttributesOrderByRelationAggregateInput>;
  Prize?: InputMaybe<PrizeOrderByRelationAggregateInput>;
  PrizeClaim?: InputMaybe<PrizeClaimOrderByRelationAggregateInput>;
  RegistrationWindow?: InputMaybe<RegistrationWindowOrderByRelationAggregateInput>;
  TournamentResult?: InputMaybe<TournamentResultOrderByRelationAggregateInput>;
  academyExpireAtRealTimestamp?: InputMaybe<SortOrderInput>;
  endTimestamp?: InputMaybe<SortOrderInput>;
  fixtureScheduleRealTimestamp?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numTeamsPromoted?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  preSeasonStartedAt?: InputMaybe<SortOrderInput>;
  startTimestamp?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  tournamentCompleteAtRealTimestamp?: InputMaybe<SortOrderInput>;
  tournaments?: InputMaybe<TournamentOrderByRelationAggregateInput>;
};

export type SeasonRelationFilter = {
  is?: InputMaybe<SeasonWhereInput>;
  isNot?: InputMaybe<SeasonWhereInput>;
};

export enum SeasonScalarFieldEnum {
  AcademyExpireAtRealTimestamp = 'academyExpireAtRealTimestamp',
  EndTimestamp = 'endTimestamp',
  FixtureScheduleRealTimestamp = 'fixtureScheduleRealTimestamp',
  Id = 'id',
  Name = 'name',
  NumTeamsPromoted = 'numTeamsPromoted',
  PreSeasonStartedAt = 'preSeasonStartedAt',
  StartTimestamp = 'startTimestamp',
  State = 'state',
  TournamentCompleteAtRealTimestamp = 'tournamentCompleteAtRealTimestamp'
}

export enum SeasonState {
  Complete = 'COMPLETE',
  Live = 'LIVE',
  Pending = 'PENDING',
  PostSeason = 'POST_SEASON',
  PreSeason = 'PRE_SEASON'
}

export type SeasonWhereInput = {
  AND?: InputMaybe<Array<SeasonWhereInput>>;
  NOT?: InputMaybe<Array<SeasonWhereInput>>;
  OR?: InputMaybe<Array<SeasonWhereInput>>;
  PlayerAttributes?: InputMaybe<PlayerAttributesListRelationFilter>;
  Prize?: InputMaybe<PrizeListRelationFilter>;
  PrizeClaim?: InputMaybe<PrizeClaimListRelationFilter>;
  RegistrationWindow?: InputMaybe<RegistrationWindowListRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  academyExpireAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  endTimestamp?: InputMaybe<FloatNullableFilter>;
  fixtureScheduleRealTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  numTeamsPromoted?: InputMaybe<IntFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  preSeasonStartedAt?: InputMaybe<FloatNullableFilter>;
  startTimestamp?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<EnumSeasonStateFilter>;
  tournamentCompleteAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  tournaments?: InputMaybe<TournamentListRelationFilter>;
};

export type SeasonWhereUniqueInput = {
  AND?: InputMaybe<Array<SeasonWhereInput>>;
  NOT?: InputMaybe<Array<SeasonWhereInput>>;
  OR?: InputMaybe<Array<SeasonWhereInput>>;
  PlayerAttributes?: InputMaybe<PlayerAttributesListRelationFilter>;
  Prize?: InputMaybe<PrizeListRelationFilter>;
  PrizeClaim?: InputMaybe<PrizeClaimListRelationFilter>;
  RegistrationWindow?: InputMaybe<RegistrationWindowListRelationFilter>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  academyExpireAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  endTimestamp?: InputMaybe<FloatNullableFilter>;
  fixtureScheduleRealTimestamp?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  numTeamsPromoted?: InputMaybe<IntFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  preSeasonStartedAt?: InputMaybe<FloatNullableFilter>;
  startTimestamp?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<EnumSeasonStateFilter>;
  tournamentCompleteAtRealTimestamp?: InputMaybe<FloatNullableFilter>;
  tournaments?: InputMaybe<TournamentListRelationFilter>;
};

export type ServerMetadata = {
  __typename?: 'ServerMetadata';
  gameTimestamp: Scalars['Float']['output'];
  timestamp: Scalars['Float']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Stadium = {
  __typename?: 'Stadium';
  _count?: Maybe<StadiumCount>;
  capacity: Scalars['Int']['output'];
  club: Array<Club>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  pitchUri?: Maybe<Scalars['String']['output']>;
  stadiumStand: Array<StadiumStand>;
};


export type StadiumClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type StadiumStadiumStandArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};

export type StadiumCount = {
  __typename?: 'StadiumCount';
  club: Scalars['Int']['output'];
  stadiumStand: Scalars['Int']['output'];
};


export type StadiumCountClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type StadiumCountStadiumStandArgs = {
  where?: InputMaybe<StadiumStandWhereInput>;
};

export type StadiumOrderByWithRelationInput = {
  capacity?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  stadiumStand?: InputMaybe<StadiumStandOrderByRelationAggregateInput>;
};

export type StadiumRelationFilter = {
  is?: InputMaybe<StadiumWhereInput>;
  isNot?: InputMaybe<StadiumWhereInput>;
};

export enum StadiumScalarFieldEnum {
  Capacity = 'capacity',
  Id = 'id',
  Name = 'name'
}

export type StadiumStand = {
  __typename?: 'StadiumStand';
  capacity: Scalars['Int']['output'];
  colours: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  side: StadiumStandSide;
  size: StadiumStandSize;
  stadium: Stadium;
  stadiumId: Scalars['Int']['output'];
  style: StadiumStandStyle;
  uri?: Maybe<Scalars['String']['output']>;
  variant: Scalars['Int']['output'];
};

export type StadiumStandListRelationFilter = {
  every?: InputMaybe<StadiumStandWhereInput>;
  none?: InputMaybe<StadiumStandWhereInput>;
  some?: InputMaybe<StadiumStandWhereInput>;
};

export type StadiumStandOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StadiumStandOrderByWithRelationInput = {
  capacity?: InputMaybe<SortOrder>;
  colours?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  side?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  stadium?: InputMaybe<StadiumOrderByWithRelationInput>;
  stadiumId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export enum StadiumStandScalarFieldEnum {
  Capacity = 'capacity',
  Colours = 'colours',
  Id = 'id',
  Side = 'side',
  Size = 'size',
  StadiumId = 'stadiumId',
  Style = 'style',
  Variant = 'variant'
}

export enum StadiumStandSide {
  East = 'EAST',
  North = 'NORTH',
  South = 'SOUTH',
  West = 'WEST'
}

export enum StadiumStandSize {
  ExtraLarge = 'EXTRA_LARGE',
  ExtraSmall = 'EXTRA_SMALL',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export enum StadiumStandStyle {
  Brick = 'BRICK',
  DarkMetal = 'DARK_METAL',
  Metal = 'METAL',
  PostModern = 'POST_MODERN',
  Stone = 'STONE',
  Wood = 'WOOD'
}

export type StadiumStandWhereInput = {
  AND?: InputMaybe<Array<StadiumStandWhereInput>>;
  NOT?: InputMaybe<Array<StadiumStandWhereInput>>;
  OR?: InputMaybe<Array<StadiumStandWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  colours?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  side?: InputMaybe<EnumStadiumStandSideFilter>;
  size?: InputMaybe<EnumStadiumStandSizeFilter>;
  stadium?: InputMaybe<StadiumRelationFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  style?: InputMaybe<EnumStadiumStandStyleFilter>;
  variant?: InputMaybe<IntFilter>;
};

export type StadiumStandWhereUniqueInput = {
  AND?: InputMaybe<Array<StadiumStandWhereInput>>;
  NOT?: InputMaybe<Array<StadiumStandWhereInput>>;
  OR?: InputMaybe<Array<StadiumStandWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  colours?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  side?: InputMaybe<EnumStadiumStandSideFilter>;
  size?: InputMaybe<EnumStadiumStandSizeFilter>;
  stadium?: InputMaybe<StadiumRelationFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  style?: InputMaybe<EnumStadiumStandStyleFilter>;
  variant?: InputMaybe<IntFilter>;
};

export type StadiumWhereInput = {
  AND?: InputMaybe<Array<StadiumWhereInput>>;
  NOT?: InputMaybe<Array<StadiumWhereInput>>;
  OR?: InputMaybe<Array<StadiumWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  stadiumStand?: InputMaybe<StadiumStandListRelationFilter>;
};

export type StadiumWhereUniqueInput = {
  AND?: InputMaybe<Array<StadiumWhereInput>>;
  NOT?: InputMaybe<Array<StadiumWhereInput>>;
  OR?: InputMaybe<Array<StadiumWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  stadiumStand?: InputMaybe<StadiumStandListRelationFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubmittedActionResponseType = {
  __typename?: 'SubmittedActionResponseType';
  code: Scalars['Int']['output'];
  error?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type Tactics = {
  __typename?: 'Tactics';
  formation: Formation;
  formationId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lineup?: Maybe<Lineup>;
  mentality: Scalars['String']['output'];
};


export type TacticsLineupArgs = {
  where?: InputMaybe<LineupWhereInput>;
};

export type TacticsListRelationFilter = {
  every?: InputMaybe<TacticsWhereInput>;
  none?: InputMaybe<TacticsWhereInput>;
  some?: InputMaybe<TacticsWhereInput>;
};

export type TacticsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TacticsOrderByWithRelationInput = {
  formation?: InputMaybe<FormationOrderByWithRelationInput>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lineup?: InputMaybe<LineupOrderByWithRelationInput>;
  mentality?: InputMaybe<SortOrder>;
};

export type TacticsRelationFilter = {
  is?: InputMaybe<TacticsWhereInput>;
  isNot?: InputMaybe<TacticsWhereInput>;
};

export enum TacticsScalarFieldEnum {
  FormationId = 'formationId',
  Id = 'id',
  Mentality = 'mentality'
}

export type TacticsWhereInput = {
  AND?: InputMaybe<Array<TacticsWhereInput>>;
  NOT?: InputMaybe<Array<TacticsWhereInput>>;
  OR?: InputMaybe<Array<TacticsWhereInput>>;
  formation?: InputMaybe<FormationRelationFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  lineup?: InputMaybe<LineupNullableRelationFilter>;
  mentality?: InputMaybe<StringFilter>;
};

export type TacticsWhereUniqueInput = {
  AND?: InputMaybe<Array<TacticsWhereInput>>;
  NOT?: InputMaybe<Array<TacticsWhereInput>>;
  OR?: InputMaybe<Array<TacticsWhereInput>>;
  formation?: InputMaybe<FormationRelationFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lineup?: InputMaybe<LineupNullableRelationFilter>;
  mentality?: InputMaybe<StringFilter>;
};

export type Tournament = {
  __typename?: 'Tournament';
  TournamentResult: Array<TournamentResult>;
  _count?: Maybe<TournamentCount>;
  clubTournaments: Array<ClubTournament>;
  competition: Competition;
  competitionId: Scalars['Int']['output'];
  createdAt: Scalars['Float']['output'];
  fixtures: Array<Fixture>;
  id: Scalars['Int']['output'];
  instance: Scalars['String']['output'];
  name: Scalars['String']['output'];
  playerStats: Array<TournamentPlayerStats>;
  season: Season;
  seasonId: Scalars['Int']['output'];
  seed: Scalars['String']['output'];
  startTimestamp?: Maybe<Scalars['Float']['output']>;
  state: TournamentState;
  type: Scalars['String']['output'];
};


export type TournamentTournamentResultArgs = {
  cursor?: InputMaybe<TournamentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type TournamentClubTournamentsArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type TournamentFixturesArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type TournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type TournamentCount = {
  __typename?: 'TournamentCount';
  TournamentResult: Scalars['Int']['output'];
  clubTournaments: Scalars['Int']['output'];
  fixtures: Scalars['Int']['output'];
  playerStats: Scalars['Int']['output'];
};


export type TournamentCountTournamentResultArgs = {
  where?: InputMaybe<TournamentResultWhereInput>;
};


export type TournamentCountClubTournamentsArgs = {
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type TournamentCountFixturesArgs = {
  where?: InputMaybe<FixtureWhereInput>;
};


export type TournamentCountPlayerStatsArgs = {
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type TournamentListRelationFilter = {
  every?: InputMaybe<TournamentWhereInput>;
  none?: InputMaybe<TournamentWhereInput>;
  some?: InputMaybe<TournamentWhereInput>;
};

export type TournamentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TournamentOrderByWithRelationInput = {
  TournamentResult?: InputMaybe<TournamentResultOrderByRelationAggregateInput>;
  clubTournaments?: InputMaybe<ClubTournamentOrderByRelationAggregateInput>;
  competition?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fixtures?: InputMaybe<FixtureOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  instance?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerStats?: InputMaybe<TournamentPlayerStatsOrderByRelationAggregateInput>;
  season?: InputMaybe<SeasonOrderByWithRelationInput>;
  seasonId?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStats = {
  __typename?: 'TournamentPlayerStats';
  dummy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  playerStatRecord: PlayerStatsRecord;
  playerStatRecordId: Scalars['Int']['output'];
  tournament: Tournament;
  tournamentId: Scalars['Int']['output'];
};

export type TournamentPlayerStatsListRelationFilter = {
  every?: InputMaybe<TournamentPlayerStatsWhereInput>;
  none?: InputMaybe<TournamentPlayerStatsWhereInput>;
  some?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type TournamentPlayerStatsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsOrderByWithRelationInput = {
  dummy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordOrderByWithRelationInput>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export enum TournamentPlayerStatsScalarFieldEnum {
  Dummy = 'dummy',
  Id = 'id',
  PlayerStatRecordId = 'playerStatRecordId',
  TournamentId = 'tournamentId'
}

export type TournamentPlayerStatsTournamentIdPlayerStatRecordIdCompoundUniqueInput = {
  playerStatRecordId: Scalars['Int']['input'];
  tournamentId: Scalars['Int']['input'];
};

export type TournamentPlayerStatsWhereInput = {
  AND?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  NOT?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  OR?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordRelationFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type TournamentPlayerStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  NOT?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  OR?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordRelationFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
  tournamentId_playerStatRecordId?: InputMaybe<TournamentPlayerStatsTournamentIdPlayerStatRecordIdCompoundUniqueInput>;
};

export type TournamentRelationFilter = {
  is?: InputMaybe<TournamentWhereInput>;
  isNot?: InputMaybe<TournamentWhereInput>;
};

export type TournamentResult = {
  __typename?: 'TournamentResult';
  PrizeAssignment: Array<PrizeAssignment>;
  _count?: Maybe<TournamentResultCount>;
  club: Club;
  clubId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isInactive: Scalars['Boolean']['output'];
  isPrizeEligible: Scalars['Boolean']['output'];
  owner: Owner;
  ownerId: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  season: Season;
  seasonId: Scalars['Int']['output'];
  tournament: Tournament;
  tournamentId: Scalars['Int']['output'];
};


export type TournamentResultPrizeAssignmentArgs = {
  cursor?: InputMaybe<PrizeAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};

export type TournamentResultCount = {
  __typename?: 'TournamentResultCount';
  PrizeAssignment: Scalars['Int']['output'];
};


export type TournamentResultCountPrizeAssignmentArgs = {
  where?: InputMaybe<PrizeAssignmentWhereInput>;
};

export type TournamentResultListRelationFilter = {
  every?: InputMaybe<TournamentResultWhereInput>;
  none?: InputMaybe<TournamentResultWhereInput>;
  some?: InputMaybe<TournamentResultWhereInput>;
};

export type TournamentResultOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TournamentResultOrderByWithRelationInput = {
  PrizeAssignment?: InputMaybe<PrizeAssignmentOrderByRelationAggregateInput>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isInactive?: InputMaybe<SortOrder>;
  isPrizeEligible?: InputMaybe<SortOrder>;
  owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  season?: InputMaybe<SeasonOrderByWithRelationInput>;
  seasonId?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentResultRelationFilter = {
  is?: InputMaybe<TournamentResultWhereInput>;
  isNot?: InputMaybe<TournamentResultWhereInput>;
};

export enum TournamentResultScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsInactive = 'isInactive',
  IsPrizeEligible = 'isPrizeEligible',
  OwnerId = 'ownerId',
  Position = 'position',
  SeasonId = 'seasonId',
  TournamentId = 'tournamentId'
}

export type TournamentResultWhereInput = {
  AND?: InputMaybe<Array<TournamentResultWhereInput>>;
  NOT?: InputMaybe<Array<TournamentResultWhereInput>>;
  OR?: InputMaybe<Array<TournamentResultWhereInput>>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentListRelationFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  isInactive?: InputMaybe<BoolFilter>;
  isPrizeEligible?: InputMaybe<BoolFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  ownerId?: InputMaybe<IntFilter>;
  position?: InputMaybe<IntFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type TournamentResultWhereUniqueInput = {
  AND?: InputMaybe<Array<TournamentResultWhereInput>>;
  NOT?: InputMaybe<Array<TournamentResultWhereInput>>;
  OR?: InputMaybe<Array<TournamentResultWhereInput>>;
  PrizeAssignment?: InputMaybe<PrizeAssignmentListRelationFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isInactive?: InputMaybe<BoolFilter>;
  isPrizeEligible?: InputMaybe<BoolFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  ownerId?: InputMaybe<IntFilter>;
  position?: InputMaybe<IntFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export enum TournamentScalarFieldEnum {
  CompetitionId = 'competitionId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Instance = 'instance',
  Name = 'name',
  SeasonId = 'seasonId',
  Seed = 'seed',
  StartTimestamp = 'startTimestamp',
  State = 'state',
  Type = 'type'
}

export enum TournamentState {
  Complete = 'COMPLETE',
  Ended = 'ENDED',
  Live = 'LIVE',
  Pending = 'PENDING',
  PreSchedule = 'PRE_SCHEDULE'
}

export type TournamentWhereInput = {
  AND?: InputMaybe<Array<TournamentWhereInput>>;
  NOT?: InputMaybe<Array<TournamentWhereInput>>;
  OR?: InputMaybe<Array<TournamentWhereInput>>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  clubTournaments?: InputMaybe<ClubTournamentListRelationFilter>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<FloatFilter>;
  fixtures?: InputMaybe<FixtureListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  instance?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  playerStats?: InputMaybe<TournamentPlayerStatsListRelationFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<EnumTournamentStateFilter>;
  type?: InputMaybe<StringFilter>;
};

export type TournamentWhereUniqueInput = {
  AND?: InputMaybe<Array<TournamentWhereInput>>;
  NOT?: InputMaybe<Array<TournamentWhereInput>>;
  OR?: InputMaybe<Array<TournamentWhereInput>>;
  TournamentResult?: InputMaybe<TournamentResultListRelationFilter>;
  clubTournaments?: InputMaybe<ClubTournamentListRelationFilter>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<FloatFilter>;
  fixtures?: InputMaybe<FixtureListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  playerStats?: InputMaybe<TournamentPlayerStatsListRelationFilter>;
  season?: InputMaybe<SeasonRelationFilter>;
  seasonId?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<EnumTournamentStateFilter>;
  type?: InputMaybe<StringFilter>;
};

export type TrainingSlot = {
  __typename?: 'TrainingSlot';
  baseDuration: Scalars['Int']['output'];
  club: Club;
  clubId: Scalars['Int']['output'];
  conditionCost: Scalars['Int']['output'];
  expiryTime?: Maybe<Scalars['Float']['output']>;
  growthFactor: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isComplete: Scalars['Boolean']['output'];
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  trainablePositions: Array<Scalars['String']['output']>;
};


export type TrainingSlotPlayerArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};

export type TrainingSlotListRelationFilter = {
  every?: InputMaybe<TrainingSlotWhereInput>;
  none?: InputMaybe<TrainingSlotWhereInput>;
  some?: InputMaybe<TrainingSlotWhereInput>;
};

export type TrainingSlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TrainingSlotOrderByWithRelationInput = {
  baseDuration?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  conditionCost?: InputMaybe<SortOrder>;
  expiryTime?: InputMaybe<SortOrderInput>;
  growthFactor?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isComplete?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrderInput>;
  trainablePositions?: InputMaybe<SortOrder>;
};

export enum TrainingSlotScalarFieldEnum {
  BaseDuration = 'baseDuration',
  ClubId = 'clubId',
  ConditionCost = 'conditionCost',
  ExpiryTime = 'expiryTime',
  GrowthFactor = 'growthFactor',
  Id = 'id',
  IsComplete = 'isComplete',
  PlayerId = 'playerId',
  Position = 'position',
  TrainablePositions = 'trainablePositions'
}

export type TrainingSlotWhereInput = {
  AND?: InputMaybe<Array<TrainingSlotWhereInput>>;
  NOT?: InputMaybe<Array<TrainingSlotWhereInput>>;
  OR?: InputMaybe<Array<TrainingSlotWhereInput>>;
  baseDuration?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  conditionCost?: InputMaybe<IntFilter>;
  expiryTime?: InputMaybe<FloatNullableFilter>;
  growthFactor?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isComplete?: InputMaybe<BoolFilter>;
  player?: InputMaybe<PlayerNullableRelationFilter>;
  playerId?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<StringNullableFilter>;
  trainablePositions?: InputMaybe<StringNullableListFilter>;
};

export type TrainingSlotWhereUniqueInput = {
  AND?: InputMaybe<Array<TrainingSlotWhereInput>>;
  NOT?: InputMaybe<Array<TrainingSlotWhereInput>>;
  OR?: InputMaybe<Array<TrainingSlotWhereInput>>;
  baseDuration?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  conditionCost?: InputMaybe<IntFilter>;
  expiryTime?: InputMaybe<FloatNullableFilter>;
  growthFactor?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isComplete?: InputMaybe<BoolFilter>;
  player?: InputMaybe<PlayerNullableRelationFilter>;
  playerId?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<StringNullableFilter>;
  trainablePositions?: InputMaybe<StringNullableListFilter>;
};

export type ClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClubsQuery = { __typename?: 'Query', clubs: Array<{ __typename?: 'Club', id: number, name: string }> };

export type GetPlayersForClubQueryVariables = Exact<{
  clubId: Scalars['Int']['input'];
}>;


export type GetPlayersForClubQuery = { __typename?: 'Query', club?: { __typename?: 'Club', id: number, name: string, abbreviation: string, city: string, description: string, colours: any, clubBadgeId: number, players: Array<{ __typename?: 'Player', id: string, firstName: string, lastName: string, isAcademy: boolean, isReserve: boolean, isRetired: boolean, fullName: string, nationality: string, imageUrls?: { __typename?: 'PlayerImages', player?: string | null, card?: string | null, thumb?: string | null } | null }> } | null };


export const ClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ClubsQuery, ClubsQueryVariables>;
export const GetPlayersForClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlayersForClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"club"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"colours"}},{"kind":"Field","name":{"kind":"Name","value":"clubBadgeId"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"isAcademy"}},{"kind":"Field","name":{"kind":"Name","value":"isReserve"}},{"kind":"Field","name":{"kind":"Name","value":"isRetired"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"}},{"kind":"Field","name":{"kind":"Name","value":"card"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPlayersForClubQuery, GetPlayersForClubQueryVariables>;