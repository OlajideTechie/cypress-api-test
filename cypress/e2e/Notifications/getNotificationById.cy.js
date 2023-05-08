/// <reference types="cypress" />
import { __ENV } from "../Env/cypress.env.cy"

let statusMessage;
let transactionId;
let notificationType;
let countryCode;
let targetSystem;
let statusCode
let code;

describe('Authentication', () => {
    
it('get notification by valid id', () => {
 cy.api ({
 method: 'GET',
 url: __ENV.N_URL ,
 headers: {
    accept: '*/*',
    'x-api-key': __ENV.KEY,
   accept: '*/*',
   connection: 'keep-alive'
    },
}).then(response => {
    statusCode = response.body.statusCode;
    statusMessage = response.body.statusMessage;
    notificationType = response.body.data.notificationType
    countryCode = response.body.data.countryCode
    targetSystem = response.body.data.targetSystem
    transactionId = response.body.transactionId
    code = response.body.data.code

    //assertion tests
    //Body returns response code 200
    expect(response.status).equal(200);

    //Body contains status code
    expect(statusCode).equal('0000')

    //Body contains status message
    expect(statusMessage).equal('3PP data successfully retrieved for the id 6458c3da691acd737a20aec4')

    //Body contains notification type
    expect(notificationType).equal('SUBSCRIBE')

    //Body contains country code
     expect(countryCode).equal('CMR')

     //Body contains target system
     expect(targetSystem).equal('CMR-SYSTEM-1')

       //Body contains code
       expect(code).equal('2227')

         //Body contains transaction Id
     expect(transactionId).equal(transactionId)

     cy.log(transactionId)


   })
  });


   
});





