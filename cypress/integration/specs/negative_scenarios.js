describe('Add todo', function() {
    beforeEach(function () {
        cy.visit("https://todomvc.com/examples/angular2/")
    })

    it("Add new todo when title is missing", function() {
        cy.get('.new-todo').focus().click().type(" " + '{enter}')
        cy.get('.todo-list').should('not.exist')
        cy.get('.todo-count').should('not.exist')
    })

    it("Delete todo from an empty list", function() {
        cy.get('.todo-list').should('not.exist')
        cy.get('.destroy').should('not.exist')
        cy.get('.todo-count').should('not.exist')
    })

    it("Verify that todo can not be edited with single click", function() {
        cy.get('.new-todo').focus().click().type("Test" + '{enter}')
        cy.get('.view').contains(new RegExp(new RegExp("Test", "g"))).click()
        cy.get('.editing').should('not.exist')
        cy.get('label').should('have.text', "Test")
    })

    it("Mark todo as completed", function() {
        cy.get('.new-todo').focus().click().type("Test" + '{enter}')
        cy.get('.new-todo').focus().click().type("Test2" + '{enter}')
        cy.get('.toggle').first().check()
        cy.get('li').should('have.class', "completed")
        cy.get('.clear-completed').should('exist')
        cy.get('.clear-completed').click()
        cy.get('li').should('not.have.class', "completed")
        cy.get('.todo-list').should('exist')
    })
})