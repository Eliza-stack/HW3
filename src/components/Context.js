import { createContext, useContext, useState } from "react"

const CountContext = createContext()


const CountProvider = ({ children }) => {
    const [count, setCount] = useState(1111212120);  


    return (
        <CountContext.Provider value={{count, setCount, }}>
            {children}
        </CountContext.Provider>
    )
}

const GreatGrandchild = () => {
    const {count} = useContext(CountContext)
    return <h2 >Счетчик: {count}</h2>
}

export const Parent = () => {
    return (
        <CountProvider>
            <GreatGrandchild />
        </CountProvider>
    )
}



const aasdf = () => {
    return {
        type: "change_title",
    }
}