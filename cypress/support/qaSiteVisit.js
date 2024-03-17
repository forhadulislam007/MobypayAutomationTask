let testData= {}
before(function(){
    cy.fixture('formData.json').as('Login_dataset').then(function(data){
        testData.data =data
    })
})

Cypress.Commands.add('visitsite',() =>{
    cy.visit(testData.data.site.siteURL)
})
