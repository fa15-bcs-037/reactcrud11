import React from 'react';
import Tab from '../components/Table3/table2';

export  default(props)=>
{
    console.log(props.location.state);

    return (

        <Tab>{props.location.state}</Tab>

    )
}