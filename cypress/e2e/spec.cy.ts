describe('ear slaw tests', () => {
  it('visits the page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('opens the about page', () => {
    cy.contains('About').click();
  });

  it('opens the video player page', () => {
    cy.contains('Enter').click();
  });
})

export {}