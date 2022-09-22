export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6de9d1874cmshaa8f835bf643c9fp1d8fc7jsn0e3b247dab47',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6de9d1874cmshaa8f835bf643c9fp1d8fc7jsn0e3b247dab47',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
  


export const fetchData = async (url, options) => {
    const response = await(fetch(url, options))
    const data = await response.json()
    return data
}