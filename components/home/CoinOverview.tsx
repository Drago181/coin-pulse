'use client';

import React, {useState} from 'react'
import {fetcher} from "@/lib/coingecko.actions";
import Image from "next/image";
import {formatCurrency} from "@/lib/utils";
import {CoinOverviewFallback} from "@/components/home/fallback";
import CandlestickChart from "@/components/CandlestickChart";

const CoinOverview = async () => {
    const [liveInterval, setLiveInterval] = useState<'1s' | '1m'>('1m');
    try {
        const [coin, coinOHLCData] = await Promise.all([
            fetcher<CoinDetailsData>('coins/bitcoin', {
                dex_pair_format: 'symbol'
            }),
            fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
                vs_currency: 'usd',
                days: 1,
                precision: 'full',
            }),
        ]);
        return (
            <div id='coin-overview'>
                <CandlestickChart data={coinOHLCData} coinId='bitcoin' liveInterval={liveInterval}
                                  setLiveInterval={setLiveInterval}>
                    <div className='header pt-2'>
                        <Image src={coin.image.large}
                               alt={coin.name} width={56} height={56}
                        />
                        <div className='info'>
                            <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
                            <h1>{formatCurrency(coin.market_data.current_price.usd, { currency: 'USD' })}</h1>
                        </div>
                    </div>
                </CandlestickChart>
            </div>
        )
    } catch (error) {
        console.error('Failed to load coin overview:', error);
        return <CoinOverviewFallback />;
    }
}
export default CoinOverview
