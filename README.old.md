# Testing User Interfaces

## Learning Goals

- Explain best practices for testing user interfaces
- Understand the importance of accessibility in web applications
- Find elements using accessible queries
- Use Jest DOM matchers to write assertions

## Introduction

The end goal of all frontend applications is to create a _user interface_ (or
"UI" for short): a means by which people can interact with the application.
Therefore a big element of testing React applications is testing the user
interface layer. In this lesson, we'll learn how to test that the elements of
our application are displayed correctly to our users, and some best practices
for helping ensure our applications are accessible to users who rely on
assistive technology to interact with the web.

## Best Practices for Testing User Interfaces

Over the years, a number of frameworks for testing React have risen and fallen
in terms of popularity. In general, they've all shared a similar set of
features: namely, the ability to render a React component in a simulated browser
environment during testing, and the ability to query the simulated DOM to check
if an element was displayed or not.

Recently, React Testing Library has become the most popular choice for testing
React applications. One big reason for that is because helps guide developers to
following best practices when testing by following this [guiding
principle][guiding principles]:

> The more your tests resemble the way your software is used, the more
> confidence they can give you.
>
> — React Testing Library

By following this principle when writing tests, and writing your tests to mimic
the way your users would experience your application as much as possible,
developers can be more confident that their tests are accurately reflecting the
functionality you expect your application to have.

In contrast, some earlier popular testing libraries, like [Enzyme][enzyme],
don't enforce best practices as strongly. Enzyme gives developers more tools for
testing the _implementation details_ of a React component (such as "what methods
were called" and "how did state change"), which result in tests that are more
brittle (it's harder to refactor a component, since you're testing the code
rather than the output) and give you less confidence that the application is
behaving the way a user would expect it to.

In general, when testing user interfaces, the goal is to _test the application
from the perspective of a user_. How would a user interact with the application?
By opening it in the browser, clicking on buttons, and seeing what changes. In
our tests then, we shouldn't care about what code is written inside a component,
so long as it renders the right elements to the page based on props and state.

explain RTL philosophy: as much as possible, test the app from the perspective
of a user. how would a user interact with the application? by viewing it in the
browser, clicking on things, etc. how would a user test your application? by
validating what is present on the page. this also implies "not testing
implementation details": we should care about what code is written inside a
component, so long as it provides the right output based on props and state
changes.

## Writing Accessible Applications

One important consideration when designing websites is
[accessibility][w3c accessibility]: making sure that as many users as possible
can interact with your website, including folks with disabilities.

Different users experience your application in different ways. Some see the
elements in the browser, others use a screen reader that tells them what's on
the page. As developers, we want our apps to be accessible by as many users as
possible, so we need to design them with accessibility in mind.

Thankfully, React Testing Library makes accessibility a first-class citizen by
providing query methods that help you find elements in accessible ways (the same
ways that a screen reader would find the elements).

> **Note**: while React Testing Library can help with accessibility, it isn't a
> silver bullet for accessibility; there are other considerations beyond what
> React Testing Library can tell us. For example, things like colors, contrast,
> and fonts also impact what users can use our applications. Tools like
> [axe](https://www.deque.com/axe/), and accessibility features in
> [Chrome's DevTools](https://developer.chrome.com/docs/devtools/accessibility/reference/),
> can help check for other accessibility issues as well.

## Finding Elements Using Accessible Queries

In the previous lesson, we saw how to use React Testing Library to find an
element based on its _text content_ using the `getByText` method:

```js
const linkElement = screen.getByText(/learn react/i);
```

While this does give us confidence that there is _some_ element with the text
"learn react" being rendered by our component, it doesn't give us much more
information than that. What if we wanted to validate that the element in
question is a button, or a link, or a heading? Those kinds of distinctions are
important to make when designing a user interface; an `<a>` element has a
different role to play in our application than a `<span>` does.

To ensure that our tests can be written with these considerations in mind, React
Testing Library provides a number of different [query methods][] that let us
find elements in a variety of different ways.

The query method that is preferred is the [`byRole`][by-role] method, because it
reflects the experience of both visual/mouse users as well as folks who use
screen readers and other assistive technology.

include a wireframe of a landing page for a portfolio site with:

- heading element
- paragraph
- link element(s)

demonstrate TDD workflow:

- write tests, identify what elements we expect to find
- write code to place those elements on the page

## Conclusion

<!-- more here on the main topics, then this aside -->

Accessibility is a big topic, and we won't be able to cover it in depth in this
course, but it's worth exploring more! Here are some resources for learning
more:

- [A11Y Project](https://www.a11yproject.com/checklist/): free resources for
  learning about accessibility
- [React Docs on Accessibility](https://reactjs.org/docs/accessibility.html):
  resources and guideline for designing React components with accessibility in
  mind
- [React Accessibility course on Egghead](https://egghead.io/courses/develop-accessible-web-apps-with-react):
  a free 90-minute course on using tools to help develop accessible React
  applications

[guiding principles]: https://testing-library.com/docs/guiding-principles
[enzyme]: https://enzymejs.github.io/enzyme/
[w3c accessibility]: https://www.w3.org/WAI/fundamentals/accessibility-intro/
[query methods]: https://testing-library.com/docs/queries/about
[by-role]: https://testing-library.com/docs/queries/byrole/
