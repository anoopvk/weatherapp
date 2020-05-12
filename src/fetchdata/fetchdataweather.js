import Axios from "axios";

const url = "http://api.openweathermap.org/data/2.5/weather?appid=595470776717d78b6a320d5b79bffade&units=metric&q=";
// const url="./data.json"
export const getdatafromapi = async (location) => {
    try {
        // const response = await Axios.get(url);
        const response = await Axios.get(url+location);
        return response;
    } catch (error) {
        // console.log(error.response)
        return error.response

    }
}

