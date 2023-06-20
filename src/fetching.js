// import React, { useEffect, useState } from "react";
// import UserData from "./coregen";

// let API = 'https://type.fit/api/quotes';

// const Appi = () => {
//     let isLoading = true;
// const [ users, setUsers] = useState([]);

//   const fetchUsers = async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//        if(isLoading = false) {
//            setUsers(data);
//        }
//     } catch(error) {
//         console.log(error);
//     }
//   }
//   useEffect(() => {
//   fetchUsers(API);
//   }, []);

//   return <>
//   <table>
//     <thead>
//         <td>{title}</td>
//         <td>{author}</td>
//     </thead>
//     <tbody>
//         <UserData users={users} />
//     </tbody>
//   </table>
//   </>
// }
// export default Appi;