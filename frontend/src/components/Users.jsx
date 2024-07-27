// import { useEffect, useState } from "react";
// import { Button } from "./Button";
// import { CircleWithName } from "./CircleWithName";
// import { InputBox } from "./InputBox";
// import axios from "axios"
// import { useNavigate } from "react-router-dom";


// export function Users()
// {
//     const [users , setUsers] = useState([]); 
//     const [filter , SetFilter] = useState("") ; 

//     //debouncing : todo afterwards
//     useEffect(()=>{
//         axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
//         .then( response =>{
//             setUsers(response.data.user)
//         })
//     } , [filter])

//     return (
//         <>
//             <div className="m-2 p-4">
//             <InputBox onChange={(e)=>{
//                 SetFilter(e.target.value)
//             }}
//              labelName="Users" placeholder="Search Users..." type="text" />
//             </div>
         
//             <div>
//                 {users.map( (user) => <User key={user._id} user={user} />)}
//             </div>
//         </>
//     )
// }  


// function User({user}) {
//     const navigate = useNavigate() ; 
//     console.log(user);
//     return(
//         <>
        
//         <div className="flex justify-between ml-8 px-5 border-b-2" >
//             <div>
//                 <CircleWithName  user={user.firstName}/>
//             </div>

//             <div>
//                 <Button onClick={(e)=>{
//                       navigate("/transfer?id=" + user._id + "&name=" + user.firstName) ;
//                 }}
//                  type="button" name="Transfer Money" />
//             </div>
//         </div>
//         </>
//     )

// }


import { InputBox } from "./InputBox";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { CircleWithName } from "./CircleWithName";
import { Button } from "./Button";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state

      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/user/bulk?filter=${filter}`
        );
        setUsers(response.data.user); // Check response structure
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // Set loading state to false even in case of error
      }
    };

    fetchData();
  }, [filter]);

  return (
    <>
      <div className="m-2 p-4">
        <InputBox
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          labelName="Users"
          placeholder="Search Users..."
          type="text"
        />
      </div>

      {isLoading && <div>Loading users...</div>}
      {error && <div>Error fetching users: {error.message}</div>}
      {!isLoading && users.length === 0 && <div>No users found.</div>}

      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
}


function User({user}) {
    const navigate = useNavigate() ; 
    console.log(user);
    return(
        <>
        
        <div className="flex justify-between ml-8 px-5 border-b-2" >
            <div>
                <CircleWithName  user={user.firstName}/>
            </div>

            <div>
                <Button onClick={(e)=>{
                      navigate("/transfer?id=" + user._id + "&name=" + user.firstName) ;
                }}
                 type="button" name="Transfer Money" />
            </div>
        </div>
        </>
    )

}