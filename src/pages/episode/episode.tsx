import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "effector-react";

import { Episodes } from "../../components";

import { IEpisode } from "../../interfaces/episode";
import { ICharacter } from "../../interfaces/character";
// import { $episode, getEpisodeFx } from "../../models/episode";
// import { $characters, getCharactersFx } from "../../models/characters";
import { $episode } from "./mockEpisode";
import { $characters } from "./mockCharacters";

import "./episode.sass";

export const EpisodePage: FC = () => {
    const { id } = useParams();

    const episode = $episode;
    const characters = $characters;

    // const episode: IEpisode = $episode;
    // const characters: ICharacter = $characters;

    // useEffect(() => {
    //     getEpisodeFx(id);
    // }, [id]);

    // useEffect(() => {
    //     if (episode) getCharactersFx(episode.characters);
    // }, [episode]);

    return (
        <div className="page">
            <>
                {episode && <Episodes episodes={[episode]} />}
                <section className="characters">
                    {characters.map(
                        ({ id, name, status, gender, origin, image }) => (
                            <div key={id} className="characters__character">
                                <img
                                    className="characters__image"
                                    src={image}
                                    alt=""
                                />
                                <p>ID - {id}</p>
                                <p>{name}</p>
                                <p>{status}</p>
                                <p>{gender}</p>
                                <p>{origin.name}</p>
                            </div>
                        )
                    )}
                </section>
            </>
        </div>
    );
};
