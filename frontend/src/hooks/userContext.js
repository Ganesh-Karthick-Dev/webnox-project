const { createContext, useState } = require("react");


export const userContext = createContext()


const UserContextProvider = (props)=> {

    const [val,setVal] = useState('');

    console.log(val);

    const addUser = (userName)=> {
        // setVal(userName)
        localStorage.setItem('username',userName)
    }
    const removeUser = ()=>{
        // setVal('')
        localStorage.removeItem('username')
        localStorage.clear()
    }

    return (
        <>
        <userContext.Provider value={{addUser,val,removeUser}}>
            {props.children}
        </userContext.Provider>
        </>
    )

}

export default UserContextProvider ;