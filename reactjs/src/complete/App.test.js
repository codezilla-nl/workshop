import { render, screen } from '@testing-library/react';
import App from './App';
import Work from './components/work';

test('App contains welcome text', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to my online portfolio/i);
  expect(welcomeMessage).toBeInTheDocument();
});


test('Component input should match the output', () => {
  const items =  [
    {
      "id": 0,
      "role": "Front-end Engineer",
      "company": "kpn",
      "location": "amsterdam",
      "skills": ["VueJS, Jenkins, Robot, Jest"],
      "period": "05-2020 - Present"
    },
    {
      "id": 1,
      "role": "Front-end Engineer",
      "company": "klm",
      "location": "amstelveen",
      "skills": ["React JS, NodeJS, Postman, Typescript"],
      "period": "04-2020 - 08-2018"
    },
    {
      "id": 2,
      "role": "Front-end Engineer",
      "company": "ahold",
      "location": "zaandam",
      "skills": ["Backbone JS, React JS"],
      "period": "04-2015 - 07-2018"
    }
  ]
  const workElement = <Work items={items} />
  const periodMessage = screen.getByText(/period/i);

  render(workElement);
  expect(periodMessage).toBeInTheDocument();
});
