import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export default function Participant() {
  return (
    <Card elevation={5} sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 120 }}
        image="https://cc-prod.scene7.com/is/image/CCProdAuthor/how_to_cut_out_images_photoshop_P1_mobile_360x270"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          float: "right",
        }}
      >
        <p>Vote</p>
        <ThumbUpOffAltIcon fontSize="large" />
      </CardActions>
    </Card>
  );
}
