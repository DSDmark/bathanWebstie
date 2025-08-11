import { SIDEBAR_MENU } from '@/constants'
import { useAppSelector } from '@/hooks'
import { roleBasePageAccessUtil } from '@/utils'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

const drawerWidth = 240

interface SidebarProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
}

const filterMenuByPermissions = (menu: any, permissions: string[]): any => {
  if (menu.subMenu) {
    menu.subMenu = menu.subMenu
      .map((subMenu: any) => {
        subMenu.items = subMenu.items.filter((item: any) => permissions.includes(item.path || ''))
        return subMenu
      })
      .filter((subMenu: any) => subMenu.items.length > 0)
  }
  return menu
}

export default function Sidebar({ mobileOpen, handleDrawerToggle }: SidebarProps) {
  const theme = useTheme()
  const { details } = useAppSelector(({ user }) => user)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [state, setState] = useState<{
    filterMenus: any[]
    currentOpenMenu: { [key: string]: boolean }
  }>({
    filterMenus: [],
    currentOpenMenu: {},
  })

  const handleClick = (menuTitle: string) => {
    setState((p: any) => ({
      ...p,
      currentOpenMenu: {
        ...p.currentOpenMenu,
        [menuTitle]: !p.currentOpenMenu[menuTitle],
      },
    }))
  }
  useEffect(() => {
    if (details?.role) {
      const permissions = roleBasePageAccessUtil(details?.role as any) || []
      const newFilteredMenuRoute = SIDEBAR_MENU.filter((menu: any) => {
        if (menu.path && permissions.includes(menu.path)) {
          return true
        } else if (menu?.subMenu) {
          const filteredSubMenu = filterMenuByPermissions(menu, permissions)
          return filteredSubMenu.subMenu.length > 0
        }
        return false
      })
      setState((p: any) => ({ ...p, filterMenus: newFilteredMenuRoute }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details?.role])

  const renderMenuItem = (menu: any, idx: number) => {
    const IconComponent = menu.icon
    const isOpen = !!state.currentOpenMenu[menu.title]

    if (menu.subMenu) {
      return (
        <Fragment key={idx}>
          <ListItemButton
            onClick={() => handleClick(menu.title)}
            selected={isOpen}
            sx={{ px: 2, py: 1, '&.Mui-selected': { backgroundColor: theme.palette.action.selected } }}
          >
            <ListItemIcon sx={{ minWidth: theme.spacing(5) }}>
              <IconComponent fontSize='small' />
            </ListItemIcon>
            <ListItemText primary={menu.title} />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={isOpen} timeout='auto' unmountOnExit>
            {menu.subMenu.map((group: any, gIdx: number) => (
              <Box key={gIdx}>
                <Typography sx={{ pl: 7, pt: 1, color: theme.palette.text.primary, textDecoration: 'none' }}>
                  {group.title}
                </Typography>
                <List disablePadding>
                  {group.items.map((item: any, idx: number) => (
                    <MuiLink component={Link} href={item.path} key={idx}>
                      <ListItemButton key={idx} sx={{ pl: 8, py: 0.5 }}>
                        -{' '}
                        <ListItemText
                          primary={item.title}
                          primaryTypographyProps={{ variant: 'body2' }}
                          sx={{ ml: 1 }}
                        />
                      </ListItemButton>
                    </MuiLink>
                  ))}
                </List>
              </Box>
            ))}
          </Collapse>
        </Fragment>
      )
    }

    return (
      <>
        <ListItemButton LinkComponent={Link} href={menu.path} sx={{ px: 2, py: 1 }}>
          <ListItemIcon sx={{ minWidth: theme.spacing(5) }}>
            <IconComponent fontSize='small' />
          </ListItemIcon>
          <ListItemText primary={menu.title} primaryTypographyProps={{ variant: 'body1', fontWeight: 500 }} />
        </ListItemButton>
        <Divider />
      </>
    )
  }

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar />
      <List disablePadding>{state.filterMenus.map(renderMenuItem)}</List>
    </Box>
  )

  return (
    <>
      {isMobile ? (
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', background: '#fff5e7' } }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant='permanent'
          open
          sx={{
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', background: '#fff5e7' },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  )
}
