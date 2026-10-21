import { createContext } from "react";

const UserContext = createContext()

export default UserContext;


// Login, Card, Data can access UserContext
// <UserContext>
//     <Login />
//     <Card />
//     <Data />
// </UserContext>