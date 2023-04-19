describe('API Test', () => {

  it('Get Single User', { env: { snapshotOnly: true } }, () => {

     cy.api('GET','https://reqres.in/api/users/2')
     


     .then((response) => {
        const email =  'janet.weaver@reqres.in'
        const firstName =  'Janet'
        const lastName = 'Weaver'
        const image =  'https://reqres.in/img/faces/2-image.jpg'
        
        expect(response.status).to.eq(200)
         expect(response.body.data.email).eql(email)
         expect(response.body.data.first_name).eql(firstName)
         expect(response.body.data.last_name).eql(lastName)
         expect(response.body.data.avatar).eql(image)
       
          
      })

   })


   it('List All Resources', () => {

    cy.api('GET','https://reqres.in/api/unknown')

    .then((response) => {

      const name = 'cerulean';
      const id = 1
      const year = 2000;
      const color = '#98B2D1'
      const pantone_value = '15-4020';
      
 
       expect(response.status).to.eq(200)
       expect(response.body.data.length).to.be.eq(6)
       expect(response.body.total_pages).eql(2)
       expect(response.body.page).eql(1)
       expect(response.body.data[0].name).eql(name)
       expect(response.body.data[0].year).eql(year)
       expect(response.body.data[0].color).eql(color)
       expect(response.body.data[0].id).eq(id)
       expect(response.body.data[0].pantone_value).eql(pantone_value)
       
      
         

     })
    })


    it('List Single Resource', () => {

      cy.api('GET','https://reqres.in/api/unknown/2')
      
  
  
      .then((response) => {

        const name = 'fuchsia rose';
        const id = 2
        const year = 2001;
        const color = '#C74375'
        const pantone_value = '17-2031';
   
         expect(response.status).to.eq(200)
         expect(response.body.data.id).eq(id)
         expect(response.body.data.name).eql(name)
         expect(response.body.data.year).eql(year)
         expect(response.body.data.color).eql(color)
         expect(response.body.data.pantone_value).eql(pantone_value)
         
        
           
  
       })
      })


      it('Get All Users', () => {

        cy.api('GET','https://reqres.in/api/users?page=2')
  
   
        .then((response) => {

          const email =  'michael.lawson@reqres.in'
          const firstName =  'Michael'
          const lastName = 'Lawson'
          const image =  'https://reqres.in/img/faces/7-image.jpg'
      
           expect(response.status).to.eq(200)
           expect(response.body.data.length).to.be.eq(6)
           expect(response.body.total_pages).eql(2)
           expect(response.body.page).eql(2)
           expect(response.body.data[0].email).eql(email)
           expect(response.body.data[0].first_name).eql(firstName)
           expect(response.body.data[0].last_name).eql(lastName)
           expect(response.body.data[0].avatar).eql(image)
       
       
         })
        })


        it('get delayed response', () => {

          cy.api('GET','https://reqres.in/api/users?delay=3')
    
     
          .then((response) => {

            const email =  'george.bluth@reqres.in'
            const firstName =  'George'
            const lastName = 'Bluth'
            const image =  'https://reqres.in/img/faces/1-image.jpg'
  

             expect(response.status).to.eq(200)
             expect(response.body.data.length).to.be.eq(6)
             expect(response.body.total_pages).eql(2)
             expect(response.body.data[0].email).eql(email)
             expect(response.body.data[0].first_name).eql(firstName)
             expect(response.body.data[0].last_name).eql(lastName)
             expect(response.body.data[0].avatar).eql(image)

         
           })
          })


        
          it('Delete a single user', () => {

            cy.api('DELETE', 'https://reqres.in/api/users/2')
      
       
            .then((response) => {
  
    
               expect(response.status).to.eq(204)
         
  
           
             })
            })
  

          it.skip('Get a single user', () => {

            cy.api('GET', 'https://reqres.in/api/users/23')
      
       
            .then((response) => {
  
    
               expect(response.status).to.eq(404)
         
  
           
             })
            })
  

                    
          it('should login a user successfully', () => {
            cy.api({
               
              method: 'POST',
              url: 'https://reqres.in/api/login',
              body: 
              {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka",
              },
             }).then((response) => {

                  expect(response.status).to.eq(200);

                  //body contains token
                  expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
            });
             });


  

            it.skip('should not successfully login a user', () => {
              cy.api({         
                method: 'POST',
                url: 'https://reqres.in/api/login',
                body: 
                {
                  "email": "eve.holt@reqres.in",
                },
               }).then((response) => {
  
                    expect(response.status).to.eq(400);
  
              });
               });


               it('should create a user successfully', () => {
              
                let user_createdTime;
                let user;

                cy.api({
                   
                  method: 'POST',
                  url: 'https://reqres.in/api/users',
                  body: 
                  {
                    "name": "morpheus",
                    "job": "leader"
                }

               
                 }).then((response) => {
                     
                  user_createdTime = response.body.createdAt;
                  user = response.body.name;
             
                      expect(response.status).to.eq(201);
                      expect(response.body.name).to.eq('morpheus');
                      expect(response.body.job).to.eq('leader');
                      expect(response.body.createdAt).to.eq(user_createdTime);

                      //cy.log(user + '  ' + 'was created at exactly' + user_createdTime )
              
                });
                 });




                 it('should update a user successfully', () => {
                  cy.api({
                     
                    method: 'PUT',
                    url: 'https://reqres.in/api/users/2',
                    body: 
                    {
                      "name": "morpheus",
                      "job": "leader"
                  }
  
                 
                   }).then((response) => {
  
               
                        expect(response.status).to.eq(200);
                        expect(response.body.name).to.eq('morpheus');
                        expect(response.body.job).to.eq('leader');
                
                  });
                   });
  

                   it('patch update request', () => {
                    cy.api({
                       
                      method: 'PATCH',
                      url: 'https://reqres.in/api/users/2',
                      body: 
                      {
                        "name": "morpheus",
                        "job": "zion resident"
                    }
    
                   
                     }).then((response) => {
    
                 
                          expect(response.status).to.eq(200);
                          expect(response.body.name).to.eq('morpheus');
                          expect(response.body.job).to.eq('zion resident');
                  
                    });
                     });


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


                       it.skip('Register user with incorrect data', () => {
                        cy.api({
                           
                          method: 'POST',
                          url: 'https://reqres.in/api/register',
                          body: 
                          {
                            "email": "eve.holt@reqres.in"
                          }
        
                       
                         }).then((response) => {
        
                     
                              expect(response.status).to.eq(200);
                              expect(response.body.id).to.eq(4);
                              expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
                      
                        });
                         });
  
  }); 
