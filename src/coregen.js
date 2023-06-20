import { useState } from 'react';
import './background.css';

function UserData({ users }) {
   let [user, setUsers] = useState(null);
   let random;
   async function getData() {
      const a = await fetch('https://type.fit/api/quotes');
      const b = await a.json();
      console.log(b);
      random = Math.floor(Math.random() * b.length);
      user = b[random];
      setUsers(user);
   }

   let quotes = null;
   if (user) {
      quotes = (
         <div>
            <p><strong>Author: </strong> {user.author}</p><br></br>
            <p><strong>Text: </strong> {user.text}</p>
         </div>
      );
   }

   return (
      <>
         <center>
            <div className='background'>
               <div>
                  <button type="button" onClick={getData}>button</button>
                  {quotes}
               </div>
            </div>
         </center>
      </>

   );
}
export default UserData;