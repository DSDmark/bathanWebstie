import { IOptionsFormat } from '@/types'

type CommonData = {
  isLoading: boolean
  data: IOptionsFormat[]
}

export interface ICommonInitialState {
  skills: CommonData
  departments: CommonData
  seniorityLevels: CommonData
  empTypes: CommonData
}
