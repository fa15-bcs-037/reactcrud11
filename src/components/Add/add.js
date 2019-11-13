import  React,{useState}  from 'react'
//import  data from '../../Data/data.json'
import FormData from 'form-data'


export default ()=>
{
    //const [data, setdata]= useState(data);
    const Add = () => {
       // console.log(.value());
       // console.log(name.value);
        //company=Desogners+it+park+atd&email=evaawan84%40gmail.com&phone=000-000-0000&address=22030
    };


   const object = {};
  // FormData.For-Each((value, key) => {object[key] = value});
    //const json =
       console.log(JSON.stringify(object));




    return   (
        <>
        <div> Add ....</div>
        <form id="form" className="container" onSubmit={()=>{Add()}}>
            <div> First name:
                <input type="text" name="name" required/>
            </div>
            <div>
                Company name:
                <input type="text" name="company" required/>
            </div>
            <div>
                E-mail:
                <input type="email" name="email" required/>
                <div>
                    Enter your Telephone Number(in format of xxx-xxx-xxx):
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                </div>
            </div>
            <div>
                Address:
                <input type="text" name="address" required/>
            </div>
            <div><button type="submit" className="btn btn-primary">
                Add item
            </button></div>
        </form>
        </>);
}