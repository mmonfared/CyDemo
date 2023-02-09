/// <reference types = 'cypress' />

describe('Mouse and Keyboard Actions', function () {
    it('Keyboard Actions > Type and Enter', function () {
        cy.visit("https://www.google.com/")
        cy.get("input[name=q]").type("DataArt {enter}")
    })
    it('Keyboard Actions > Using sequences', function () {
        cy.visit("https://www.google.com/")
        cy.get("input[name=q]").type("Cypress").type("{backspace}{home}{del}")
    })
    it('Keyboard Actions > Clear input', function () {
        cy.visit("https://www.google.com/")
        cy.get("input[name=q]").type("Cypress")
        cy.get("input[name=q]").clear()
        cy.get("input[name=q]").type("Cypress")
        cy.get("input[name=q]").type("{selectall}{del}")
        cy.get("input[name=q]").type("Cypress")
        cy.get("input[name=q]").type("{selectall}{backspace}")
    })
    it('Keyboard Actions > Delay Option', function () {
        cy.visit("https://www.google.com/")
        cy.get("input[name=q]").type("I'm typing slowly", {delay: 100})
        cy.get("input[name=q]").clear()
        cy.get("input[name=q]").type("I'm typing fast", {delay: 0})
    })
    it('Keyboard Actions > Repeat', function () {
        cy.visit("https://www.google.com/")
        cy.get("input[name=q]").type("Cypress ".repeat(6))

    })
    it('Mouse Actions > Clicks', function () {
        // Click
        cy.visit("https://www.play2.automationcamp.ir/index.html")
        cy.get("input#male").click()
        cy.get("input#male").should('be.checked')
        // Double Click
        cy.contains("Double-click me").dblclick()
        cy.contains("Your Sample Double Click worked!")
        // Right click + Position
        cy.get("body").rightclick("top")
        // Force Click
        cy.get("body").rightclick({force: true})
        // Hold CTRL and click
        cy.get('[href="contact.html"]').click({ctrlKey: true})

    });
    it('Mouse Actions > Drag and Drop', function () {
        cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
        cy.get("#draggable")
            .trigger("mousedown", {which: 1})
            .get("#droppable")
            .trigger("mousemove")
            .trigger("mouseup", {force: true})
    });

    it('Mouse Actions > Drag and Drop by offset', function () {
        cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
        cy.get("#draggable")
            .trigger("mousedown", {which: 1})
            .realMouseMove(300, 100)
            .realMouseUp()
    });
})

describe('Mouse Actions - Scroll', function () {
    // topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight
    it('1-Scroll Page - To Position', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo('bottom')
    });
    it('2-Scroll Page - By Coordination', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo(0, 1300)
    });
    it('3-Scroll Page - By Pixel', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo('0px', '3000px')
    });
    it('4-Scroll Page - By Percentage', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo('0%', '60%')
    });
    it('5-Scroll Element Into View', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.get(':nth-child(245) > .titleColumn').scrollIntoView()
    });

});
