import GifItem from './GifItem';
import  useFetchGif  from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGif( category );
    
    return (
        <>
            {<h3>{category}</h3>} {/* //Nombre de la Categoria */}
            {
                isLoading && ( <h2>Cargando ...</h2> ) // se ejecuta solo el if si es
            }
            <div className='card-grid'>
                {images.map(image => (//Return implícito
                    <GifItem key={image.id}
                        { ...image } /* Exparcir images trae todas las props de image */
                    />
                ))}
            </div>
        </>
    )
}

export default GifGrid;
