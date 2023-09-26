import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart } from "@mui/icons-material";
import accounting from "accounting";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({
  product: { id, nombre, tipo, precio, imagenUrl, rating, descripcion },
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography sx={{maxWidth: "3rem"}} variant="h5" color="textSecondary">
            {accounting.formatMoney(precio, "$")}
          </Typography>
        }
        title={nombre}
      />
      <CardMedia
        component="img" height="194" image={imagenUrl} alt={nombre}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {tipo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="Agragar al Carrito">
          <AddShoppingCart fontSize="large" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {Array({ rating })
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Mostrar mas..."
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{descripcion}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
