import React from 'react';
import { useState , useEffect} from 'react';
import './App.css';


function Generatequote() {

  const [quote, setQuote] = useState('please wait..');
  const [author, setAuthor] = useState('');

  const [category, setCategory] = useState('');

  const getQuote = () => {
    
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': 'Enter Your key Here..',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    });
 

  }

  useEffect(() => {
    getQuote();
    console.log();
  }, [category]);

  return (
    <div className="quote-container" id="quote-container">
      <div className="quote-text" id="quote">
        <i className="fas fa-quote-left"></i>
        <span id="quotes-text">{quote}</span>
      </div>
      <div className="quote-author">
        <span id="author">{author}</span>
      </div>
      <div className="button-container">
        <button className="twitter-button" id="twitter" title="Tweet this!">
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <select onChange={(e)=>setCategory(e.target.value)} name="category" id="category">
            <option value="">Random</option>
            <option value="age">age</option>
            <option value="alone">alone</option>
            <option value="amazing">amazing</option>
            <option value="anger">anger</option>
            <option value="architecture">architecture</option>
            <option value="art">art</option>
            <option value="attitude">attitude</option>
            <option value="beauty">beauty</option>
            <option value="best">best</option>
            <option value="birthday">birthday</option>
            <option value="business">business</option>
            <option value="car">car</option>
            <option value="change">change</option>
            <option value="communication">communication</option>
            <option value="computers">computers</option>
            <option value="cool">cool</option>
            <option value="courage">courage</option>
            <option value="dad">dad</option>
            <option value="dating">dating</option>
            <option value="death">death</option>
            <option value="design">design</option>
            <option value="dreams">dreams</option>
            <option value="education">education</option>
            <option value="environmental">environmental</option>
            <option value="equality">equality</option>
            <option value="experience">experience</option>
            <option value="failure">failure</option>
            <option value="faith">faith</option>
            <option value="family">family</option>
            <option value="famous">famous</option>
            <option value="fear">fear</option>
            <option value="fitness">fitness</option>
            <option value="food">food</option>
            <option value="forgiveness">forgiveness</option>
            <option value="freedom">freedom</option>
            <option value="friendship">friendship</option>
            <option value="funny">funny</option>
            <option value="future">future</option>
            <option value="god">god</option>
            <option value="good">good</option>
            <option value="government">government</option>
            <option value="graduation">graduation</option>
            <option value="great">great</option>
            <option value="happiness">happiness</option>
            <option value="health">health</option>
            <option value="history">history</option>
            <option value="home">home</option>
            <option value="hope">hope</option>
            <option value="humor">humor</option>
            <option value="imagination">imagination</option>
            <option value="inspirational">inspirational</option>
            <option value="intelligence">intelligence</option>
            <option value="jealousy">jealousy</option>
            <option value="knowledge">knowledge</option>
            <option value="leadership">leadership</option>
            <option value="learning">learning</option>
            <option value="legal">legal</option>
            <option value="life">life</option>
            <option value="love">love</option>
            <option value="marriage">marriage</option>
            <option value="medical">medical</option>
            <option value="men">men</option>
            <option value="mom">mom</option>
            <option value="money">money</option>
            <option value="morning">morning</option>
            <option value="movies">movies</option>
            <option value="success">success</option>
          </select>
          <button onClick={getQuote} class="new-quote"
            id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}
export default Generatequote;
