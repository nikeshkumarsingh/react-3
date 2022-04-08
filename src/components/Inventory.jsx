import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    InkPens: 33,
  });
  // Create add and remove functions here that changes the
  // state.
  const handle = (el) => {
    setInv({ ...inv, books: inv.books + 1 });
    console.log(inv.books);
  };
  const handle2 = () => {
    setInv({ ...inv, notebooks: inv.notebooks + 1 });
  };
  const handle3 = () => {
    setInv({ ...inv, pens: inv.pens + 1 });
  };
  const handle4 = () => {
    setInv({ ...inv, InkPens: inv.InkPens + 1 });
  };
  const minus = () => {
    if(inv.books===0){
        return  
       }
         
    setInv({ ...inv, books: inv.books - 1 });
    console.log(inv.books)
  };
  const minus2 = () => {
    if(inv.notebooks===0){
     return  
    }
        setInv({ ...inv, notebooks: inv.notebooks - 1 });
        
    
  };
  const minus3 = () => {
    if(inv.pens===0){
        return  
       }
         
    setInv({ ...inv, pens: inv.pens - 1 });
  };
  const minus4 = () => {
    if(inv.InkPens===0){
        return  
       }
         
    setInv({ ...inv, InkPens: inv.InkPens - 1 });
  };
  let sum = inv.books + inv.InkPens + inv.notebooks + inv.pens;

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={handle}>
          +
        </button>
        <button className="circlularButton" onClick={minus}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={handle2}>
          +
        </button>
        <button className="circlularButton" onClick={minus2}>
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={handle3}>
          +
        </button>
        <button className="circlularButton" onClick={minus3}>
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={handle4}>
          +
        </button>
        <button className="circlularButton" onClick={minus4}>
          -
        </button>
        <span>{inv.InkPens}</span>
      </div>{}
      total: {sum}{" "}
    </div>
  );
};
