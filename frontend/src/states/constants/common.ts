import { ICommonInitialState } from '../types'

const commonData = { data: [], isLoading: false }

export const commonInitialState: ICommonInitialState = {
  skills: commonData,
  departments: commonData,
  seniorityLevels: commonData,
}
