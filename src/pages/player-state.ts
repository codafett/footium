import {atom} from 'jotai'
import { SortOrder, SortOrderCodes } from './types'

export const showRetiredPlayersAtom = atom(false)
export const showAcademyPlayersAtom = atom(false)
export const sortOrderAtom = atom<SortOrder>(SortOrderCodes.FirstName)