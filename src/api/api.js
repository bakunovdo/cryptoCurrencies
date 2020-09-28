import axios from "axios";
//https://www.cryptocompare.com/cryptopian/api-keys

const instance = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data/",
    headers: {
        authorization: "Apikey d6b325a068ef7f9b96fe676ab17062e3c61b7067f01216793dc2a911cd279eec"
    }
})

export const apiCrypto = {
    getTopByMarket() {
        return instance.get(`top/mktcapfull?limit=10&tsym=USD`).then(({data})=> data)
    }
}