import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Card from '../components/Card';

const PageList = () => {
  const { deleteAlls, addTask } = useContext(GlobalContext);

  const inputRef: any = useRef();
  const inputRef2: any = useRef();


  const handleSubmit = (event: any) => {
    event.preventDefault();
    let Title = event.target.mytitle.value;
    let Desc = event.target.mydesc.value;

    console.log(Title);
    console.log(Desc);
    addTask({
      title: inputRef.current.value,
      description: inputRef2.current.value,
    });

    inputRef.current.value = "";
    inputRef2.current.value = "";
  };

  //

  return (
    <>
      <div className="divBiggerPageList">
        <div className="divPageList">
          <div>
            <button onClick={() => deleteAlls()} className="btnDeleteAlls">
              <b>Delete Alls</b>
            </button>
          </div>
          <form className="myFormList" onSubmit={handleSubmit}>
            <br />
            <input
              id="Input"
              type="text"
              name="mytitle"
              placeholder="Write a title.."
              ref={inputRef}
            />{" "}
            <br />
            <input
              type="text"
              name="mydesc"
              placeholder="Write a description.."
              ref={inputRef2}
            />{" "}
            <br />
            <button className="btnAdd1" type="submit">
              <b>Add task</b>
            </button>
          </form>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default PageList



// style={{paddingLeft:"10em"}}




