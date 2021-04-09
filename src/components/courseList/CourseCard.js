import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const StyledRating = withStyles({
    iconFilled: {
        color: "#eb8a2f",
        
    },

})(Rating);

const useStyles = makeStyles({
  root: {
    width: "100%",
    
  },
  author: {
    fontSize: "0.85rem",
    fontWeight: "lighter",
    color: "grey",
  },
  title: {
    fontSize: "1.05rem",
    fontWeight: "bold",
    height: "2rem",
    whiteSpace: "nowrap",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // display: "flex",
    // alignItems: "center"
  },
  rating: {
    marginTop: "0.5rem",
    display: "flex",
  },
  ratingValue: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    paddingRight: "0.5rem",
    color: "#be5a0e",
  },
  ratingText: {
    fontSize: "0.8rem",
    fontWeight: "lighter",
    color: "grey",
    paddingLeft: "0.5rem",
  },
  price: {
    // marginBottom: "0.5rem",
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  bestSeller: {
    backgroundColor: "#ffe799",
    color: "#593d00",
    fontSize: "0.8rem",
    padding: "0.3rem 0.4rem",
    fontWeight: "bold",
    borderRadius: "7px",
  },
  cardContent: {
    paddingLeft: "0.5rem",
  },
});

export default function CourseCard({ rating, price, numOfDownloads, title, author, isBestSeller, img }) {
    const classes = useStyles();
    // const rating = 4.6;
    // const price = "$200";
    // const numOfDownloads = "350,990";
    // const title = "2021 Complete Python Bootcamp From Zero to Hero in Python";
    // const author = "John Doe";
    // const isBestSeller = true;
    // const img = "https://res.cloudinary.com/dv244dkbr/image/upload/v1615409755/Mztube/1_xi2cov.jpg";

    return (
        <Card data-testid="course-card" className={classes.root} variant="outlined" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                    <div data-testid="course-card-title" className={classes.title}>{title}</div>
                    <span data-testid="course-card-author" className={classes.author}>{author}</span>
                    <div className={classes.rating} >
                        <span data-testid="course-card-rating" className={classes.ratingValue}>{rating}</span>
                        <StyledRating
                            size="small"
                            precision={0.5}
                            value={rating}
                            readOnly
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                        <span data-testid="course-card-downloads" className={classes.ratingText}>({numOfDownloads})</span>
                    </div>

                    <div data-testid="course-card-price" className={classes.price}> {"$" + price}</div>
                    {isBestSeller && <span className={classes.bestSeller}>Bestsseller</span>}

                </CardContent>
            </CardActionArea>

        </Card>
    );
}
