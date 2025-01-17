/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query Clubs {\n    clubs {\n      id\n      name\n    }\n  }\n": types.ClubsDocument,
    "\n  query GetPlayersForClub($clubId: Int!) {\n  club(where: { id: $clubId}) {\n    id\n    name\n    abbreviation\n    city\n    description\n    colours\n    clubBadgeId    \n    players {\n      id\n      firstName\n      lastName\n      isAcademy\n      isReserve\n      isRetired\n      fullName\n      nationality\n      imageUrls {\n        player\n        card\n        thumb\n      }\n    }\n  }\n}\n": types.GetPlayersForClubDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Clubs {\n    clubs {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Clubs {\n    clubs {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPlayersForClub($clubId: Int!) {\n  club(where: { id: $clubId}) {\n    id\n    name\n    abbreviation\n    city\n    description\n    colours\n    clubBadgeId    \n    players {\n      id\n      firstName\n      lastName\n      isAcademy\n      isReserve\n      isRetired\n      fullName\n      nationality\n      imageUrls {\n        player\n        card\n        thumb\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  query GetPlayersForClub($clubId: Int!) {\n  club(where: { id: $clubId}) {\n    id\n    name\n    abbreviation\n    city\n    description\n    colours\n    clubBadgeId    \n    players {\n      id\n      firstName\n      lastName\n      isAcademy\n      isReserve\n      isRetired\n      fullName\n      nationality\n      imageUrls {\n        player\n        card\n        thumb\n      }\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;