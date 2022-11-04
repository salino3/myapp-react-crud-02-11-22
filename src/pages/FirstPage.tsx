import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const FirstPage = () => {
  const { state } = useContext(GlobalContext);


  return (
    <>
      <h1>First page</h1>
      <div className="divFirstPage">
        <div className="divBigger">
          <div className="divDe10">
            <div className="div1">Element 1</div>
            <div className="div2">Element 2</div>
            <div className="div3">Element 3</div>
            <div className="div4">Element 4</div>
            <div className="div5" style={{ color: "yellow" }}>
              {!state.clientes
                ? "Element 5"
                : state.clientes.map((item: any, index: any) => (
                    <p key={index}>{item.cliente}</p>
                  ))}
            </div>
            <div className="div6">Element 6</div>
            <div className="div7" style={{ color: "blue" }}>
              {!state.tasks ? (
                "Element 7"
              ) : (
                <span> {JSON.stringify(state.tasks[0])} </span>
              )}
            </div>
            <div className="div8">Element 8</div>
            <div className="div9">Element 9</div>
            <div className="div10">Element 10</div>
          </div>
          <div className="divDe2">
            <div className="div11">Element 11</div>
            {/*  */}
            <div className="div12">Element 12</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage