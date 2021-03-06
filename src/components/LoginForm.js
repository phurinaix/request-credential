import React from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import FormGroup from './FormGroup';

const LoginForm = (props) => {
    return (
        <React.Fragment>
            <h1>Thammasat Blockchain Academic Credential</h1>
            <h4>How to apply for putting your diploma to Blockchain</h4>
            <Form onSubmit={props.submit} className="col-md-5" autoComplete="off">
                { props.invalidText !== '' && <Alert variant="danger">{props.invalidText}</Alert> }
                { props.fetching && <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>}
                <FormGroup label="Student name" type="text" text="Your student name must contain only letters and must not contain spaces. (Example: Phurinat Puekkham)" value={props.studentName} change={props.studentNameChange}/>
                <FormGroup label="Student ID" type="text" text="Your student id number must be 10 characters long, contain only numbers and must not contain spaces." value={props.studentId} change={props.studentIdChange}/>
                <Button variant="primary" type="submit" className="w-100" disabled={props.fetching}>
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    );
};

export default LoginForm;