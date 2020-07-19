import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Form from "./components/Form";
import './styles/App.css';


function App() {
    return (
        <Container className='App'>
            <div className="gaps">
                <Typography variant="h5" gutterBottom>
                    Please enter your name and pick the Sectors you are currently involved in.
                </Typography>
            </div>

            <div className="gaps">
                <Form />
            </div>
        </Container>
    );
}

export default App;
