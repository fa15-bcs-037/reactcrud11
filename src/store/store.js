import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';

export const Context=createContext();

export const Provider=(props)=>{

    const [data, setdata]= useState([]);
    useEffect(()=>{
        axios.get('https://personal-app-team.herokuapp.com/api/team').then(res=>{
            console.log("response", res.data);
            setdata(res.data)
        });
    },[]);
    return(
        <Context.Provider value={[data,setdata]}>
            {props.children}
        </Context.Provider>
    );
};
