import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function Terms({terms, setTerms}) {

    const handleChange = (event) => {
        setTerms(event.target.checked);
    };

    return (
        <FormControlLabel
            control={<Checkbox
                checked={terms}
                onChange={handleChange}
                name="terms"
                color="primary"
            />}
            label="Agreed to terms"
        />
    )

}

export default Terms;