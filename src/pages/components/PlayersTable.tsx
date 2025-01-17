import { Player } from "@/__generated__/graphql";
import { ComponentProps } from "react";
import classNames from "classnames";

const Badge = ({ children }: ComponentProps<"div">) => (
  <div className="flex items-center px-1 text-gray-400 text-xs border border-gray-500 rounded-md">{children}</div>
)

const PlayerCard = ({ player }: { player: Partial<Player> }) => (
  <div key={player.id} className="flex flex-col gap-1 pb-2 border-b border-gray-500 md:flex-row md:justify-between md:gap-3 md:items-center">
  <div className="flex flex-row justify-between text-xs md:flex-grow">
    <p className="text-lg">{player.fullName}</p>
    {player.isRetired ? <Badge>Retired</Badge> : null}
    {player.isAcademy ? <Badge>Academy</Badge> : null}
  </div>
  <p>Nationality: {player.nationality}</p>
</div>
)

export const PlayersTable = ({
  className,
  players,
}: ComponentProps<"table"> & { players: Partial<Player>[] }) => {
  return (
    <div className={classNames("flex flex-col gap-3", className)}>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};
