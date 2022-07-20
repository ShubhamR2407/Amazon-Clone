// setting uo the data layer i.e react index API
//we need this to track the basket

import React, {createContext, useContext, useReducer} from "react"


// this is the data layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider =({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we will use it indide a component
export const useStateValue= ()=> useContext(StateContext);