import React , {createContext, useContext} from "react";

export const userData = createContext(null)

export default function useContextData () {
    const userDetails = useContext(userData);

    return userDetails;
}