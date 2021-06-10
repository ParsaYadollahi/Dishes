import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

import './App.css';
import AddDish from './components/AddDish';
import DishList from './components/DishList';

function App() {
    const [dishNameList, setDishNameList] = useState([]);

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
            />
            <DishList
                dishNameList={dishNameList}
                setDishNameList={setDishNameList}
            />
        </>
    );
}

export default App;
