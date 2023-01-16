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
                "email": "manohartesting3@gmail.com",
                "status":"active"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).has.property('email','manohartesting3@gmail.com')
            expect(response.body).has.property('name','manohar automation')
            expect(response.body).has.property('gender','male')
        })
    })

})