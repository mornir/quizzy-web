describe('Quiz', () => {
  beforeEach(() => {
    cy.intercept('https://56p6cqhh.apicdn.sanity.io/**', {
      fixture: 'questions.json',
    })
    cy.visit('/quiz/wettbewerb-herbst-2021')
  })

  it('anwers the quiz successfully and shows the form', () => {
    cy.get('button[type=submit]').should('be.disabled')
    cy.get('#headlessui-radiogroup-option-4').click()
    cy.get('button[type=submit]').click()
    cy.contains('Frage 2')
    cy.get('#headlessui-radiogroup-option-6').click()
    cy.get('button[type=submit]').click()
  })

  it('shows hint in case of wrong answer', () => {
    cy.log('**select wrong answer**')
    cy.get('#headlessui-radiogroup-option-3').click()
    cy.get('button[type=submit]').click()
    cy.contains('Sorry, falsche Antwort. Versuchen Sie’s noch einmal.').should(
      'be.visible'
    )

    cy.log('**hide hint after selecting new answer**')
    cy.get('#headlessui-radiogroup-option-4').click()
    cy.get('[data-cy=hint]').should('not.exist')
  })
})
