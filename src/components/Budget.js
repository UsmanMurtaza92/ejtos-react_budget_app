import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


    const handleBudget = (e) => {
        let budgetValue = e.target.value
        if ( budgetValue > 20000 ) {
            alert(`The value cannot exceed form 20000 and remaining funds £${budget - totalExpenses}`)
        } else if (budgetValue < totalExpenses){
            alert('You cannot reduce the budget value lower than spending')
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budgetValue,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" value={budget} onChange={handleBudget} style={{maxWidth: '150px'}} placeholder='Enter budget' />
        </div>
    );
};
export default Budget;
