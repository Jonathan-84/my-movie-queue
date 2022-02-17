import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import APIpull from "../components/APIpull";

//passing the search input to the APIpull (child)... 
//having issue pushing the search to the child... need to either look up doing it with the class function
//or figure out how to do it the right way, may not be able to mix them. 
// go to /search to test this page out

const Search = () => {

    // set initial form state
    const [userFormData, setUserFormData] = useState({ name: ''});
 
    useEffect(() => {
        
    }, [userFormData])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    

        setUserFormData({
            name: ''
        });
        console.log (userFormData)
    };

  
    return (
        <>
        
        <Form onSubmit={handleFormSubmit}>
        <Form.Label htmlFor='name'>Movie Name</Form.Label>
            <Form.Group>
                
            <div className=" col input-group">
                <Form.Control
                    type='text'
                    placeholder='name'
                    name='name'
                    onChange={handleInputChange}
                    value={userFormData.name}
                    required
                />
      

            <Button
            className="btn btn-outline orange-button"
            disabled={!(userFormData.name)}
            type='submit'
            variant='orange-button'>
                Submit
            </Button>
            </div>
            </Form.Group>
        </Form>
        <APIpull key={userFormData} search={userFormData}/>
    </>
);


}
export default Search;