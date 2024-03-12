import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'



const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const contador=0
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
        console.log(contador)
        contador+1;
    }, []);

    return {
        images: images, // Si tiene el mismo nombre se pone solo images
        isLoading
    }
}

export default useFetchGifs
