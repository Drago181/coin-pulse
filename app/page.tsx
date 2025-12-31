import {Suspense} from "react";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import { CoinOverviewFallback, TrendingCoinsFallback } from "@/components/home/fallback";

// Local dummy data for TrendingCoin[] using local assets for images
const dummyTrendingCoins: TrendingCoin[] = [
    {
        item: {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'btc',
            market_cap_rank: 1,
            thumb: '/assets/logo.svg',
            large: '/assets/logo.svg',
            data: {
                price: 87621,
                price_change_percentage_24h: { usd: 1.23 },
            },
        },
    },
    {
        item: {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'eth',
            market_cap_rank: 2,
            thumb: '/assets/logo.svg',
            large: '/assets/logo.svg',
            data: {
                price: 2310.45,
                price_change_percentage_24h: { usd: -0.85 },
            },
        },
    },
    {
        item: {
            id: 'solana',
            name: 'Solana',
            symbol: 'sol',
            market_cap_rank: 3,
            thumb: '/assets/logo.svg',
            large: '/assets/logo.svg',
            data: {
                price: 189.12,
                price_change_percentage_24h: { usd: 4.56 },
            },
        },
    },
];



const Page = async () => {



    return (
        <main className='main-container'>
            <section className='home-grid'>
                <Suspense fallback={<CoinOverviewFallback />}>
                    <CoinOverview />
                </Suspense>

                <Suspense fallback={<TrendingCoinsFallback />}>
                    <TrendingCoins />
                </Suspense>
            </section>
            <section className='w-full mt-7 space-y-4'>
                <p>Categories</p>
            </section>
        </main>
    )
}
export default Page
