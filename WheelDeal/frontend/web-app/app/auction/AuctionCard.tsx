/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import CountdownTimer from './CountdownTimer'
import CarImage from './CarImage'
import { Auction } from '@/types'

type Props = {
    auction: Auction
}

export default function AuctionCard({ auction }: Props) {
    return (
        <a href='"#'>
            <div
                className='w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-x-hidden'
            >
                <CarImage imageUrl={auction.imageUrl} />
                {/* <div className=' absolute bottom-2 left-2'>
                    <CountdownTimer auctionEnd={auction.auctionEnd} />
                </div> */}

            </div>
            <div className='flex justify-between items-center mt-4'>
                <h3 className='text-gray-700'>{auction.make} {auction.model}</h3>
                <p className='font-semibold text-sm'>{auction.year}</p>
            </div>
            <CountdownTimer auctionEnd={auction.auctionEnd} />

        </a>

    )
}
