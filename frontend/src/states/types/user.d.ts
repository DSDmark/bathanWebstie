import { ROLES } from '@/constants'
import { IOptionsFormat } from '@/types'

export interface IUserInitialState {
  details: {
    id?: string
    name?: string
    email?: string
    role?: keyof typeof ROLES
    department?: IOptionsFormat
    contact?: string
    skills?: IOptionsFormat[]
    description?: string
  }
  isLogin: boolean
}
