import GifExpertApp from "../GifExpertApp";


export const getGifs = async (category) => {
    console.log(category)
    const dir = `https://api.giphy.com/v1/gifs/search?api_key=nsGlpgNvNVbpjYIPjVMiBbF063eI6Fm1&q=${category}&limit=20`;
    const url = dir;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url
    }))
    //console.log(gifs)
    return(gifs);
}
