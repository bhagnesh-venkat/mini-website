import React from 'react';
import { wrapper } from '../store/store';
import PriceTable from '../components/PriceTable';

const Home: React.FC = () => {
    return (
        <div>
            <PriceTable />
        </div>
    );
};

export default wrapper.withRedux(Home);
