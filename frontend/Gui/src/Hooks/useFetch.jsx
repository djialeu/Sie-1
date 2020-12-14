import React, {useEffect, useState} from 'react'
import axios from "axios";


const useList = (() => {
    const [listThema, setThematique] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(response => setThematique(listThema => listThema = response.data));
    }, []);
    return [
        listThema,
        setThematique
    ]
});
export default useList