# [Tests vs feature](https://codecept.io/bdd/#tests-vs-features)

It is common to think that BDD scenario is equal to test. But it's actually not.
Not every test should be described as a feature.
Not every test is written to test real business value.
For instance, regression tests or negative scenario tests are not bringing any value to business. Business analysts don't care about scenario reproducing bug #13, or what error message is displayed when user tries to enter wrong password on login screen.

Writing all the tests inside a feature files creates informational overflow.

# Methodology

## business

List the features of the software and its interconnected sub-systems.
Identify all relations between user functions.

## pages

The rule is one folder for each page.
Each folder detailed tests about what is expected to find on that page.
