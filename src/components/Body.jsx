import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import "../css/body.css";
import backgroundImg from "../assets/pokemon-background.jpg";
function shuffle(array) {
    const newArray = [...array];
    let currentIndex = newArray.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex],
            newArray[currentIndex],
        ];
    }

    return newArray;
}

export default function Body() {
    const [pokemonList, setPokemonList] = useState([]);
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const [displayBack, setDisplayBack] = useState(false);
    console.log("render");

    function handleCardClick() {
        const suffledArray = shuffle(pokemonList);
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.classList.add("rotate");
        });
        setDisplayBack(true);
        setTimeout(() => {
            cards.forEach((card) => {
                card.classList.remove("rotate");
            });
            setDisplayBack(false);
            console.log(cards);
        }, 1500);
        console.log(pokemonList, suffledArray);
        console.log("clicked");
        setPokemonList(suffledArray);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
                );
                const data = await response.json();
                let pokemonUrls = data.results.map((result) => result.url);
                pokemonUrls = shuffle(pokemonUrls).slice(0, 5);
                const pokemonDetails = await Promise.all(
                    pokemonUrls.map(async (url) => {
                        const res = await fetch(url);
                        return res.json();
                    })
                );

                const updatedPokemonList = pokemonDetails.map((pokemon) => ({
                    name: pokemon.name,
                    img: pokemon.sprites.other.showdown.front_default,
                }));

                setPokemonList(updatedPokemonList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [limit, offset]);

    return (
        <>
            <div className="card-list">
                {pokemonList.length == 0
                    ? "nothing to show"
                    : pokemonList.map((pokemon) => (
                          <Card
                              key={pokemon.name}
                              name={displayBack ? "":pokemon.name}
                              img={displayBack ? backgroundImg : pokemon.img}
                              handleCardClick={handleCardClick}
                          />
                      ))}
            </div>
        </>
    );
}
