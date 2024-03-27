import axios from 'axios';


export function startGame() {}

export async function getIsKingInCheckStatus() {
    try {
        const response = await axios.get('http://localhost:5000/mcoen93ns/IsKingInCheck/1.0.0/game');
        return response.data;
    } catch (error) {
        throw error;
    }
}
