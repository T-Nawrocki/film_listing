import React, { Component } from 'react';

class FooterButton extends Component {
  render() {
    
    
    return (
      <button onClick={() => window.open("https://www.imdb.com/calendar/?region=gb")}>
        View more upcoming releases {">>"} 
      </button>
    );
  }
}
 
export default FooterButton;
