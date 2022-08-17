import type { NextPage } from 'next'
import { useRouter } from "next/router";
import { useRef , useEffect, useState} from 'react';
import { sculptToMinimalRenderer } from "shader-park-core";

import firebaseApp from '../../firebase/clientApp'

import { ref, getDatabase, query, orderByChild } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';

const database = getDatabase(firebaseApp);

const Sculpture = (props: any) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const router = useRouter();
    let shaderSource = '';
    let [snapshot, loading, error] = useObject(ref(database, `sculptures/${router.query?.id}`));
    let triggerOnce = false;

    if(!loading && !error && snapshot ) {
        let sculp = snapshot.val();
        if(sculp) {
            shaderSource = sculp.shaderSource;
            console.log('sculp', sculp)
            if(!triggerOnce && shaderSource.length) {
                triggerOnce = true;
                const divElement = canvasRef.current;
                console.log(divElement)
                sculptToMinimalRenderer(divElement, shaderSource);    
            }
        }
    }
    if(error) {
        console.error(error)
    }
        

    

    
    

    // useEffect(() => {
    //     if(!triggerOnce && shaderSource.length) {
    //         triggerOnce = true;
    //         const divElement = canvasRef.current;
    //         console.log(divElement)
    //         sculptToMinimalRenderer(divElement, shaderSource);    
    //     }
    // }, []);

    return (
        <canvas className='w-screen h-screen' ref={canvasRef}/>
    )
    
}

export default Sculpture