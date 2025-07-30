import { PROTECTED_ROUTE } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { resetUser } from '@/states'
import { OnClick, SetStateAction } from '@/types'
import { handleCloseUtil, handleOpenUtil } from '@/utils'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Avatar,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Popover,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import Link from 'next/link'
import { useState } from 'react'
import { ManagerDialog } from '../dialogs'
import DangerDialog from '../dialogs/dangerDialog'

interface HeaderProps {
  drawerWidth: number
  handleDrawerToggle: () => void
}

interface IProps {
  state: IStateHeader
  setState: SetStateAction<IStateHeader>
  user: any
}

export default function Header({ drawerWidth, handleDrawerToggle }: HeaderProps) {
  const { details } = useAppSelector(({ user }) => user)
  const [state, setState] = useState<IStateHeader>({
    toggles: {
      userProfile: false,
      viewProfiles: false,
      logout: false,
    },
  })

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton color='inherit' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            My Dashboard
          </Typography>
          <UserProfile
            user={{
              firstName: details.name,
              role: details.role,
              email: details.email,
            }}
            state={state}
            setState={setState}
          />
        </Toolbar>
      </AppBar>
      {/* <EngineerDialog
        open={state.toggles.viewProfiles}
        onClose={() => handleCloseUtil(setState)}
      /> */}
      <ManagerDialog open={state.toggles.viewProfiles} onClose={() => handleCloseUtil(setState)} />
    </>
  )
}

const UserProfile = ({ state, setState, user }: IProps) => {
  const dispatch = useAppDispatch()
  const handleOpenLogoutDialog = () => {
    setState(p => ({ ...p, toggles: { ...p.toggles, logout: true } }))
  }

  const handleLogout = () => {
    dispatch(resetUser())
    handleCloseUtil(setState)
  }
  return (
    <>
      <ClickAwayListener onClickAway={() => handleCloseUtil(setState)}>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Open settings'>
            <IconButton
              data-toggle-name='userProfile'
              onClick={(e: OnClick) => handleOpenUtil(e, setState)}
              sx={{ p: 0 }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>U</Avatar>
            </IconButton>
          </Tooltip>
          <Popover
            open={state.toggles.userProfile}
            onClose={() => handleCloseUtil(setState)}
            anchorOrigin={{
              vertical: 60,
              horizontal: 'right',
            }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{ sx: { width: 'auto' } }}
          >
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 56,
                  height: 56,
                  mx: 'auto',
                }}
              >
                {user.firstName.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant='subtitle1' sx={{ mt: 1 }}>
                  {user.firstName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  ({user.role})
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {user.email}
                </Typography>
              </Box>
            </Box>
            <Divider />
            <MenuList>
              <MenuItem component={Link} href={PROTECTED_ROUTE.editProfile}>
                Edit Profile
              </MenuItem>
              <MenuItem data-toggle-name='viewProfiles' onClick={(e: OnClick) => handleOpenUtil(e, setState)}>
                View Profile
              </MenuItem>
              <MenuItem onClick={handleOpenLogoutDialog}>Logout</MenuItem>
            </MenuList>
          </Popover>
        </Box>
      </ClickAwayListener>
      <DangerDialog
        handleClick={handleLogout}
        open={state.toggles.logout}
        setInitialState={setState}
        title='Logout?'
        buttonTitle='Logout'
      />
    </>
  )
}
