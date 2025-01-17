import { useLazyQuery } from "@apollo/client";
import { GET_CLUB_PLAYERS } from "@/app/lib/queries/clubs";
import ClubBanner from "@/pages/components/ClubBanner";
import { ClubInputBox } from "@/pages/components/ClubInputBox";
import { useAtom } from "jotai";
import {
  showAcademyPlayersAtom,
  showRetiredPlayersAtom,
  sortOrderAtom,
} from "./player-state";
import { PlayerDisplayOptions } from "./components/PlayerDisplayOptions";
import { LoadingPlayersBanner } from "./components/LoadingPlayersBanner";
import { SortOrderCodes } from "./types";
import { PlayersTable } from "./components/PlayersTable";
import { ErrorMessage } from "./components/ErrorMessage";

export default function Home() {
  const [showAcademyPlayers, setShowAcademyPlayers] = useAtom(
    showAcademyPlayersAtom
  );
  const [showRetiredPlayers, setShowRetiredPlayers] = useAtom(
    showRetiredPlayersAtom
  );
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);

  const [getPlayers, { loading, data, error }] = useLazyQuery(GET_CLUB_PLAYERS);
  const handleClubSelected = (clubId: number) => {
    setShowAcademyPlayers(false);
    setShowRetiredPlayers(false);
    setSortOrder(SortOrderCodes.FirstName);
    getPlayers({ variables: { clubId: clubId } });
  };

  const displayPlayers = data?.club?.players
    .filter((player) => {
      if (!showAcademyPlayers && player.isAcademy) {
        return false;
      }
      if (!showRetiredPlayers && player.isRetired) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      return a[sortOrder].localeCompare(b[sortOrder]);
    });

  return (
    <div className="text-gray-200 flex flex-col items-center justify-center">
      <ClubInputBox clubId="clubId" onClubSelected={handleClubSelected} />
      <LoadingPlayersBanner loading={loading} className="self-center" />
      <ErrorMessage error={error} />
      {data && !data.club && (
        <p className="text-red-500 px-8 py-4">Club not found</p>
      )}
      {data && data.club && (
        <>
          <div className="p-8 flex flex-col flex-grow w-full ">
            <ClubBanner club={data.club} />
            <PlayerDisplayOptions className="flex flex-col md:flex-row justify-between mb-4" />
            {displayPlayers ? (
              <PlayersTable className="text-sm" players={displayPlayers} />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
