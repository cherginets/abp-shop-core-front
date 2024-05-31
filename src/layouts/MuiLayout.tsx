'use client'

import {FC, useMemo, useState} from "react";
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Group from '@mui/icons-material/Group';
// import {NextLink} from "../next-mui-link/Link";
// import IconButton from '../../mui-kit/IconButton';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }),
}));

export type MuiLayoutLinkType = {
  title: string
  IconComponent: typeof Group | any
  link: string
} | 'divider';

const MuiLayout:FC<{
  links: MuiLayoutLinkType[],
  topRightElements?: any,
  userName?: string,
  userLink?: string,
  ListItemWrapper?: ({children}: {children: any}) => any
  title?: string
  children?: any
}> = (
  {
    links,
    topRightElements,
    title,
    userName,
    userLink,
    ListItemWrapper = ({children}) => children,
    children}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const title = useMemo(() => {
  //   return (
  //     // @ts-ignore
  //     links.filter(link => link !== 'divider').find(link => pathname.replaceAll("/", "") === (link.link || "").replaceAll("/", ""))
  //     // @ts-ignore
  //     || links.filter(link => link !== 'divider').find(link => pathname.startsWith(link.link))
  //     // @ts-ignore
  //   )?.title || "";
  // }, [links, pathname]);

  return (
    <Box sx={{display: 'flex', flexGrow: 1}}>
      <CssBaseline/>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon/>
          </IconButton>
          {!!title && <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>}
          <div style={{margin:"auto"}} />
          {topRightElements}
          {userName &&<Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Typography>{userName}</Typography>
            <Avatar style={{width: 32, height: 32}}/>
          </Stack>}

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {links.map((item, index) => {
            if(item === 'divider') return <Divider key={index} />;

            const {title, link, IconComponent} = item;
            return (
              <ListItemWrapper key={index}>
                  <ListItem disablePadding sx={{display: 'block'}}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <Tooltip title={title}>

                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                          {index % 2 === 0 ? <IconComponent/> : <IconComponent/>}
                      </ListItemIcon>
                      </Tooltip>

                      <ListItemText primary={title} sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                  </ListItem>
              </ListItemWrapper>
            )})}
        </List>
        <Divider/>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader/>
        {children}
      </Box>
    </Box>
  );
}

export default MuiLayout;