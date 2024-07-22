import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrices } from '../store/slices/priceSlice';
import { RootState } from '../store/store';

const PriceTable: React.FC = () => {
    const dispatch = useDispatch();
    const prices = useSelector((state: RootState) => state.prices.data);
    const status = useSelector((state: RootState) => state.prices.status);

    useEffect(() => {
        dispatch(fetchPrices('BTC'));
        const interval = setInterval(() => {
            dispatch(fetchPrices('BTC'));
        }, 10000);

        return () => clearInterval(interval);
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Price Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((price: any) => (
                        <tr key={price._id}>
                            <td>{price.symbol}</td>
                            <td>{price.price}</td>
                            <td>{new Date(price.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceTable;
