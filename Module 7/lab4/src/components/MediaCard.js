
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Post Title.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Post narration.
        </Typography>
      </CardContent>
    </Card>
  );
}