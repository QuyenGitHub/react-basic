import React, { useState } from 'react';

export default function Add(){
  const [number, setNumber] = useState(1) // khai bao hàm vs biến & gán giá trị mặc định là 1
  const [name, setName] = useState("Quyen") //khai bao hàm vs biến & gán giá trị mặc định là "Quyen"
  const changeName = () =>{
    setName("TY NGÁO NGÁO")
  }
  const cach3 = (ten) =>{
    console.log(ten)
    setName(ten)
  }
  return(
      <div id = "setadd">
          <h1>Konichiwa !</h1>
          <h2> {number} </h2>
          <button onClick = {()=>setNumber(2)}>Thay doi number</button>
          <button onClick = {()=>setNumber (number + 10)}>Thay doi number them 10</button>
          <hr></hr>
          <h2> {name} </h2>
          <button onClick = {()=>setName("Quyen Quen")}>Thay doi name</button>
          <button onClick={()=> changeName()}>Thay đổi tên 2</button>
          <button onClick={()=> cach3("TỶ NGÁO x3")}>Thay đổi tên 3</button>
      </div>
  )
}