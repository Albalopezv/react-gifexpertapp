// 69. GifExpertApp - Component
//rafc + TAB
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    // 70. Creando una lista de categorias
    //const categories = ['One Punch', 'Samurai X', 'Dragron Ball'];
    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragron Ball'])
    // Tarea: agregar al array con setCategories
    /*
    const handleAdd = () => {
        //setCategories( ['HunterXHunter',...categories ] );
        setCategories( cats => [...cats, 'HunterXHunter'] );
    }*/
    // fin 70.

    // 73. Fetch Api - obtener las imágenes deseadas
    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h2>GifExpertApp</h2>
            {/** 71. Componente AddCategory */}
             {/** 72. Componente AddCategory comunicarse entre componentes */}
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/*<button onClick ={handleAdd}>Agregar</button>*/}
            {/*Incluir las cetegorías en html:*/}
            <ol>
                {
                    /*
                    // el map recibe dos argumentos por defecto: elemento del array y el indice
                    categories.map( category => {
                        // dará error de duplicado de Key de esta forma, pero esto ser´´a cogido desde la BBDD
                        return <li key={category}> {category} </li>
                    })
                    */
                   // 73. Fetch API - obtener las imágenes deseadas:
                   categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category={category}
                        />
                    ))

                }
            </ol>
        </>
    )
}


