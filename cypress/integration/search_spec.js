describe('google', () =>{
    
        it('Should search address: ', () => {
            cy.visit('https://www.google.com.au/maps')
            .get('#searchboxinput') // find input box
            .type('Sydney Opera House, Sydney NSW') // enter address you want to search
            .enter()// .get('#searchbox-searchbutton') // find search button
            //.click()
        })
    
    
    })