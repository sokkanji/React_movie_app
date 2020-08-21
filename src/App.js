import React from 'react';

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name : "kimchi",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    name : "Samgyeopsal",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    name : "Bibibap",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    name : "Doncasu",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    name : "kimbap",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
];

function App() {
  return (
    <div>
      {foodILike.map( dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  ); 
}

export default App;
