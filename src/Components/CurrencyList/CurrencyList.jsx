import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {CurrencyRow} from "./CurrencyRow";
import {CurrencyListComponent} from "../styledComponents";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 550
    }
}));


export const CurrencyList = (props) => {
    const [imitatePrice, setImitatePrice] = React.useState({})

    const classes = useStyles()

    React.useEffect(() => {
        if (props.crypto.length) {
            setTimeout(() => {
                const amountRows = Math.floor(Math.random() * (props.crypto.length / 2))
                let newRandomPrice = {...imitatePrice}
                for (let i = 0; i <= amountRows; i++) {
                    const randomRow = Math.floor(Math.random() * (props.crypto.length))
                    const part = props.crypto[randomRow].price / 100
                    const randomPrice = (props.crypto[randomRow].price + (Math.random() * part - part / 2)).toFixed(3)
                    newRandomPrice[randomRow] = parseFloat(randomPrice)
                }
                setImitatePrice(newRandomPrice)
            }, Math.floor(Math.random() * 3500 + 1000))
        }
    }, [imitatePrice, props.crypto])

    return (
        <CurrencyListComponent>
            <TableContainer component={Paper} >
                <Table aria-label="simple table" size="small" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>Name</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Price (USD)</TableCell>
                            <TableCell>Market Cap</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.crypto.map((crypto, id) => (
                            <CurrencyRow key={crypto.id} crypto={crypto} imitatePrice={imitatePrice[id]}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </CurrencyListComponent>
    )
};