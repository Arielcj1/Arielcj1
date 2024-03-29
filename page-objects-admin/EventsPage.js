/// <reference types="cypress"/>
export class EventsPage {

    select_Events_Option(){
        cy.get(':nth-child(6) > [href="#"] > :nth-child(2)').click()
    }

    select_Events_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
    }

    select_Events_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    type_Event_Name(value){
        cy.get('#eventform-name').type(value)
    }

    type_Description_Event(value){
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').type('{selectall}'+value)

    }

    type_Start_Date(value){
        cy.get('#eventform-startdate').type(value) 
    }

    type_Start_Time(value){
        cy.xpath('//*[@id="w0"]/div/div[4]/div/span').click()
        cy.xpath('//*[@id="w0"]/div/div[4]/div/div/table/tbody/tr[2]/td[1]/input').type(value)
        cy.xpath('//*[@id="w0"]/div/div[4]/div/div/table/tbody/tr[2]/td[5]/input').type('PM')
    }

    type_End_Time(value){
        cy.xpath('//*[@id="workshop-end-time"]/div/div/span').click()
        cy.xpath('//*[@id="workshop-end-time"]/div/div/div/table/tbody/tr[2]/td[1]/input').type(value)
        cy.xpath('//*[@id="workshop-end-time"]/div/div/div/table/tbody/tr[2]/td[5]/input').type('PM')    
    }

    select_Free_Event_Type(){
        cy.get('#eventform-free_event_type').select('Free Event')
    }

    type_Event_Guide(value){
        cy.get('#w1').type(value)
        cy.wait(1300)
        cy.get('#w1').type('{downarrow}{enter}')
    }

    type_Event_Focus(value){
        for(var e=0; e<4; e++){
            cy.get('#eventform-focus-'+e+'').type('{selectall}'+value)
        }
    }
    type_Event_HowToComePrepared(value){
        for(var e=0; e<3; e++){
            cy.get('#eventform-preparation-'+e+'').type('{selectall}'+value)
        }
        cy.get('#eventform-preparation-3').type('{selectall}'+value+'{enter}')
    }

    find_Event(event, value){
        cy.get('#eventsearch-name').type(event+'{enter}')
        cy.wait(1200)
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[8]/a['+value+']/span').click()
    }

}