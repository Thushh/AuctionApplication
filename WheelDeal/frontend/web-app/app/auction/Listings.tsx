'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';
import AppPagination from '../components/AppPaginations';
import { getData } from '../actions/auctionActions';
import { Auction, PagedResult } from '@/types';
import Filters from './Filters';
import { useParamsStore } from '@/hooks/useParamStore';
import { useShallow } from 'zustand/shallow';
import qs from "query-string"



export default function Listings() {
    const [data, setData] = useState<PagedResult<Auction>>();
    const params = useParamsStore(useShallow(state => (
        {
            pageNumber: state.pageNumber,
            pageSize: state.pageSize,
            searchTerm: state.searchTerm,

        }
    )))
    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({ url: '', query: params }, { skipEmptyString: true })
    function setPageNumber(pageNumber: number) {
        setParams({ pageNumber })

    }

    useEffect(() => {
        getData(url).then(data => {
            setData(data)
        }
        )

    }, [url]);
    if (!data) return <h3>Loading ...</h3>



    return (
        <>
            <Filters />
            <div className="grid grid-cols-4 gap-6">
                {data && data.results.map((auction) => (
                    <AuctionCard
                        key={auction.id}
                        auction={auction}

                    />
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                <AppPagination pageChanged={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount} />

            </div>
        </>

    );
}