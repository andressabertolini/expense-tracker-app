import React, {useState} from 'react'

export const AddTransaction = () => {
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." />
                </div>
                <div>
                    <label htmlFor="amount">
                        Amount<br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." />                  
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
} 