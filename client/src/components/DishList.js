import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const myStyles = makeStyles(() => ({}));

const DishList = ({
    dishNameList,
    setDishNameList,
    ingredientNameList,
    setIngredientNameList,
    dish,
}) => {
    const classes = myStyles();

    const handleDeleteClick = (dishName) => {
        setDishNameList(delete dish[dishName]);
    };
    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <Grid item xs={12} sm={4}>
                    {Object.keys(dish).map((dishName, idx) => (
                        <Card key={idx}>
                            <Grid
                                container
                                direction='row'
                                justify='center'
                                alignItems='center'
                            >
                                <Grid item xs={9}>
                                    <CardContent>
                                        <Typography>{dishName}</Typography>

                                        {dish[dishName].map((ingredient, k) => (
                                            <Typography>
                                                {ingredient}
                                            </Typography>
                                        ))}
                                    </CardContent>
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                    container
                                    justify='center'
                                    alignItems='center'
                                >
                                    <Button
                                        onClick={() =>
                                            handleDeleteClick(dishName)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default DishList;
