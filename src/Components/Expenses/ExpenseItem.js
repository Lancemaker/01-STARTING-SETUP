import './ExpenseItem.css';
import React, { useState } from 'react'; //enables the use of states or react hooks
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//a component in react is just a js function.
//this function receive data, or in react terms a prop. A prop is just data that you previously knows the keys and can call it on the code to make it dynamic. 
function ExpenseItem(props){
    const [dinamicTitle, setTitle]=useState(props.title);//receives a value and then a method that can be called.
    console.log('Expense item evaluated')
    
    const clickHandler=()=>{
        setTitle('Updated!');
       console.log(dinamicTitle);
    }
    return (
        //its className instead of normal css Class to add style
        <Card className='expense-item'>
            {/*for instance this prop will return the date in the key date */}
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                {/* A JSX comment */}
                {/* we can use curly braces to pass js code and then make stuff dynamic as we can see in the line below*/}
                <h2>{dinamicTitle}</h2>
                <div className='expense-item__price'>R${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem