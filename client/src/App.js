import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

import './App.css';
import AddDish from './components/AddDish';
import DishList from './components/DishList';

function App() {
    const [dishNameList, setDishNameList] = useState([]);
    const [ingredientNameList, setIngredientNameList] = useState([]);
    const [dish, setDish] = useState({});

    return (
        <>
            <Typography
                variant='h4'
                component='h1'
                style={{
                    textAlign: 'center',
                    margin: 50,
                }}
            >
                PagerDuty Dishes
            </Typography>
            <AddDish
                dishNameList={dishNameList}
                setDishNameList={setDishNameList}
                ingredientNameList={ingredientNameList}
                setIngredientNameList={setIngredientNameList}
                dish={dish}
                setDish={setDish}
            />
            <DishList
                dishNameList={dishNameList}
                setDishNameList={setDishNameList}
                ingredientNameList={ingredientNameList}
                setIngredientNameList={setIngredientNameList}
                dish={dish}
            />
        </>
    );
}

export default App;
