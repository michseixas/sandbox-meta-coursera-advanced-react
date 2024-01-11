//import both render and screen from the React Testing Library.
//The render function is used to render the component you would like
//to test and perform assertions against. Because querying the entire
//document.body is very common, React Testing Library also exports a screen object,
//which is a reference to that object, and has every query prebound to it, meaning that
//it will automatically ask the whole document when running a search.

import { render, screen } from "@testing-library/react";
import App from "./App";

// to wrap the test scenario, Jest provides the global test function, which takes a text
//description as the first argument, and a function to compose all the steps your test needs
//to go through as a second argument. This function does not need to be imported since Jest
//injects it automatically in all your test files.

test("renders a link that points to Little Lemon Webpage", () => {
  render(<App />); //The first step is to render the app component in the artificial DOM environment

  const linkElement = screen.getByText("Little Lemon Restaurant"); //use the screen object to create a query against the document.body. Here, using the getByText utility to ask the body tag of the document if it can find an element inside with a string called Little Lemon Restaurant, and store the result of that finding in the link element object.
  //If the search is successful, getByText will return the found element. Otherwise, it will return null

  //perform an assertion asking whether the link element from the query above is present in the document.
  //For that, the global expect function is used. This is another utility that Jest incorporates globally without the need for an explicit import. The expect function receives the result of a query and appends the specific matcher. In this example, the matcher refers to an element visible in the whole document. 
  //If I run the test, it fails because in App.js it says "Little Orange Restaurant" instead of Lemon.
  expect(linkElement).toBeInTheDocument();
});
