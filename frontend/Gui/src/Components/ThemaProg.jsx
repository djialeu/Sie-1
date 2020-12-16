import React from 'react'
import useList from "../Hooks/useFetch";


const ThemaProg = props => {
    const [listThema, setThematique] = useList('');
    const items = listThema.map(item => <li key={item.id}>{item.name}</li>);

    return (
        <>
            <ul style={{marginTop: "100px"}}>
                {listThema && items}
            </ul>
        </>
    )
};

export default ThemaProg