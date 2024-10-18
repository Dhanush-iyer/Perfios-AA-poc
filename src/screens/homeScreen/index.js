import React, { useState, useEffect } from 'react';
import Snackbar from '../../components/snackbar'
import useFetch from '../../hooks/useFetch';
import {userData} from '../../hooks/useContextData';
const HomeScreen = () => {
    const [data, loading, error] = useFetch("https://jsonplaceholder.typicode.com/todos")
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false);
    };

    const obj = {data:data,loading:loading,error:error}

    return (
        <div>
            <userData.Provider value={obj}>
                <Snackbar handleOpen={open} handleClose={handleClose}/>
            </userData.Provider>
        </div>
    )
}

export default HomeScreen;
