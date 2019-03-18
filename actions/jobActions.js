import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

const buildQueryUrl = (zip) => {
    let query = qs.stringify({...QUERY_PARAMS,l:zip});
    return `${JOB_ROOT_URL}${query}`;
};

export const getJobs = (region) => async (dispatch) => {
    axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${region.latitude}%2C${region.longitude}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=ORkuA4nMMKQfyBQY6WW7&app_code=hTBOIOdIMl-SKFmE22Y0gw`)
        .then(res => {
            let zip = res.data.Response.View[0].Result[0].Location.Address.PostalCode;
            console.log(zip);
            const url =  buildQueryUrl(zip);
            console.log(url);
            // axios.get(url)
            //     .then(response => console.log(response))
            //     .catch(err => console.error(err.response))
        })
        .catch(err => {
            console.error(err.response.data);
        })
};