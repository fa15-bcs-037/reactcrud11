import  React,{useState,useContext}  from 'react'
import {Link} from 'react-router-dom';
import {Context} from '../../store/store';


export default (props)=> {
   // const [dataa, setdata]= useContext(Context);
    const [Array,setArray]=useState(props.location.state);
    // console.log(Array[0].id);
    // console.log(Array[0].address);


    const [name, setName] = useState(Array[0].name);

   // console.log(name);
    const [company, setcomp] = useState("");
    const [email, setmail] = useState("");
    const [phone, setphone] = useState("");
    const [addr, setaddr] = useState("");

    // const [dataa1, setdata1]= useContext(Context);

    // const updateItem = () => {
    //     let newdataa = [...dataa1];
    //     newdataa[name] = name;
    //     newdataa[company]=company;
    //     newdataa[email]=email;
    //     newdataa[phone]=phone;
    //     newdataa[addr]=addr;
    //     setdata1(newdataa);
    //
    // };



    return   (
        <>
        <div className="container">
            <h2>Update items</h2>
            <form >
                <div className="form-group">
                    <label>Id:</label>
                    <input  value={Array[0].id} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name}
                           // onChange={(event) =>{
                           //    // let newname=[...name];
                           //    //  newname.value=event.target.value;
                           //    //  setName(newname);
                           //     //
                           //     }


                           className="form-control"
                           placeholder="Enter name" required/>
                </div>
                <div className="form-group">
                    <label>Company:</label>
                    <input type="text" value={Array[0].company}
                           onChange={(event) => setcomp(event.target.value)}  className="form-control"
                           placeholder="Enter company name" required/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={Array[0].email}
                           onChange={(event) => setmail(event.target.value)}  className="form-control" id="email"
                           placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" value={Array[0].phone}
                           onChange={(event) => setphone(event.target.value)}  className="form-control"
                           placeholder="Enter phone number" pattern="[0-9]{4}-[0-9]{7}"  required/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input  value={Array[0].address}
                           onChange={(event) => setaddr(event.target.value)}  className="form-control"
                           placeholder="Enter your address"  required/>
                </div>

                {<Link to={{pathname: '/'
                }}><button type="submit" className="btn btn-primary" onClick={()=>{}}>Update item</button></Link>}
            </form>

        </div>
        </>);
}