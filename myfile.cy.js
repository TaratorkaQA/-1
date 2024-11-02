describe('Тестирование авторизации', function () {

    
    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); //зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки забыли пароль
       cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин 
       cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
       cy.get('#loginButton').click(); //нажал войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и виден для пользователя
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин 
        cy.get('#pass').type('eqastudio'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и виден для пользователя
     })

     it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('german@dolnik.ru'); //ввели неверный логин 
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажалf войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и виден для пользователя
     })

     it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки забыли пароль
        cy.get('#forgotEmailButton').click(); //нажала Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввела правильную почту
        cy.get('#restoreEmailButton').click(); //нажала Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') //Проверяю, что после отправки кода вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и виден для пользователя
     })

     it('Невалидный логин, без собачки и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('germandolnikov.ru'); //ввели невадидный логин 
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и виден для пользователя
     })

     it('Логин с большими буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин с большими букавми
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и виден для пользователя
     })
 
    })