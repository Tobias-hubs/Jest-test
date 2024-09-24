const convertToUppercase = require('./app');

test('ändra text till VERSALER', () => {
    expect(convertToUppercase('hello world')).toBe('HELLO WORLD');     
    expect(convertToUppercase('Test')).toBe('TEST');
    expect(convertToUppercase('123abc')).toBe('123ABC');
});




