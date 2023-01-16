describe('post user tests',()=>{
    let accesstoken = "2483cf03522d5fb89bffd0943e3e8cc7fbbb80507720a70a5feb5f8188170f24"

    it('verifies creating new user',()=>{

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
               'authorization' : "Bearer " + accesstoken   
            },
            body: {
                "name": "manohar automation",
                "gender": "male",
                "email": "manohartesting123456@gmail.com",
                "status":"active"
            }
        }).then((response)=>{

            expect(response.status).to.eq(201)
            expect(response.body).has.property('email','manohartesting123456@gmail.com')
            expect(response.body).has.property('name','manohar automation')
            expect(response.body).has.property('gender','male')
            cy.log(JSON.stringify(response))

            const userid = response.body.id
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/'+userid,
                headers: {
                  'authorization' : "Bearer " + accesstoken   
             }
                
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.id).eq(userid)
            })
        })
    })

})