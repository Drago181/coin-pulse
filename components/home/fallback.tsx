import React from 'react'
import DataTable from "@/components/DataTable";

export const CoinOverviewFallback = () => {
  return (
    <div id='coin-overview-fallback'>
      <div className='header pt-2'>
        <div className='header-image bg-purple-100/10' />
        <div className='info'>
          <div className='header-line-sm bg-purple-100/10 rounded' />
          <div className='header-line-lg bg-purple-100/10 rounded' />
        </div>
      </div>
      <div className='chart mt-3'>
        <div className='chart-skeleton bg-purple-100/10' />
      </div>
    </div>
  )
}

export const TrendingCoinsFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="name-image bg-purple-100/10" />
          <div className="name-line bg-purple-100/10 rounded" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="price-change">
          <div className="change-icon bg-purple-100/10" />
          <div className="change-line bg-purple-100/10 rounded" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => (
        <div className="price-line bg-purple-100/10 rounded" />
      ),
    },
  ];

  const skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div id='trending-coins-fallback'>
      <h4>Trending Coins</h4>
      <div className='trending-coins-table'>
        <DataTable
          data={skeletonRows}
          columns={columns}
          rowKey={(row, index) => `tr-${index}`}
          headerCellClassName='py-3!'
          bodyCellClassName='py-2!'
        />
      </div>
    </div>
  )
}

export const CategoriesFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => (
        <div className="category-skeleton bg-purple-100/10 rounded" />
      ),
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex items-center gap-1">
          <div className="coin-skeleton bg-purple-100/10" />
          <div className="coin-skeleton bg-purple-100/10" />
          <div className="coin-skeleton bg-purple-100/10" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className="change-cell">
          <div className="change-icon bg-purple-100/10" />
          <div className="value-skeleton-sm bg-purple-100/10 rounded" />
        </div>
      ),
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => (
        <div className="value-skeleton-lg bg-purple-100/10 rounded" />
      ),
    },
    {
      header: '24h Volume',
      cellClassName: 'volume-cell',
      cell: () => (
        <div className="value-skeleton-md bg-purple-100/10 rounded" />
      ),
    },
  ];

  const skeletonRows = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div id='categories-fallback'>
      <h4>Top Categories</h4>
      <DataTable
        data={skeletonRows}
        columns={columns}
        rowKey={(row, index) => `cat-${index}`}
        tableClassName='mt-3'
      />
    </div>
  )
}

export default null;
