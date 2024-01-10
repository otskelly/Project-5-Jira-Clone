class IssueComments {
    constructor() {
        
        this.IssueCommentsModal = '[data-testid="modal:issue-details"]';
        this.CommentaryGroup = '.sc-lkqHmb';
        this.CommentaryFiled= '.sc-bMVAic'
        this.CommentField = '[placeholder="Add a comment..."]';
        this.SaveCommentButton = '[class="sc-bwzfXH dIxFno sc-esOvli keRYgb"]'
        this.CancelComentButton = '[class="sc-bxivhb rljZq"]';
        this.DeleteCommentButton = '[class ="sc-bXGyLb dvzGmn"]';
        this.EditCommentButton ='[class ="sc-daURTG bBZxGK"]';
        this.existingIssueCommentID = '[data-testid="issue-comment"]';
        this.DeleteConfirmationButton ='[class="sc-bwzfXH dIxFno sc-kGXeez bLOzZQ"]';
        this.CancelConfirmationButton= '[class="sc-bwzfXH ewzfNn sc-kGXeez bLOzZQ"]';
        this.issuesList = '[data-testid="list-issue"]';
        this.JustDelete = "Delete comment";
        this.Comment='Single out the rest';
        this.NewComment= 'More than one line';
        this.confirmationPopup = '[data-testid="modal:confirm"]';
        this.closeDetailModalButton = '[data-testid="icon:close"]';



    }
    
    

    getIssueCommentsModal() {
        return cy.get(this.IssueCommentsModal);
    }

    AddComment() {
        cy.get(this.IssueCommentsModal).click();
        cy.get(this.CommentaryFiled).click();
        cy.get(this.CommentField).type(this.Comment);
        cy.get(this.SaveCommentButton).click();

    }

    EditComment() {
        cy.get(this.EditCommentButton).eq(0).click();
        cy.get(this.CommentField).clear().type(this.NewComment);
        cy.get(this.SaveCommentButton).click();

    }

    DeleteComment()  {
        
        cy.get(this.DeleteCommentButton).eq(0).click();
        cy.get(this.confirmationPopup).should('be.visible');
        cy.get(this.JustDelete).click();

    }
    
    AssertThatCommentIsVisible() {
        cy.get(this.CommentaryGroup);
        cy.get(this.existingIssueCommentID).should('have.length',2);
        cy.get(this.CommentaryGroup).contains(this.Comment).should('be.visible');

 }
    
 
AssertThatCommentIsNoLongerVisible() {
    cy.get(this.CommentaryGroup);
    cy.get(this.existingIssueCommentID).should('have.length',1);
    cy.get(this.Comment).should('not.be.visible');
}

AssertThatEditedCommetIsVisible() {
    cy.get(this.CommentaryGroup);
    cy.get(this.existingIssueCommentID).should('have.length',2);
    cy.get(this.CommentaryGroup).contains(this.NewComment).should('be.visible');
    
}    
        
 
AssertThatCommentIsDeleted() {
    cy.get(this.CommentaryGroup);
    cy.get(this.existingIssueCommentID).should('have.length',1);
    cy.get(this.NewComment).should('not.be.visible');
}     
}

export default new IssueComments();