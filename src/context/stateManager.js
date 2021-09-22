import React, {useReducer} from 'react'

const StateManager = React.createContext()

const stateReducer = (state, action) => {
    switch (action.type){
        case "update-reasons-dropdown": 
        console.log({payload: action.payload})
            return {...state, one: action.payload.one, two: action.payload.two, three: action.payload.three}

        case "update-nav-colors": 
            return {...state, home: action.payload.home, about: action.payload.about, services: action.payload.services, projects: action.payload.projects, FAQ: action.payload.FAQ, contact: action.payload.contact
            }
    }
}

export const StateProvider = (props) => {
    const [state, dispatch] = useReducer(stateReducer,{
        one: "each-reason-text", two: "each-reason-text", three: "each-reason-text",
        home: "", about: "", services: "", projects: "", FAQ: "", contacts: "",
    })

    async function toggleDropDown(data){
        let styleClass;
        if(data === 'one' || data === 'two' || data === 'three'){
            if(state[data] === "each-reason-text"){
                styleClass = {one: "each-reason-text", two: "each-reason-text", three: "each-reason-text", [data]: "display-reason"}
            }
            else{
                styleClass= {one: "each-reason-text", two: "each-reason-text", three: "each-reason-text"}
            }   
        }
        else{
            styleClass= {one: "each-reason-text", two: "each-reason-text", three: "each-reason-text"}
        }
        console.log(styleClass)
        await dispatch({type: "update-reasons-dropdown", payload: styleClass})
    }

    async function navItemColor(data){
        let navClass = {home: "", about: "", services: "", Projects: "", FAQ: "", contact: "", [data]: "active-link"}
        await dispatch({type: "update-nav-colors", payload: navClass})
    }

    const boundActions = {
        toggleDropDown,
        navItemColor
    }

    return (
        <StateManager.Provider value={{state: state, ...boundActions}}>
            {props.children}
        </StateManager.Provider>
    )
}

export default StateManager