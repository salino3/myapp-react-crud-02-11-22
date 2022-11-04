import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Card = () => {
    
      const { state, toggleTask, deleteTask } =
        useContext(GlobalContext);

  return (
    <>
      {!state.tasks ? (
        <div className='divCard'>~</div>
      ) : (
        state.tasks.map((item: any, index: any) => (
          <div className="divCard" key={index}>
            <p>
              {item.title} ~ {item.description}{" "}
            </p>

            <div
              onClick={() => toggleTask(item.id)}
              className={item.done ? "color1" : "color2"}
            >
              <b>{item.done ? "Done" : "Undone"}</b>
              <b className="deleteCard" onClick={() => deleteTask(item.id)}>
                Delete
              </b>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Card







