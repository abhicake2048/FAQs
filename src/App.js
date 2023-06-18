import './App.css';
import data from './data'
import { useState } from 'react';
import SingleQuestion from './questions'

const quotes=['Today is a grate day', 'tomorrow will be a great day' , 'yesterday was a great day'];


function App() {

  const [quote, setQuote] = useState(quotes[0]);

  function gen(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)] 
    setQuote(randomQuote);
  }

  return (
    <main>
    <div className="container">
      <h3>FAQ</h3>
      <section className="info">
        {data.map((question) => {
          return (
            <SingleQuestion
              title={question.title}
              info={question.info}
              key={question.id}
            />
          )
        })}
      </section>
    </div>
  </main>
  );
}

export default App;
