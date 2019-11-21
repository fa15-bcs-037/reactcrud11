import  React,{useState,useContext}  from 'react'
import {Link} from 'react-router-dom';
import {Context} from '../../store/store';


export default ()=> {
    const [dataa, setdata]= useContext(Context);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [company, setcomp] = useState("");
    const [email, setmail] = useState("");
    const [phone, setphone] = useState("");
    const [addr, setaddr] = useState("");


    const AddItem=()=> {
        let newdataa = [...dataa];
        newdataa.push({id:id,name:name,company:company,email:email,phone:phone,address:addr});
        setdata(newdataa);
        setName("");
        setId("");
        setcomp("");
    };


    return   (
        <>
        <div className="container">
            <h2>Add items</h2>
            <form >
                <div className="form-group">
                    <label>Id:</label>
                    <input type="number" value={id}
                           onChange={(event) => setId(event.target.value)}  className="form-control"
                           placeholder="Enter id" required/>
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name}
                           onChange={(event) => setName(event.target.value)}  className="form-control"
                           placeholder="Enter name" required/>
                </div>
                <div className="form-group">
                    <label>Company:</label>
                    <input type="text" value={name}
                           onChange={(event) => setcomp(event.target.value)}  className="form-control"
                           placeholder="Enter company name" required/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email}
                           onChange={(event) => setmail(event.target.value)}  className="form-control" id="email"
                           placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" value={phone}
                           onChange={(event) => setphone(event.target.value)}  className="form-control"
                           placeholder="Enter phone number" pattern="[0-9]{4}-[0-9]{7}"  required/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" value={addr}
                           onChange={(event) => setaddr(event.target.value)}  className="form-control"
                           placeholder="Enter your address"  required/>
                </div>



                {<Link to={{pathname: '/'
                }}><button type="submit" className="btn btn-primary" onClick={()=>{AddItem()}}>Add item</button></Link>}
            </form>
        </div>
        </>);
}