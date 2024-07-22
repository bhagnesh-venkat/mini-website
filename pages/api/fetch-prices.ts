import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import connectToDatabase from '../../lib/mongodb';
import Price from '../../models/Price';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    try {
        const response = await axios.get(API_URL);
        const prices = response.data;

        const btcPrice = new Price({ symbol: 'BTC', price: prices.bitcoin.usd });
        const ethPrice = new Price({ symbol: 'ETH', price: prices.ethereum.usd });

        await btcPrice.save();
        await ethPrice.save();

        res.status(200).json({ message: 'Prices fetched and saved' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch prices' });
    }
}