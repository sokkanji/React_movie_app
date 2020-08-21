import React from 'react';

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    id : 3,
    name : "Bibibap",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    id : 4,
    name : "Doncasu",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
  {
    id : 5,
    name : "kimbap",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg"
  },
];

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}></img>
    </div>
  );
}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}

function App() {
  return (
    <div> 
      {foodILike.map(renderFood)}
    </div>
  ); 
}

export default App;
