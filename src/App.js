import React, { useState } from "react";
import ViewResume from "./Pages/ViewResume";
import Form1 from "./Pages/Form1";


function App() {
  const [data, setData] = useState()
  const [showForm, setShowForm] = useState("block")
  const [showPrint, setShowPrint] = useState("hidden")

  const formData=(value)=>{
    setData(value)
    setShowForm("hidden")
    setShowPrint("block")
  }

  const handleEdit=()=>{
    console.log("EDOjsodf")
    setShowForm("block")
    setShowPrint("hidden")
  }

  return (
    <>
      <div className={`${showForm}`} > <Form1 className={showForm} formData={formData} /> </div>
      <div className={`${showPrint}`} > <ViewResume data={data} handleEdit={handleEdit}/> </div>
    </>
  );
}

export default App;
