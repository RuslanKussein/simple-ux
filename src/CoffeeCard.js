import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    cardMedia: {
        minHeight: "150px"
    }
});

const CoffeeCard = ({
    avatarSrc,
    title,
    subtitle,
    description,
    imgSrc
}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={avatarSrc}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />

            <CardMedia className={classes.cardMedia} image={imgSrc}/>

            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="medium" color="secondary">Buy</Button>
                <Button variant="outlined" size="medium" color="secondary">Offer</Button>
            </CardActions>
        </Card>
    );
};

export default CoffeeCard;
