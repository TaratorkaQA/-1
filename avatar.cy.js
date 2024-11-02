describe('E2E', function () {

    
    it('Покупка автара', function () {
       cy.visit('https://pokemonbattle.ru'); //зашли на сайт
       cy.get(':nth-child(1) > .auth__input').type('lana-gogolitsina@yandex.ru'); //ввела логин
       cy.get('#password').type('11M!lana03');
       cy.get('.auth__button').click(); //нажать войти
       cy.get('.header__container > .header__id').click(); //нажать на личный кабинет
       cy.get('[href="/shop"]').click(); //нажать на смену аватара
       cy.get('.available > button').first().click({ force: true });
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
       cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(125);
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
       cy.get('.pay-btn').click();
       cy.get('#cardnumber').type('56456');
       cy.get('.payment__submit-button').click();
       cy.contains('Покупка прошла успешно').should('be.visible');
    
    })
})
