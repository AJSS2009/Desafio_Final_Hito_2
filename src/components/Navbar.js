import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/logo.png";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/icons-material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" backgroundColor= "grey" boxShadow="none">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ flexGrow: 1 }}
          >
            <img src={Logo} alt="Logo" height="50px" sx={{ marginRight: "1px" }} />
          </IconButton>
          <Typography variant="h6" color="textPrimary" component="p">
            Hola Invitado
          </Typography>
          <div>
            <Button variant="outlined">
              Registrate
              </Button>
            <IconButton aria-label="Mostrar Carrito" color="black">
                <ShoppingCart fontSize="large" color="primary" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
