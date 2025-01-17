export const SortOrderCodes = {
  FirstName: "firstName",
  LastName: "lastName",
  Nationality: "nationality"
} as const;

export type SortOrder = typeof SortOrderCodes[keyof typeof SortOrderCodes];
