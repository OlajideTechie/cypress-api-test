describe('API Test', () => {
  it('Get Single User', () => {

     cy.request('https://reqres.in/api/users/2')
     


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

    cy.request('https://reqres.in/api/unknown')

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

      cy.request('https://reqres.in/api/unknown/2')
      
  
  
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

        cy.request('https://reqres.in/api/users?page=2')
  
   
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


        it.only('get delayed response', () => {

          cy.request('https://reqres.in/api/users?delay=3')
    
     
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



})