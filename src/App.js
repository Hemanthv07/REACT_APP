// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

function App() {
  //useState
  // const [inputvalue, setinputvalue] = useState("uttara");
  // let onChange=(e)=>{
  //   const newvalue=e.target.value;
  //   setinputvalue(newvalue)
  //   console.log(inputvalue);
  // }

  // let inputvalue="uttara";

  // let onChange=(event)=>{
  //   inputvalue=event.target.value;
  //   console.log(inputvalue);
  // };

  // const [data, setdata] = useState("");
  // const [count, setcount] = useState(0);

  // useEffect(()=>{
  //   fetch("https://randomuser.me/api/?result=20")
  //   .then((response)=>response.json())
  //   .then((res)=>{
  //     setdata(res.results[2].email);
  //     console.log("API WAS CALLED");
  //     console.log(res.results);
  //   })
  //   .catch(err=>{console.log("Error:",err);
  //     })
  //   },[count]);

  //Async Await ..version
  // useEffect(()=>{
  //   const fetchUsers=async()=>{
  //   try {
  //     const usersRes = await fetch("https://randomuser.me/api/?result=20")
  //     const users = await usersRes.json();
  //     setdata(users.results[3].email);
  //     console.log("API WAS CALLED");
  //     console.log(users.results);
  //   }catch(err){
  //     console.log("Error:",err);
  //   }
  // };
  //   fetchUsers();
  // },[]);
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [userdata, setuserdata] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);

  function adduser() {
    setuserdata((prevdata) => {
      return [
        { id: Math.random().toString(), name: name, age: age },
        ...prevdata,
      ];
    });
    console.log(userdata);
    setname("");
    setage("");
  }

  function deleteuser(id) {
    setuserdata((prevdata) => {
      return prevdata.filter((data) => data.id !== id);
    });
  }

  function getuser(id,name,age){
    setid(id)
    setisUpdate(true)
     setname(name)
     setage(age)
  }

  function updateuser() {
    const selectuser=userdata.find((user)=>user.id===id)
    const updateuserdata=userdata.map((user)=>{
      return user.id === selectuser.id ?
      {id:user.id,name:name,age:age} :
      user
    })
    setuserdata(updateuserdata)
    setname("")
    setage("")
    setisUpdate(false)
  }

  return (
    // <div className="flex flex-col items-center justify-center m-10">
    //   <input placeholder="enter something..." onChange={onChange} />
    //   <div className="text-blue-600 text-3xl mt-10">{inputvalue}</div>
    // </div>
    // <div className="flex flex-col items-center justify-center">
    //   Hello World
    //   <h1>{count}</h1>
    //   <button
    //      className="bg-blue-600 py-1 px-4"
    //      onClick={()=>{
    //       setcount(count+1)
    //       console.log("onClick");
    //      }}
    //      >
    //       Click
    //   </button>
    //      <h1 className="mt-10">{data}</h1>
    // </div>
    <div className="bg-amber-100 h-screen max-h-full">
      <h1 className="text-green-500 text-center text-4xl">
        Frist React Crud App
      </h1>
      <div className="bg-gray-200 m-4 p-2 w-max border-orange-500 border-2 rounded-md mx-auto  text-red-500 text-2xl ">
        <p>Get Started</p>
      </div>

      {/*input section*/}
      <div className="flex flex-col w-[50%] mx-auto">
        <input
          className="p-2 m-2"
          placeholder="Enter Your Name"
          type="text"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
        <input
          className="p-2 m-2"
          placeholder="Enter Your Age"
          type="number"
          value={age}
          onChange={(event) => setage(event.target.value)}
        />
        {isUpdate ? (
          <button
            className="bg-blue-400 m-2 p-2 rounded-md hover:bg-blue-600 hover:shadow-lg text-white"
            onClick={updateuser}
          >
            UPDATE
          </button>
        ) : (
          <button
            className="bg-blue-400 m-2 p-2 rounded-md hover:bg-blue-600 hover:shadow-lg text-white"
            onClick={adduser}
          >
            ADD
          </button>
        )
        }
      </div>
      {/*dispaly sectiom*/}
      <div className="flex flex-col w-[50%] mx-auto">
        {userdata.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex items-center mx-auto bg-green-100 p-2 text-xl m-2 hover:bg-green-500">
                <div className="w-[40%]">{data.name}</div>
                <div className="w-[20%]">{data.age}</div>
                <button
                  className="p-1 bg-red-400"
                  onClick={() => {
                    deleteuser(data.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="p-1 bg-blue-400 m-2"
                  onClick={() => {
                    getuser(data.id,data.name,data.age);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
