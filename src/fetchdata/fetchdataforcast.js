import Axios from "axios";

const urlforcast="https://api.openweathermap.org/data/2.5/forecast?appid=595470776717d78b6a320d5b79bffade&units=metric&q="
export const getdatafromapiforcast = async (location) => {
    try {
        const response = await Axios.get(urlforcast+location);
        return response;
    } catch (error) {
        // console.log(error.response)
        return error.response

    }
}

