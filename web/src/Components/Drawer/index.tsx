import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useTheme } from "@mui/material"
import { createContext, useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import { GetToken, ResetToken } from "../../Utils";

const drawerWidth = 240;

interface Menu {
    name: string
    url: string
    icon?: JSX.Element
}

const menuList: Menu[] = [
    {
        name: "Home",
        url: "/",
        icon: <HomeIcon />
    },
    {
        name: "My Bill",
        url: "/bill",
        icon: <AttachMoneyIcon />

    },
    {
        name: "My Receipt",
        url: "/receipt",
        icon: <ReceiptLongIcon />
    }
]

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export {
    ColorModeContext
}

const ParrotDrawer = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    var navigate = useNavigate()
    const Logout = async (e: any) => {
        ResetToken()
        navigate("/login")
    }

    const container = window !== undefined ? () => window.document.body : undefined;

    const drawerContent = (
        <>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {menuList.map((menu) => (
                        <ListItem button key={menu.name} component={Link} to={menu.url}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    )

    return <>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Parrot
                </Typography>

                <div style={{ marginLeft: "auto" }}>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    {
                        GetToken() ? <IconButton sx={{ ml: 1 }} onClick={Logout} color="inherit">
                            <LogoutIcon />
                        </IconButton> : null
                    }
                </div>
            </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    </>
}

export default ParrotDrawer