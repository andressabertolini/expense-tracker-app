import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    console.log(context)

    return(
        <div>
            <h3>History</h3>
            <ul>
            {transsactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}