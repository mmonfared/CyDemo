/// <reference types="Cypress" />

// Two ways: 1.jQuery element 2.contentDocument

describe("1. Single iFrame", function() {

    it("1.1 Using yielded jQuery element", function() {
        cy.visit("https://play1.automationcamp.ir/frames.html")
        cy.get("#frame1").then(function($iFrame){
            const iFrameContents = $iFrame.contents().find('body')
            cy.wrap(iFrameContents).find("#click_me_1").click()
        })
    })

    it("1.2 Using 'contentDocument' property and its()", function() {
        cy.visit("https://play1.automationcamp.ir/frames.html")
        cy.get("#frame1")
            .its('0.contentDocument')
            .should('exist')
            .its('body')
            .should('not.be.undefined')
            .find("#click_me_1").click()

    })
})

describe("2. Nested iFrames", function() {

    it("2.1 Nested iFrames - Using yielded jQuery element", function() {
        cy.visit("https://play1.automationcamp.ir/frames.html")
        cy.get("#frame1").then(function($iFrame1){
            const iframe2 = $iFrame1.contents().find('#frame2')
            cy.wrap(iframe2).as('iframe2Ref')
            cy.get('@iframe2Ref').then(function($iFrame2){
                const iFrame2Contents = $iFrame2.contents().find('body')
                cy.wrap(iFrame2Contents).find("#click_me_2").click()
            })
        })
    })

    it("2.2 Nested iFrames - Using 'contentDocument' property and its()", function() {
        cy.visit("https://play1.automationcamp.ir/frames.html")
        cy.get("#frame1")
            .its('0.contentDocument')
            .its('body')
            .find("#frame2")
            .its('0.contentDocument')
            .its('body')
            .find("#click_me_2").click()
    })
})
