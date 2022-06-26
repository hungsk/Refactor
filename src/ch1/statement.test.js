const my = require('./statement.js');

var invoices = require('./invoices.json');
var plays = require('./plays.json');

// 明確描述測試的目標
test('prints the bill，You earned 47 credits', () => {
    // 期望結果是符合預期的
    expect(my.statement(invoices[0],plays)).toMatch(/You earned 47 credits/);
});