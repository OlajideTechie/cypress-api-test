/// <reference types="cypress" />
import { __ENV } from "./Env/cypress.env.cy";

let customer_id;
let firstName;
let lastName;
let idNumber;
let DOB;

describe('Authentication', () => {
    
it('get customer kyc details', () => {

 cy.api ({
 method: 'GET',
 url: __ENV.URL ,
 headers: {
    accept: '*/*',
    'x-api-key': __ENV.KEY,
   accept: '*/*',
   connection: 'keep-alive'
    },
}).then(response => {
    customer_id = response.body.customerId;
    firstName = response.body.data.firstName;
    lastName = response.body.data.lastName
    DOB = response.body.data.dateOfBirth
    idNumber = response.body.data.idNumber

    //assertion tests
    //Body returns response code 200
    expect(response.status).equal(200);

    //Body contains ciustomer id
    expect(customer_id).equal('237675889923')

    //Body contains customer firstname
    expect(firstName).equal('PHILIPPE MALTAIS')

    //Body contains customer lastname
    expect(lastName).equal('BENEDOUE')

    // //Body contains customer unique id number
     expect(DOB).equal('05/12/1973')

     expect(idNumber).equal('20190320107510220')
   

   })

});


// `it` test block with custom configuration
it('Register User', () => {
  cy.api({
     
    method: 'POST',
    url: 'https://reqres.in/api/register',
    body: 
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }

 
   }).then((response) => {


        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(4);
        expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');

  });
   });


});






