import { ChangeEvent, useState } from "react";

export const ClubInputBox = ({ onClubSelected } : { clubId: string, onClubSelected: (clubId: number) => void }) => {
  const [clubId, setClubId] = useState<number | null>();
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setClubId(null);
      return;
    }
    const clubId = parseInt(e.target.value, 10);
    if (!isNaN(clubId)) {
      setClubId(clubId);
    }
  };

  const handleSearch = () => {
    if (clubId) {
      onClubSelected(clubId);
    }
  };
  
  return (

  <div className="flex flex-col md:flex-row gap-2 mt-4 md:items-center py-4 px-8 border border-gray-200 rounded-md">
    <p>Enter a club Id:</p>
    <input
    type="number"
    className='text-sm text-gray-600 p-2 border border-gray-200 rounded-md'
    placeholder="Enter club ID"
    value={clubId?.toString() || ''}
    onChange={handleInputChange}
  />
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>Load</button>
  </div>
)
};

