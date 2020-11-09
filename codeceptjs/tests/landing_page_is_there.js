Feature('landing page is there');

Before((I) => {
  I.say('ON BEFOREEEEEEEEEEEEE');
});

Scenario('test success', (I) => {
  I.amOnPage('/');
  I.see('CodeceptJS 3');
  I.see('‐ supercharged');
  I.see('End 2 End Testing');
});

Scenario('test fail 1', (I) => {
  I.amOnPage('/');
  I.see('CodeceptJS 3 123');
  I.see('‐ supercharged');
  I.see('End 2 End Testing');
}).tag('@current');

Scenario('test fail 2', (I) => {
  I.amOnPage('/');
  I.see('CodeceptJS 3');
  I.see('‐ superchargeddddd');
  I.see('End 2 End Testing');
}).tag('@current');
