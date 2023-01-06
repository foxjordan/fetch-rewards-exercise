# Frontend Take-Home Exercise
================================================


## Overview
Build a webpage with a user creation form. The form should have the following fields:

* Name
* Email
* Password
* Occupation
* State

The form should have a submit button that will send the data to the specified endpoint which returns a JSON response with the same data in addition to a user ID. 

Occupation and State must be selected from a dropdown list. The options for the dropdowns should be fetched from the specified endpoint.


## Requirements

* Display a form with inputs for each field.
* Allow the user to complete and submit the form.
* Prevent submission if any field is empty.
* Provide user feedback if the submission is successful or not.


## Implementation

### General

* Project completed using React.JS and TailwindCSS.
* The form validation is handled natively by the browser with the addition of a warning if the user clears clears a field entirely.

### Form
* The form is built using 4 separate components: FormComponent.js, InputField.js, SelectField.js, and FormButton.js.
    * This was done to make styling cleaner and prevent TailwindCSS classes from being repeated and cluttering the code.
    * The form can also easily be expanded by adding more fields without having to rewrite the same code.

### Logic
* The methods for retrieving the data from the API endpoints are located in the /lib/dataMethods.js file.
    * This includes getStates, getOccupations, and submitForm.
    * getStates: fetches the entire list of states and occupations from the endpoint and returns a map of the state data with abbreviation and name as the key and value respectively.
    * getOccupations: fetches the entire list of states and occupations from the endpoint and returns a map of the data with the occupation name as both the key and value.

## Styling

* Styling was done using TailwindCSS.
* The color pallete was provided by Coolors.co and can be found here: https://coolors.co/e8f1f2-b3efb2-7a9e7e-31493c-001a23
* Form is responsive to different screen sizes.

## Testing

* Testing was performed using the webhook.site API. 
* Accessibility tested using VoiceOver on MacOS.