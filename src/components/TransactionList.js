import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    //console.log(context)

    return(
        <div>
            <h3 className="color-dark-green">History</h3>
            <ul className="transaction-list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>

            <hr />
        </div>
    )
}