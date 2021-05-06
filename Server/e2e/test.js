import { Selector } from 'testcafe';

fixture`E2E tests`
    .page`http://localhost:8080/index.html`;

test('left nav buttons test', async function (t) {
    await t
        .click('#view-in-map')
        .click('#view-in-table');
});

test('dropdown option test', async function (t2) {
    await t2
        .click('#postcode-menu')
        .click(Selector('#postcode-menu > option').filter('[value="BS1"]'));
});

test('table row test', async function (t3) {
    await t3
        .click('#postcode-menu')
        .click(Selector('#postcode-menu > option').filter('[value="BS3"]'))
        .expect(Selector('table > tbody').childElementCount).eql; (2);
});