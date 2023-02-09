/// <reference types='cypress'/>
it('Register via Email', function(){
    // Step 1 > Register on an application and receive an OTP email
    cy.visit("https://www.google.com")
    cy.get('input[name=q]').type('username')
    cy.get('input[name=q]').type('password')
    cy.get('input[name=q]').type('{enter}')

    // Step 2 > Open mailbox on different domain and get the OTP
    cy.visit("https://www.wikipedia.com")
    cy.origin('https://www.wikipedia.org', () => {
        cy.get('strong').eq(1).invoke('text')
    })

    // Step 3 > Back to the main application and enter OTP code
    .then( (otpCode) => {
        cy.visit("https://google.com")
        cy.get('input[name=q]').type(otpCode)
    })
})
