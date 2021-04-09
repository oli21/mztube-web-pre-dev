/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CourseCard from './CourseCard';
import { database } from '../../firebase/firebase'
import Carousel from 'react-material-ui-carousel';



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "2rem",
        flexGrow: 1,
    },
    gridContainer: {
        paddingLeft: "3rem",
        paddingRight: "3rem"

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    navbtn: {
        color: "red"

    }
}));

export default function CourseList() {
    const classes = useStyles();
    const [courses, setCourses] = React.useState([]);
    const [windowWidth, setWindowWidth] = useState(0);

    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    const fetchData = async () => {
        console.log("fetching");

        const collectionRef = database.ref("courselist");

        collectionRef.on("value", (snapShot) => {
            const courses = snapShot.val();
            let courseList = [];
            for (let id in courses) {
                courseList.push(courses[id]);
            }
            setCourses(courseList);
        });
    }

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    const listToMatrix = (list, elementsPerSubArray) => {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
            matrix[k].push(list[i]);
        }

        return matrix;
    }
    const itemDisplay = (numOfItems, gridCol) => {
        var tempArr = listToMatrix(courses, numOfItems)

        var result = tempArr.map((courses, idx) =>
            <div className={classes.gridContainer} key={idx}>
                <Grid container spacing={3}>
                    {
                        // course id is not unique in DB
                        courses.map(item => <Grid item xs={gridCol} key={item.coursePrice}>
                            <CourseCard
                                rating={item.courseRating}
                                price={item.coursePrice}
                                numOfDownloads={item.numOfDownloads}
                                title={item.courseTitle}
                                author={item.courseAuthor}
                                isBestSeller={false} img={item.courseImage} />
                        </Grid>
                        )
                    }
                </Grid>
            </div>
        )
        return result;
    }

    const displayCourse = () => {
        if (windowWidth > 1200)
            return itemDisplay(4, 3);
        else if (windowWidth > 700)
            return itemDisplay(2, 6);
        else
            return itemDisplay(1, 12);
    }
    return (
        <div className={classes.root}>
            <Carousel
                indicators={false}
                animation="slide"
                autoPlay={false}
                timeout={500}
                navButtonsAlwaysVisible
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'white',
                        color: "#0f7c90",
                        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.65)'

                    },

                }}
            >
                {displayCourse()}
            </Carousel>
        </div>
    );
}
