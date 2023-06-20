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
            <p> {user.text}</p>
            <i id="author"> --{user.author}--</i>
         </div>
      );
   }

   return (
      <>
            <div className='background'>
               <div>
                  <button type="button" onClick={getData}>Today's Quote</button>
         <center>
                  {quotes}
         </center>
               </div>
            </div>
      </>

   );
}
export default UserData;