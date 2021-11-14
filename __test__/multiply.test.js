//test function to check if jest-test is working

function multiply(a, b, c) {
    return a * b * c;
}

test('multiply function should return the product of 3 numbers', () => {

    // Arrange
    const number1 = 2;
    const number2 = 3;
    const number3 = 4;

    // Act
    const product = multiply(number1, number2, number3);

    // Assert
    expect(product).toBe(24);
});







