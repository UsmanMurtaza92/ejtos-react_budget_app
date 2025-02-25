import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyList from './components/CurrencyList';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}
                        <div className='col-md' style={{ paddingLeft: 0 }}>
                            <Budget />
                        </div>        
                        {/* Add Remaining component here under */}        
                        <div className='col-md'>
                            <Remaining />
                        </div>
                        {/* Add ExpenseTotal component here under */}        
                        <div className='col-md'>
                            <ExpenseTotal />                       
                        </div>
                        <div className='col-md'>
                            <CurrencyList />                       
                        </div>
                        {/* Add ExpenseList component here under */}         
                        <ExpenseList />
                        {/* Add ExpenseItem component here under */}        
                        {/* <ExpenseItem /> */}
                        {/* Add AllocationForm component here under */}        
                        <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
