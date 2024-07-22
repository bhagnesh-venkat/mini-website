import cron from 'node-cron';
import axios from 'axios';

cron.schedule('*/10 * * * * *', async () => {
    try {
        await axios.get('http://localhost:3000/api/fetch-prices');
        console.log('Prices fetched and saved');
    } catch (error) {
        console.error('Failed to fetch prices:', error);
    }
});

console.log('Cron job started');
