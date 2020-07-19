import React from "react";
import Button from '@material-ui/core/Button';

function SaveButton({clientData, dataSubmit}) {
    return (
        <Button variant="contained" onClick={dataSubmit}>Save</Button>
    )
}

export default SaveButton;