import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg",

  },
  {
    id : 2,
    name : "Samgyeopsal",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg",
      rating : 4.9
    },
  {
    id : 3,
    name : "Bibibap",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg",
      rating : 4.7
  },
  {
    id : 4,
    name : "Doncasu",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg",
      rating : 4.8
  },
  {
    id : 5,
    name : "kimbap",
    image :
      "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-seaweed-rice-sushi-roll-illustration-image_1226699.jpg",
      rating : 4.9
  }
];

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} picture={dish.image}/>
// }

function App() {
  return (
    <div> 
      {        /* {foodILike.map(renderFood)} */ 
      foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  ); 
}

export default App;
