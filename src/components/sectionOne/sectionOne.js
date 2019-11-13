import React,{useEffect, useState} from 'react';
export default (props) => {
    const [localState, setLocalState] = useState()
    // useEffect(()=>{
    //     console.log("trigger");
    //     setLocalState(props.global+"Ok");
    // },[props.global]);
    return (
        <>
            <h1>{props.id.id}</h1>
        </>
    );
}