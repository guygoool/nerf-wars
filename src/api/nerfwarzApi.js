import axios from "axios";
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'; //Without this we will get a CORS error
 
export const GenerateGame = async () => {
    const response = await axios.get(PROXY_URL + "https://fk7qq3rvg5.execute-api.eu-central-1.amazonaws.com/dev/playersavailability");
    console.log("GenerateGame result", response.data);
    return response.data;
};
 
export const GetGame = async (gameId) => {
    const response = await axios.get(PROXY_URL + `https://4p192ywr8f.execute-api.eu-central-1.amazonaws.com/dev/game/?gameId=${gameId}`);
    console.log("GetGame result", response.data);
    return response.data;
};

export const StartGame = async (gameId) => {
    const response = await axios.get(PROXY_URL + ` https://qh180nn8xb.execute-api.eu-central-1.amazonaws.com/dev/publishGame/${gameId}`);
    console.log("StartGame result", response.data);
    return response.data;
};