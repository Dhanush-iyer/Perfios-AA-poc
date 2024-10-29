import React, { useEffect, useState } from "react";
import useErrorContextData from "../../hooks/useErrorContext";
import CustomCheckBox from "../../components/checkbox";
import CustomButton from "../../components/button";
import ErrorPage from "../errorPage";
import Snackbar from "../../components/snackbar";
import { useNavigate } from "react-router-dom";

const width = window.innerWidth;
const height = window.innerHeight;

const DashBoardComponentJSX = (props) => {
    const { handleClose, handleSubmit, handleChange, isSubmitEmpty, setText, text, open } = props;
    return (
        <div>
            {isSubmitEmpty ?
                <div>
                    <Snackbar handleOpen={open} handleClose={handleClose} />
                </div>
                : null}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: width * 0.3, height: height * 0.6, backgroundColor : 'lightgrey',borderRadius :"16px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>

                    <div style={{margin : "40px"}}>

                        <div style={{margin : "20px"}}>
                            <label>
                                Please check the box: {" "}
                                <input name=" Please check the box .." value="test" type="checkbox" onChange={handleChange} />
                            </label>
                        </div>

                        <div style={{margin : "20px"}}>
                            <label>
                               Enter Text : {" "}
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => { setText(e.target.value) }} />
                            </label>

                        </div>


                        <div style={{margin : "20px"}}>
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>



                    </div>


                </div>
            </div>

        </div>
    )
}

const DashBoard = () => {

    const [checked, setChecked] = useState(false);
    const [isSubmitEmpty, setIsSubmitEmpty] = useState(false);
    const [text, setText] = useState("");
    const [open, setOpen] = useState(true);

    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false);
    };


    function handleSubmit() {
        if (checked && text !== "" && text !== null && text !== undefined) {
            navigate("/errorpage")
        }
        else {
            setIsSubmitEmpty(true)
        }


    }

    function handleChange(e) {
        setChecked(e.target.checked);
    }

    return (
        <DashBoardComponentJSX
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            checked={checked}
            isSubmitEmpty={isSubmitEmpty}
            text={text}
            setText={setText} />
    )
}

export default DashBoard;