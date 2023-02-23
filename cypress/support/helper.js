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

function isProductDisplayed(productName) {
    return Cypress.$(`.thumbnails.grid:contains('${productName}')`).length > 0;
}

function isNextPageAvailable() {
    return Cypress.$(".pagination li a:contains('>')").length > 0;
}

export function searchProduct(productName) {
    cy.get('body').then((body) => { // почекати, щоб body завантажилось
        if (isProductDisplayed(productName)) {
            cy.get('.thumbnails.grid').contains(productName).click();
        } else if (isNextPageAvailable()) {
            cy.get('.pagination li a').contains('>').click();
            searchProduct(productName);
        }
    })
}





