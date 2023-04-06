import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import useParticipantLogicHook from "../logic-hooks/participant";
import loginBckImg from "../../../assets/images/loginBckImg.jpg";

export default function Participant({
  participant,
  onSelect,
  alreadyVoted,
  isSelected,
}) {
  const { voted, handleSelectedVote } = useParticipantLogicHook(
    alreadyVoted,
    participant,
    isSelected,
    onSelect
  );
  return (
    <Card
      elevation={voted ? 10 : 1}
      sx={{ maxWidth: 300 }}
      style={alreadyVoted ? { opacity: 0.5 } : {}}
    >
      <CardMedia
        sx={{ height: 150 }}
        image={participant.profile_picture || loginBckImg}
        title={participant.fullname}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {participant.fullname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {participant.description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          float: "right",
          cursor: "pointer",
        }}
        onClick={() => handleSelectedVote(participant)}
      >
        <p>Vote</p>
        {voted ? (
          <ThumbUpAltIcon fontSize="large" />
        ) : (
          <ThumbUpOffAltIcon fontSize="large" />
        )}
      </CardActions>
    </Card>
  );
}
