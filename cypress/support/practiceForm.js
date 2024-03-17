let testData= {}
before(function(){
    cy.fixture('formData.json').as('Login_dataset').then(function(data){
        testData.data =data
    })
})

Cypress.Commands.add('practiceform', () =>{
    cy.get('.category-cards > :nth-child(2)').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
})

Cypress.Commands.add('contact', () =>{
    cy.wait(5000)
    cy.get('#firstName').type(testData.data.formdata1.firstname)
    cy.get('#lastName').type(testData.data.formdata1.lastname)
    cy.get('#userEmail').type(testData.data.formdata1.email)
})

Cypress.Commands.add('contact2', () =>{
    cy.wait(5000)
    cy.get('#firstName').type(testData.data.formdata2.firstname)
    cy.get('#lastName').type(testData.data.formdata2.lastname)
    cy.get('#userEmail').type(testData.data.formdata2.email)
})

Cypress.Commands.add('contact3', () =>{
    cy.wait(5000)
    cy.get('#firstName').type(testData.data.formdata3.firstname)
    cy.get('#lastName').type(testData.data.formdata3.lastname)
    cy.get('#userEmail').type(testData.data.formdata3.email)
})
Cypress.Commands.add('gender', () =>{
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click() //for male
    //cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click() //for female
    //cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click() //for other
})

Cypress.Commands.add('otherdata', () =>{
    cy.get('#userNumber').type(testData.data.formdata1.phone)
    cy.get('#dateOfBirthInput').click()
    cy.wait(2000)
    cy.get('.react-datepicker__day--020').click() //to change the date, update 020
    cy.get('#subjectsWrapper > .col-md-9').type("Computer Science{enter}")
    cy.get('#subjectsWrapper > .col-md-9').type("English{enter}") //to add more subjects please add more lines
})

Cypress.Commands.add('hobbies', () =>{
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click() //Close one or more lines if needed
})

Cypress.Commands.add('image', () =>{
    const imageFileName = 'image.jpeg';
    cy.fixture('Image.jpg').then(imageFileContent => {
        const imageBlob = Cypress.Blob.base64StringToBlob(imageFileContent, 'image/jpeg');
        const imageFile = new File([imageBlob], imageFileName, { type: 'image/jpeg' });

        cy.get('input[type="file"]').then($input => {
            const imageTransfer = new DataTransfer();
            imageTransfer.items.add(imageFile);
            $input[0].files = imageTransfer.files;
            $input[0].dispatchEvent(new Event('change', { bubbles: true }));
            cy.wait(1000)
        });
    });
})

Cypress.Commands.add('address', () =>{
    cy.get('#currentAddress').type(testData.data.formdata1.address)
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type("NCR{enter}")
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type("Noida{enter}")
})

Cypress.Commands.add('save', () =>{
    cy.get('#submit').click()
})