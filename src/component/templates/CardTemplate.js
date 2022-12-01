import React from 'react'
import {
    Card, 
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Collapse
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

  
const ExpandMore = styled((props)=> {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))
  

export default function CardTemplate(props)
{
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded)
    }
    return (
        <Card sx={{m : '2rem', opacity: 0.9}} data-testid="card">
            <CardMedia
                component="img"
                image={props.props.logo}
                height="400"
                sx={{ width: 1100 }}
            />
            <CardContent>
                <Typography variant="h3" color="text.secondary">
                    {props.props.title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" >
                        {props.props.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}