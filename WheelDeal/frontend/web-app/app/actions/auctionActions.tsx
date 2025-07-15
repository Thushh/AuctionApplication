'use server';
import { Auction, PagedResult } from "@/types";


export async function getData(query: string): Promise<PagedResult<Auction>> {
    //const res = await fetch(`http://localhost:6001/search&{query});
    const res = await fetch(`https://run.mocky.io/v3/e2ee566f-f8dd-441c-9d77-35792d0a534d${query}`);
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();

    // Mock data for now
    // const data = {
    //     ...auctionList,
    //     results: auctionList.results.map((auction) => ({
    //         ...auction,
    //         winner: auction.winner === null ? undefined : auction.winner,
    //     })),
    // };


    // return data;
}