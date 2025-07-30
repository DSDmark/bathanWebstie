import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'

export const AUTH_ROUTE = {
  main: '/',
  login: '/login',
  singUp: '/register',
}

export const USER_ROUTE = {
  dashboard: '/dashboard',
  editProfile: '/edit-profile',
}

export const ENGINEER_ROUTE = {
  ...USER_ROUTE,
  editProfile: '/edit-profile',
}

export const MANAGER_ROUTE = {
  ...USER_ROUTE,
  engineerManagement: '/engineer-management/engineer-operations',
  engineerAddEdit: '/engineer-management/engineer-operations/add-edit',
  projectManagement: '/engineer-management/projects-operations',
}

export const PROTECTED_ROUTE = {
  ...ENGINEER_ROUTE,
  ...MANAGER_ROUTE,
}

export const SIDEBAR_MENU = [
  {
    title: 'dashboard',
    path: PROTECTED_ROUTE.dashboard,
    icon: GridViewOutlinedIcon,
  },
  {
    title: 'Engineer Management',
    path: PROTECTED_ROUTE.engineerManagement,
    icon: AdsClickRoundedIcon,
    subMenu: [
      {
        title: 'Engineers',
        items: [{ title: 'Engineers Operations', path: PROTECTED_ROUTE.engineerManagement }],
      },
      {
        title: 'Projects',
        items: [{ title: 'Projects Operations', path: PROTECTED_ROUTE.projectManagement }],
      },
    ],
  },
]
