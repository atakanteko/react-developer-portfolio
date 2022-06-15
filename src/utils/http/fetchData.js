export const apiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'portfolio5.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const data = await fetch(url, options);
    return await data.json();
}