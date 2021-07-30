import React from 'react'

const CharacterCard = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <table>
                    <thead>
                      <tr>
                        <th>WS</th>
                        <th>BS</th>
                        <th>S</th>
                        <th>T</th>
                        <th>Ag</th>
                        <th>Int</th>
                        <th>WP</th>
                        <th>Fel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{props.weaponSkill}%</td>
                        <td>{props.balisticSkill}%</td>
                        <td>{props.strength}%</td>
                        <td>{props.toughness}%</td>
                        <td>{props.agility}%</td>
                        <td>{props.intelligence}%</td>
                        <td>{props.willPower}%</td>
                        <td>{props.fellowship}%</td>
                      </tr>
                    </tbody>
                  </table>
                  Secondary
                  <table>
                    <thead>
                      <tr>
                        <th>A</th>
                        <th>W</th>
                        <th>SB</th>
                        <th>TB</th>
                        <th>M</th>
                        <th>Mag</th>
                        <th>IP</th>
                        <th>FP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{props.actions}</td>
                        <td>{props.wounds}</td>
                        <td>{props.strengthBonus}</td>
                        <td>{props.toughnessBonus}</td>
                        <td>{props.movement}</td>
                        <td>{props.magic}</td>
                        <td>{props.insanityPoints}</td>
                        <td>{props.fatePoints}</td>
                      </tr>
                    </tbody>
                  </table>
        </div>
    )
}

export default CharacterCard
