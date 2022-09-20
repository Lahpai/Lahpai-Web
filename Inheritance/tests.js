"use strict";

describe("Filter BannedWords/String Filter",function(){
    it("remove banned words from a string", function() {
        assert.equal("This house is not nice!".filter('not'), "This house is nice!"); 
    });
});

describe("Array BubbleSort", () => {
    it("Sorts an array in an ascending order", () => {
        expect([-2, 0, 1, 3, 4, 6]).to.eql([6, 4, 0, 3, -2, 1].bubbleSort());
    });
});

describe("Inheritance", () => {
    it("Teacher object derived from the Person class", () => {
        let teacher01 = new Teacher();
        teacher01.initialize("Fernandez", 48);
        assert.equal(teacher01.teach("WAP"),"Fernandez is now teaching WAP" );
    });
});
