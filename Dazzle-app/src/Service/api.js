// import axios fro m 'axios';

const API_URL = 'http://localhost:3500';

export const getOfferPanel = async () => {
    return await fetch(`${API_URL}/offerPanelData`);
}

export const recommendedSalon = async () => {
    return await fetch(`${API_URL}/recommendedSalon`);
}

export const shop_list = async () =>{

    const URL ='http://localhost:3600/employee';
    return await fetch(`${URL}`);

}

const back_URL = "http://localhost:3600";

export const nearBySalon = async () =>{
    const url =`${back_URL}/nearby/show`;
    return await fetch(url);
}