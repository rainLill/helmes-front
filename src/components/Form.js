import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Options from "./form/Options.";
import Terms from "./form/Terms";
import SaveButton from "./form/SaveButton";
import Cookies from 'js-cookie';
import generateTree from "../services/generateTree";
import getClientData from "../services/getClientData";
import submitData from "../services/submitData";
import dataVerification from "../services/dataVerification";

function Form() {
    const [tree, setTree] = React.useState([]);
    const [clientData, setClientData] = React.useState({});
    const [name, setName] = React.useState('');
    const [activeSectors, setActiveSectors] = React.useState([]);
    const [terms, setTerms] = React.useState(false);
    let csrfToken = Cookies.get('XSRF-TOKEN')

    useEffect(() => {
        generateTree(setTree);
        getClientData(setClientData);
    }, [])

    useEffect(() => {
        setName(clientData.firstName);
        setActiveSectors(clientData.sectors);
        setTerms(clientData.terms);
    }, [clientData])
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const data = {
        firstName: name,
        activeSectors: activeSectors,
        terms: terms
    }

    const dataSubmit = () => {
        let dataOk = dataVerification(data);

        if (clientData.terms === false && dataOk) {
            submitData('POST', csrfToken, data);
        } else if (clientData.terms !== false && dataOk) {
            submitData('PUT', csrfToken, data);
        }
    }


    return (
        <form noValidate autoComplete="off">
            <div className="gaps-small">
                <TextField
                    id="name" label="Name"
                    value={name}
                    onChange={nameChangeHandler}
                    variant="filled"
                />
            </div>

            <div className="gaps-small">
                <Options
                    tree={tree}
                    activeSectors={activeSectors}
                    setActiveSectors={setActiveSectors}
                />
            </div>

            <div className="gaps-small">
                <Terms
                    terms={terms}
                    setTerms={setTerms}
                />

                <SaveButton
                    clientData={clientData}
                    dataSubmit={dataSubmit}
                />
            </div>
        </form>
    );
}

export default Form;