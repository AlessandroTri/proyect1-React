import React from 'react'


function Ad ({ props, setProps, })  {
  let name;
  let cantidad;
  const addNew = (event) => {
    event.preventDefault();

    let id = props[props.length - 1].id +1 
    const newList = [...props];
    newList.push({name: name, cantidad: cantidad, id:id});
    setProps(newList);
  };
  
  
  
    return <div> 
      <form >
            <label className='inputname'>
             Name:
            <input type="text" name="name" onChange={(event)=>name=event.target.value} />
            </label>
            <label className='inputcantidad'>
            cantidad:
            <input type="number" name="cantidad" onChange={(event)=>cantidad=event.target.value} />
            </label>
            <button onClick={(event)=>addNew(event)}>Enviar</button>
           </form> 
    </div>
  
}

export default Ad