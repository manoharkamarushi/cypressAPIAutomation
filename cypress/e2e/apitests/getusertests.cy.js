/// <reference types="cypress" />

describe('get api users test',()=>{
            let accesstoken = "2483cf03522d5fb89bffd0943e3e8cc7fbbb80507720a70a5feb5f8188170f24"

  it('get users',()=>{
      cy.request({

          method: 'GET',
          url: 'https://gorest.co.in/public/v2/users',
          headers: {
             'authorization' : "Bearer " + accesstoken   
          }

              }).then((res)=>{
                     expect(res.status).to.eq(200)
                             })
      })

      it('get users by id',()=>{
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/3655',
                headers: {
                  'authorization' : "Bearer " + accesstoken   
             }
                
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.id).eq(3655)
            })

      })

     
})