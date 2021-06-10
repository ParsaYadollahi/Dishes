import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({}));

const INITIAL_DISH_NAME = '';

const AddDish = () => {
    const classes = useStyles();

    const [dishNameList, setDishNameList] = useState([]);
    const [dishName, setDishName] = useState(INITIAL_DISH_NAME);

    const handleClickAddDishName = () => {
        setDishNameList([...dishNameList, dishName]);
        setDishName('');
    };

    const handleChangeAddDishName = (e) => {
        setDishName(e.target.value);
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
                            <Grid item xs={8}>
                                <CardContent style={{ width: '100%' }}>
                                    <form noValidate autoComplete='off'>
                                        <TextField
                                            name='dishName'
                                            type='text'
                                            id='dishName'
                                            label='Dish name'
                                            variant='outlined'
                                            placeholder='Dish name'
                                            value={dishName}
                                            style={{
                                                width: '100%',
                                            }}
                                            onChange={handleChangeAddDishName}
                                        />
                                    </form>
                                </CardContent>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                container
                                direction='row'
                                justify='center'
                                alignItems='center'
                            >
                                <CardActions>
                                    <Button
                                        onClick={() => handleClickAddDishName()}
                                    >
                                        Add dish
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
