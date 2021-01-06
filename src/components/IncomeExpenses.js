import React from 'react'

export const IncomeExpenses = () => {
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="moneyPlus" className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="moneyMinus" className="money minus">-$0.00</p>
            </div>
        </div>
    )
}