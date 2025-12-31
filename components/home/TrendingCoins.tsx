import React from 'react'
import DataTable from "@/components/DataTable";
import {fetcher} from "@/lib/coingecko.actions";
import Link from "next/link";
import Image from "next/image";
import {cn, formatCurrency} from "@/lib/utils";
import {TrendingDown, TrendingUp} from "lucide-react";

const TrendingCoins = async () => {
    try {
        const trendingCoins = await fetcher<{ coins: TrendingCoin[]
        }>('/search/trending', undefined, 300);

        const columns: DataTableColumn<TrendingCoin>[] = [
            {
                header: 'Name',
                cellClassName: 'name-cell',
                cell: (coin) => {
                    const item = coin.item;
                    return (
                        <Link href={`/coins/${item.id}`} className="flex items-center gap-3">
                            <Image src={item.large} alt={item.name} width={36} height={36} />
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-xs text-purple-200/70 uppercase">{item.symbol}</p>
                            </div>
                        </Link>
                    );
                },
            },
            {
                header: '24h Change',
                cellClassName: 'change-cell',
                cell: (coin) => {
                    const item = coin.item;
                    const change = item.data.price_change_percentage_24h.usd;
                    const isTrendingUp = change > 0;
                    return (
                        <div className={cn('flex items-center gap-2', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
                            {isTrendingUp ? (
                                <TrendingUp width={16} height={16} />
                            ) : (
                                <TrendingDown width={16} height={16} />
                            )}
                            <span>{Math.abs(change).toFixed(2)}%</span>
                        </div>
                    );
                },
            },
            {
                header: 'Price',
                cellClassName: 'price-cell',
                cell: (coin) => (
                    <span>{formatCurrency(coin.item.data.price, { currency: 'USD' })}</span>
                ),
            },
        ];

        return (
            <div id='trending-coins'>
                <h4>Trending Coins</h4>
                    <DataTable
                        data={trendingCoins?.coins?.slice(0,6) || []}
                        columns={columns}
                        rowKey={(row) => row.item.id}
                        headerCellClassName='py-3!'
                        bodyCellClassName='py-2!'
                    />
            </div>
        )
    } catch (error) {
        console.error('Failed to load trending coins:', error);
        return (
            <div id='trending-coins'>
                <h4>Trending Coins</h4>
                <p>Failed to load trending coins.</p>
            </div>
        );
    }
}
export default TrendingCoins
