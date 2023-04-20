/// <reference types="cypress" />

let tokenValue;
let customer_tranx_id;
let transaction_sequence_id;
let activeValue;

describe('Authentication', () => {

    it('generate customer token ', () => {
        cy.api({
        method: 'POST' ,
        url: 'https://mtn-preprod-preprod.apigee.net/v1/oauth/access_token?grant_type=client_credentials' ,
        headers: {
        accept: '*/*',
       connection: 'keep-alive',
       authorization: 'Basic QTdtNElhdTVONXNGUWEyQk56a0c2ZVl5Um1FOFVRTDc6b0xvU0Z2Tk5PT2haZVVVbg=='
        },
         params: {
            grant_type: 'client_credentials'
        },
        body:{
           grant_type: 'access_token',
           access_token: 'OR4Hp3Vh6o0SFgsB7PBq5GaFFujd'
        }
    }).then(response => {
      tokenValue = response.body.access_token;
      expect(response.status).equal(200);
      expect(response.body.token_type).equal('BearerToken')

      //console.log(response);
    
    });
}); 

  
it('get customer momo balance', () => {
 cy.api ({
 method: 'GET',
 url: 'https://mtn-preprod-preprod.apigee.net/v2/customers/237670998807/plans?detailedBalance=false&momo=false&plan=data&prefLanguage=EN&targetSystem=ESF' ,
 headers: {
    accept: '*/*',
   connection: 'keep-alive',
   authorization: 'Bearer ' + tokenValue,
   accept: '*/*',
   connection: 'keep-alive'
    },
}).then(response => {
    customer_tranx_id = response.body.transactionId;
    transaction_sequence_id = response.body.sequenceNo;
    activeValue = response.body.data.balance[0].balanceDetail.activeValue

    //assertion tests
    expect(response.status).equal(200);
    expect(response.body.statusMessage).equal('Success')
    expect(response.body.data.balance[0].balanceDetail.activeValue).equal(activeValue)
    expect(response.body.transactionId).equal(customer_tranx_id)
    expect(response.body.sequenceNo).equal(transaction_sequence_id)

   })

});

});




