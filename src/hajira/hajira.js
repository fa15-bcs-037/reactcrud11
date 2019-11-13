/**
 * Created by ciit on 30-Oct-19.
 */
import React, {useState,useEffect} from 'react';
import Tab from '../components/Table3/table2';
import SectionOne from '../components/sectionOne/sectionOne';
import axios from 'axios';
export  default(props)=>
{
    const [id, setid] = useState([]);

    useEffect(()=>{
        axios.get
        ('https://us-central1-fur-baby-tracker-dev.cloudfunctions.net/getPetOwnerData?petOwnerUId=6SxzQI3aRTVjYZQWKUftrD0MPWi2')
            .then(res=>{
                console.log("response", res.data);
                // setid(res.data.id)
            });
    },[]);

    return (
        <>
        <Tab/>
        {/*<Tab1/>*/}
        {/*<SectionOne id={id}/>*/}

        </>
    )
}

