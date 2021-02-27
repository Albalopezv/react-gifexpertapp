// 78. Custom Hooks:
//carga automática, petición automática, cuando por primeraa vez o cuando es necesario la recarga.
//79. useFetchGifs - obtener  imágenes y bandera de carga

import { useState,useEffect } from "react"
//79:
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
   
    //pueden tener un estado:
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //79. : podemos poner efectos a mi custom Hook
    useEffect( () =>{
        
        //aquí hacemos la petición http y traer las imágenes:
        getGifs( category )
            .then(imgs => {

                /*
                setTimeout(()=>{
                    //console.log(imgs)
                    setState({
                        data:imgs,
                        loading: false
                    });
                },3000);
                */
               //80. Anumacions por CSS en nuestra aplicación:
               setState({
                    data:imgs,
                    loading: false
                });
            })

    }, [category]);

    //78:
    /*
    setTimeout(() => {
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
    }, 3000);
    */

    return state; // {data:[], loading:true};

}
