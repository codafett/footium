// lib/server-fetch.ts
import { gql } from '../../../__generated__/gql';

export const GET_CLUBS = gql(`
  query Clubs {
    clubs {
      id
      name
    }
  }
`);

export const GET_CLUB_PLAYERS = gql(`
  query GetPlayersForClub($clubId: Int!) {
  club(where: { id: $clubId}) {
    id
    name
    abbreviation
    city
    description
    colours
    clubBadgeId    
    players {
      id
      firstName
      lastName
      isAcademy
      isReserve
      isRetired
      fullName
      nationality
      imageUrls {
        player
        card
        thumb
      }
    }
  }
}
`);
