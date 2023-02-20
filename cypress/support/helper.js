export function loginViaUI(user){
    cy.log('**Open website login page**');
    cy.visit('/'); 

    cy.log('**Authorize user**');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.get('h1 span.subtext').should('contain', user.firstName);
}

export function headlessLogin(user){
    let csrfToken;
    let csrfInstance;

    cy.request('GET','/index.php?rt=account/login').then( responce => {
        let htmlResp = document.createElement('html')
        console.log(htmlResp);
        htmlResp.innerHTML = responce.body;
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value');
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value');

    })
    .then(() => {
        cy.request ({
            method: 'POST',
            url:'/index.php?rt=account/login',
            body: {
                loginname: user.userName,
                password: user.password,
                csrfinstance: csrfInstance,
                csrftoken: csrfToken
            },
            form: true
        })
    })

 
}
 /*export function someLoginViaAPI(){
       let token; 
    cy.request ({
        method: 'POST',
        url:'/index.php?rt=account/login',
        body: {
            loginname: user.userName,
            password: user.password
            }
    }).then ( responce => {
        token = responce.body.token // якщо токен десь використовується записуємо його в змінну
        // з цього викор. тільки щось одне залежить де лежать наш токен
        cy.getCookie('token', responce.body.token)//так записуємо, якщо токен більше ніде не використ
        window.localStorage.setItem('token', responce.body.token);
        window.sessionStorage.setItem('token', responce.body.token);
    })
 }*/


