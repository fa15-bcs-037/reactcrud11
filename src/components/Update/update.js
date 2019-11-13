import  React  from 'react'
import Style from './style'

export default ()=>
{
    //const update=(id,name,company,email,phone,address)=> {
        // const index = id;
        // console.log(index);
        // if (index > -1) {
        //     setRow(dataa.splice(index, 1));
        // }
    //};
    return(
        <>
        <div> update ....</div>
        <form className="container">
            <div> First name:
                <input type="text" name="firstname" required/>
            </div>
            <div>
                Company name:
                <input type="text" name="lastname" required/>
            </div>
            <div>
                E-mail:
                <input type="email" name="email" required/>
                <div>
                    Enter your Telephone Number(in format of xxx-xxx-xxxx):
                    <input type="tel" name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                </div>
            </div>
            <div>
                Address;
                <input type="text" required/>
            </div>
            <div><button type="submit" className="btn btn-primary">
                Edit item
            </button></div>
        </form>
       <Style/>

        </>);
}