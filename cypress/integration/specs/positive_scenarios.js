describe('Add todo', function() {
    beforeEach(function () {
        cy.visit("https://todomvc.com/examples/angular2/")
    })

    it("Add new todo in the list", function() {
        cy.get('.new-todo').focus().click().type("Test" + '{enter}')
        cy.get('.todo-count').should('be.visible')
    })

    it("Remove a todo in the list", function() {
        cy.get('.new-todo').focus().click().type("Test" + '{enter}')
        cy.get('.todo-count').should('be.visible')
        cy.get('.todo-list').should('exist')
        cy.get('.destroy').first().invoke('show').click()
        cy.get('destroy').should('not.exist')
        cy.get('.todo-list').should('not.exist')
    })

    it("Edit a todo", function() {
        cy.get('.new-todo').focus().click().type("Test" + '{enter}')
        cy.get('.view').contains(new RegExp(new RegExp("Test", "g"))).dblclick()
        cy.get('.editing').type(" edited {enter}")
        cy.get('label').should('have.text', "Test " + "edited")
    })

    it("Mark todo as completed", function() {
        cy.get('.new-todo').focus().click().type("Test" + '{enter}')
        cy.get('.toggle').check()
        cy.get('li').should('have.class', 'completed')
    })
})