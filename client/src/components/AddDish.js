import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const myStyles = makeStyles(() => ({}));

const AddDish = ({
    dishNameList,
    ingredientNameList,
    setIngredientNameList,
    dish,
    setDish,
}) => {
    const classes = myStyles();

    const [dishName, setDishName] = useState('');
    const [ingredient, setIngredient] = useState('');

    const handleClickAddDishName = () => {
        setDishName('');
        setDish({
            ...dish,
            [dishName]: [...ingredientNameList],
        });
        setIngredientNameList([]);
        console.log(ingredientNameList);
    };

    const handleClickAddIngredients = () => {
        setIngredientNameList([...ingredientNameList, ingredient]);
        setIngredient('');
    };

    const handleChangeAddDishName = (e) => {
        setDishName(e.target.value);
    };

    const handleChangeAddIngredients = (e) => {
        setIngredient(e.target.value);
    };

    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ margin: '20px 0px' }}
            >
                <Grid item xs={12} sm={4}>
                    <Card>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                        >
                            <Grid
                                item
                                xs={9}
                                direction='row'
                                justify='center'
                                alignItems='center'
                            >
                                <CardContent>
                                    <form noValidate autoComplete='off'>
                                        <Grid item xs={6}>
                                            <TextField
                                                name='dishName'
                                                type='text'
                                                id='dishName'
                                                label='dishName'
                                                variant='outlined'
                                                placeholder='dishName'
                                                value={dishName}
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={
                                                    handleChangeAddDishName
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                name='ingredients'
                                                type='text'
                                                id='ingredients'
                                                label='ingredients'
                                                variant='outlined'
                                                placeholder='ingredients'
                                                value={ingredient}
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={
                                                    handleChangeAddIngredients
                                                }
                                            />
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                container
                                justify='center'
                                alignItems='center'
                            >
                                <CardActions>
                                    <Button
                                        onClick={() => handleClickAddDishName()}
                                    >
                                        Add Dish
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            handleClickAddIngredients()
                                        }
                                    >
                                        Add Ingredient
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default AddDish;
