import React , {useContext} from "react";
import {ErrorContext} from '../helper/errorProvider'

const errorData = ErrorContext;

export default function useErrorContextData () {
    const errorDetails = useContext(errorData);

    return errorDetails;
}