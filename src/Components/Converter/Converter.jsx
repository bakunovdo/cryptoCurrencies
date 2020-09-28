import React from "react";


import {ConverterComponent, ConverterOuter, ConverterRow} from "../styledComponents";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    input: {
        marginRight: theme.spacing(4),
        maxWidth: 150
    },
    formControl: {
        minWidth: 90
    },
}));


const cash = [
    {id: 1, symbol: "USD", price: 1}
]

function toMenuItem({id, symbol, price}) {
    return <MenuItem key={id} price={price} value={symbol}> {symbol} </MenuItem>
}

function createSelect(crypto, cash) {
    let cryptoSel = []
    let cashSel = []

    if (crypto?.length) {
        cryptoSel = crypto.map(toMenuItem)
    }
    if (cash?.length) {
        cashSel = cash.map(toMenuItem)
    }

    return [...cashSel, ...cryptoSel]
}

function createHashCurrency(array) {
    let obj = {}

    for (let coin of array) {
        obj[coin.symbol] = {price: coin.price}
    }

    return obj
}

export const Converter = (props) => {
    const classes = useStyles();
    //upRow
    const [firstSelect, setFirstSelect] = React.useState('')
    const [firstValue, setFirstValue] = React.useState(0)
    //downRow
    const [secondSelect, setSecondSelect] = React.useState('')
    const [secondValue, setSecondValue] = React.useState(0)

    const [hashTable, setHashTable] = React.useState({})
    const [isFirstEdit, setIsFirstEdit] = React.useState(false)

    const setFirstRow = (symbol, price) => {
        setFirstSelect(symbol)
        setFirstValue(price)
    }

    const setSecondRow = (symbol, price) => {
        setSecondSelect(symbol)
        setSecondValue(price)
    }

    const swapRowsValues = () => {
        const tempValue = firstValue
        const tempSelect = firstSelect

        setFirstValue(secondValue)
        setFirstSelect(secondSelect)

        setSecondSelect(tempSelect)
        setSecondValue(tempValue)
    }

    const handleChangeFirstSelect = (event) => {
        const symbol = event.target.value
        if (symbol === secondSelect) {
            swapRowsValues()
        }
        setFirstRow(symbol, 1)
    };

    const handleChangeSecondSelect = (event) => {
        const symbol = event.target.value
        if (symbol === firstSelect) {
            swapRowsValues()
        }
        setSecondRow(symbol, 1)
    };

    const handleChangeFirstInput = (event) => {
        setIsFirstEdit(true)
        setFirstValue(event.target.value)
    }

    const handleChangeSecondInput = (event) => {
        setIsFirstEdit(false)
        setSecondValue(event.target.value)
    }


    React.useEffect(() => {
        if (props.crypto.length) {
            setHashTable(createHashCurrency([...cash, ...props.crypto]))
        }
    }, [props.crypto])

    React.useEffect(() => {
        if (props.crypto.length) {
            const cashPrice = hashTable[cash[0].symbol].price
            const cryptoPrice = hashTable[props.crypto[0].symbol].price

            setFirstRow(cash[0].symbol, cashPrice * cryptoPrice)
            setSecondRow(props.crypto[0].symbol, 1)
        }
    }, [hashTable])


    React.useEffect(() => {
        if (props.crypto.length) {
            const secondPrice = hashTable[secondSelect].price
            const firstPrice = hashTable[firstSelect].price

            if (isFirstEdit) {
                let amount = (firstValue * firstPrice) / secondPrice
                setSecondValue(amount.toFixed(2))
            } else {
                const amount = (secondValue * secondPrice) / firstPrice
                setFirstValue(parseFloat(amount.toFixed(3)))
            }
        }
    }, [firstValue, secondValue, isFirstEdit])


    let SelectElements = createSelect(props.crypto, cash)

    return (
        <ConverterOuter>
            <ConverterComponent>
                <ConverterRow>
                    <TextField className={classes.input}
                               value={firstValue}
                               onChange={handleChangeFirstInput}
                               variant="outlined"
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select value={firstSelect} onChange={handleChangeFirstSelect}>
                            {SelectElements}
                        </Select>
                    </FormControl>
                </ConverterRow>
                <ConverterRow>
                    <TextField className={classes.input}
                               value={secondValue}
                               onChange={handleChangeSecondInput}
                               variant="outlined"
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select value={secondSelect} onChange={handleChangeSecondSelect}>
                            {SelectElements}
                        </Select>
                    </FormControl>
                </ConverterRow>
            </ConverterComponent>
        </ConverterOuter>
    )
};