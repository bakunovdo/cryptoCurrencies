import React, {useEffect, useState} from 'react';

import './App.css';

import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./Theme/GlobalStyle";
import {lightTheme, darkTheme} from "./Theme/Themes"
import {useDarkMode} from "./Theme/useDarkMode"

import {AppComponent, AppInner, Paper} from "./Components/styledComponents";
import {CurrencyList} from "./Components/CurrencyList";
import {Converter} from "./Components/Converter";
import {apiCrypto} from "./api/api";

import {ThemeProvider as ThemeProviderMui} from "@material-ui/styles"
import {createMuiTheme} from "@material-ui/core";
import Toggle from "./Theme/toogle";

/**
 * @property {Number} coin.CoinInfo.Id
 * @property {String} coin.CoinInfo.ImageUrl
 * @property {String} coin.CoinInfo.Internal
 * @property {Number} coin.RAW.USD.PRICE
 * @property {Number} coin.DISPLAY.USD.MKTCAP
 * */

function createCoin(coin) {
    return {
        id: coin.CoinInfo.Id,
        name: coin.CoinInfo.FullName,
        imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
        symbol: coin.CoinInfo.Internal,
        price: +coin.RAW.USD.PRICE.toFixed(3),
        marketCap: coin.DISPLAY.USD.MKTCAP
    }
}

const darkThemeMui = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
    const [cryptoData, setCryptoData] = useState([])

    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        apiCrypto.getTopByMarket().then(({Data}) => {
            const crypto = Data.map(createCoin)
            setCryptoData(crypto)
        })
    }, [])

    return (
        <ThemeProvider theme={themeMode}>
            <ThemeProviderMui theme={theme === 'light' ? null : darkThemeMui}>
                <GlobalStyles/>
                <AppComponent>
                    <AppInner>
                        <Paper>
                            <Toggle toggleTheme={themeToggler} isDark={theme === 'dark'}/>
                            <Converter crypto={cryptoData}/>
                            <CurrencyList crypto={cryptoData}/>
                        </Paper>
                    </AppInner>
                </AppComponent>
            </ThemeProviderMui>
        </ThemeProvider>
    );
}

export default App;
