import { useAtom } from "jotai";
import { ChangeEvent, ComponentProps } from "react";
import { showAcademyPlayersAtom, showRetiredPlayersAtom, sortOrderAtom } from "../player-state";

export const SortOrderCodes = {
  FirstName: "firstName",
  LastName: "lastName",
  Nationality: "nationality"
} as const;

export type SortOrder = typeof SortOrderCodes[keyof typeof SortOrderCodes];

export const PlayerDisplayOptions = ({ className }: ComponentProps<"div">) => {
  const [showRetiredPlayers, setShowRetiredPlayers] = useAtom(showRetiredPlayersAtom);
  const [showAcademyPlayers, setShowAcademyPlayers] = useAtom(showAcademyPlayersAtom);
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom)
  
  const handleShowAcademyChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setShowAcademyPlayers(e.target.checked);
  }

  const handleShowRetiredChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setShowRetiredPlayers(e.target.checked);
  }

  const handleSortFieldChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
  }

  return (
    <div className={className}>
      <p className="text-blue-500 text-lg">Players:</p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 mt-4 md:mt-0 text-xs md:items-center">
        <div className="flex flex-row gap-1 items-center">
          <input
            type="checkbox"
            id="isAcademy"
            name="isAcademy"
            checked={showAcademyPlayers}
            onChange={handleShowAcademyChanged}
          />
          <label htmlFor="isAcademy">Show academy players</label>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <input
            type="checkbox"
            id="isRetired"
            name="isRetired"
            checked={showRetiredPlayers}
            onChange={handleShowRetiredChanged}
          />
          <label htmlFor="isRetired">Show retired players</label>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <p>Sort:</p>
          <select
            className="text-xs text-gray-600 p-2 border border-gray-200 rounded-md"
            value={sortOrder}
            onChange={handleSortFieldChanged}
          >
            <option value={SortOrderCodes.FirstName}>First Name</option>
            <option value={SortOrderCodes.LastName}>Last Name</option>
            <option value={SortOrderCodes.Nationality}>Nationality</option>
          </select>
        </div>
      </div>
    </div>
  );
};
