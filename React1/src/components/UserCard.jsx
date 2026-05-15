import React from 'react'

export const UserCard = ({Name,Age}) => {
function GiveName(){
  console.log("The Name is",Name);
}

function GiveAge(){
  console.log("The Age is",Age);
} 
  return (
    <div>
    <div>
      <h2>Name = {Name}</h2>
      <br />
      <h2>Age = {Age}</h2>
      </div>
      <div>
      <button onClick={GiveName}>Click</button> <br />
      <button onClick={GiveAge}>Click</button>
      </div>
</div>
      
  );
};


 export default UserCard 