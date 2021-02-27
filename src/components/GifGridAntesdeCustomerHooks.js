//73. Fetch API - Obtener las imágenes deseadas
//74. useEffect - para no permitir bulces infinitos en la llamada a la api
//75.Mostar los títulos de las imágenes
// 77. Helpers - getGifs:
import React, { useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    //75: cramos un nuevo estado:
    const [images, setImages] = useState([]);
    //74:
    //const [count, setcount] = useState(0);
    /*
    useEffect( () =>{
        getGifs();
    }, []);*/
    //77. Helpers - getGifs: importamos:
    useEffect( () =>{
        getGifs(category)
            .then(imgs => setImages(imgs))
    }, [category]);

    //73:
    // En este Gif, yo necesito recibir la categoría y has una petición http:
    // 1º creamos una función
    //77. Helpers -getGifs:
    /*
    const getGifs = async() => {

        //73:
        //hacemos la petición para traer las imágenes q corresponden a esta categoría
        //https://developers.giphy.com/docs/api/endpoint#search
        //copiar Gif URL api.giphy.com/v1/gifs/search y abrir POSTMAN método GET: key api_key y VALUE  el password, key = q y VALUE Rick and Morty, key = limir VALUE = 10
        //copiamos la url generada con todo, y los espacio lo sustituimos por = +
        //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=pw8SraOg39SWH5jYaFUiEcYsGWtT8Ixz';
        // 77. Helpers - getGifs:
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=pw8SraOg39SWH5jYaFUiEcYsGWtT8Ixz`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        //console.log(data); // miramos el array , y ver lo q necesitamos, como el id, user, img...

        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });

        console.log(gifs);
        // set Imgs

        //75:
        setImages( gifs );

    }
*/
    //getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                
                {/*74:
                <h3>{count}</h3>
                <button onClick={() => setcount(count +1 )}></button>
                */}
                {/**75: mostar los títulos de las imágenes: */}
                
                    {
                        images.map( (img) => (
                            //images.map( ({id,title})  => (
                            /*<li key={id}> {title} </li>*/
                            //creamos otro componentes GifGridItem.js
                            //y voy a mostrar aqui mi GifGridItem, lo importamos
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                
            </div>
        </>
    )
}
