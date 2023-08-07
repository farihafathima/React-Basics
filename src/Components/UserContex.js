import React from 'react'
//1.Creating Contex
const UserContext=React.createContext('Center for Good Governance')
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer
export {UserConsumer,UserProvider}
export default UserContext