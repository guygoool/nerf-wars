import React, { useState, useEffect } from 'react';

 

export default function GameBoard(props) {

    const defensePlayers = props.game.teams ? props.game.teams.defense.players : [];

    const attackPlayers = props.game.teams ? props.game.teams.attack.players : [];

 

    const createTable = () => {

        let table = [];

        table.push(

            <tr>

                <th>Defense</th>

                <th>Attack</th>

            </tr>);

        for (let i = 0; i < defensePlayers.length; i++) {

            table.push(

                <tr>

                    <td>{defensePlayers[i]}</td>

                    <td>{attackPlayers[i]}</td>

                </tr>)

        }

    };

 

    return defensePlayers.length > 0 || attackPlayers.length > 0 ? (

        <div>

            <table>{createTable()}</table>

        </div>

    ) : "";

}