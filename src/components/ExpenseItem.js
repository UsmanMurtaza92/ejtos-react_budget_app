import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button onClick={event=> increaseAllocation(props.name)} style={{height: '20px', width: '20px', borderRadius: '100%', backgroundColor: '#55a85c', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', outline: 'none', border: 'none', fontWeight: 'bold', fontSize: '19px'}}>+</button></td>
            <td><button onClick={event=> decreaseAllocation(props.name)} style={{height: '20px', width: '20px', borderRadius: '100%', backgroundColor: '#b3231a', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', outline: 'none', border: 'none', fontWeight: 'bold', fontSize: '22px'}} >-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
