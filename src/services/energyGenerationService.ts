
import { API_URL } from '../config/config';
export const fetchEnergyData = async () => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching data');
        }

        const result = await response.json();  
        return result.data;
    } catch (error) {
        console.error(error);
    }

}
