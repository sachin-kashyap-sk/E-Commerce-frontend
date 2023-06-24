import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import cart from "../../Assets/cart.png";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetState } from "../ReduxSection/Auth/AuthSlice";
import classes from "../../Styles/Nav/Nav.module.css";
import HomeSearchBar from "../Pages/Home/HomeSearchBar";
const drawerWidth = 300;

const navItems = [
  {
    id: 1,
    linkTo: "/",
    title: "All Product",
  },
  {
    id: 2,
    linkTo: "/Men",
    title: "Men",
  },

  {
    id: 3,
    linkTo: "/Women",
    title: "Women",
  },
  {
    id: 4,
    linkTo: "/About",
    title: "About",
  },

  {
    id: 5,
    linkTo: "/ContactUs",
    title: "Contact Us",
  },
];

function DrawerAppBar(props, result) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const navigation = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const TotalItem = () => {
    let temp = 0;
    products?.forEach((product) =>
      product?.products?.forEach((item) => {
        temp += item.quantity;
      })
    );
    return temp;
  };

  const Logout = () => {
    localStorage.clear();
    dispatch(resetState());
    navigation("/Login");
    return;
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemText
                onClick={() => navigation(item.linkTo)}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="false">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
          className={classes.appBar}
          component="nav"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#000000" }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              {navItems.map((item) => (
                <Button key={item.id} sx={{ color: "#2D2727" }}>
                  <ListItemText onClick={() => navigation(item.linkTo)}>
                    {item.title}
                  </ListItemText>
                </Button>
              ))}
            </Box>

            <Box sx={{ width: "50%" }}>
              <HomeSearchBar />
            </Box>
            <Badge color="info" overlap="circular" badgeContent={TotalItem()}>
              <img onClick={() => navigation("/cart")} src={cart} alt="cart" />
            </Badge>

            <Box>
              <Button sx={{ color: "#2D2727" }} onClick={Logout}>
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 0 }}>
          <Toolbar />
        </Box>
      </Box>
    </Container>
  );
}

export default DrawerAppBar;
