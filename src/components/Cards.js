import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some upcoming movies!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Nobody"
              description="Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor, a nobody. When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind."
              label="Action"
              path="https://www.themoviedb.org/movie/615457-nobody"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Chick Fight"
              description="When Anna Wyncomb is introduced to an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine."
              label="Comedy"
              path="https://www.themoviedb.org/movie/682377-chick-fight"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Ammonite"
              label="Dramas"
              path="https://www.themoviedb.org/movie/568467-ammonite"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Chaos Walking"
              label="Thriller"
              path="https://www.themoviedb.org/movie/412656-chaos-walking"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Raya and the Last Dragon"
              label="Family"
              path="https://www.themoviedb.org/movie/527774-raya-and-the-last-dragon"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
