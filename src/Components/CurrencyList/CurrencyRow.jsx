import React from 'react';

import {PriceCellInner, Img, OpacityComponent, ArrowIcon} from "../styledComponents";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const PriceCell = ({price, fakePrice}) => {
    return (
        <TableCell align="left">
            <PriceCellInner>
                {fakePrice > 0 && <ArrowIcon className={fakePrice > price ? "up" : "down"}/>}
                <span>{fakePrice || price}</span>
            </PriceCellInner>
        </TableCell>
    )
}

export const CurrencyRow = ({crypto, imitatePrice}) => {
    const [triggerOpacity, setTriggerOpacity] = React.useState(false)
    let triggerPositive
    let triggerNegative
    let classes

    React.useEffect(() => {
        if (imitatePrice !== crypto.price) {
            setTriggerOpacity(true)

            setTimeout(() => {
                setTriggerOpacity(false)
            }, 600)
        }
    }, [crypto, imitatePrice])

    if (triggerOpacity) {
        if (imitatePrice > crypto.price) {
            triggerPositive = "triggerOpacityPositive"
        } else if (imitatePrice < crypto.price && imitatePrice !== 0) {
            triggerNegative = "triggerOpacityNegative"
        }
    }

    classes = `initOpacity ${triggerPositive || triggerNegative || ""}`

    return (
        <TableRow className={classes} component={OpacityComponent}>
            <TableCell align="center" style={{position: "relative"}}>
                <Img src={crypto.imageUrl} alt="crypto"/>
            </TableCell>
            <TableCell>{crypto.name}</TableCell>
            <TableCell>{crypto.symbol}</TableCell>
            <PriceCell price={crypto.price} fakePrice={imitatePrice}/>
            <TableCell align="center">{crypto.marketCap}</TableCell>
        </TableRow>
    )
};