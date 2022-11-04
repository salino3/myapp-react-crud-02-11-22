import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const SecondPage = () => {
    
const {  addCliente } = useContext(GlobalContext);

 const inputRef3: any = useRef();



const handleSubmit = (event: any) => {
    event.preventDefault();
    let newClient = event.target.unomas.value;
  addCliente({
       cliente: inputRef3.current.value,
  });
console.log(newClient)
inputRef3.current.value = "";
}

  return (
    <>
      <h1>Second page</h1>

      <form className="formSecondPage" onSubmit={handleSubmit}>
        <input
          className="inputSecondPage"
          ref={inputRef3}
          type="text"
          name={"unomas"}
          placeholder={"Add a client in First Page.."}
        />{" "}
        <br />
        <button className="btnSecondPage" type="submit">
          <b>Add client</b>
        </button>
      </form>
      <hr />
      <Link to="/first">Go to First Page..</Link>
    </>
  );
}

export default SecondPage