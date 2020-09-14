describe("Sprint Challenge testing", () => { 
    it("should return true", () => { 
        expect(true).to.equal(true);
    });
});

describe("Testing in pizza order form", () => {

    beforeEach(() => { 
        cy.visit("http://localhost:3000/pizza");
    })

    it("Fine the Customer Name input element", () => { 
        cy.get('label > input')
            .type("Sathya")
            .should("have.value", "Sathya")
    });
});