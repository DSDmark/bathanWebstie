import { IUserInitialState } from '../types'

export const userInitialState: IUserInitialState = {
  details: {
    name: '',
    id: '',
    email: '',
    role: '',
    department: { id: '', name: '' },
    contact: '',
    skills: [],
    description: '',
  },
  isLogin: false,
}
