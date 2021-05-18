import React from 'react'

const CharacterCard = () => {
    return (
        <div>
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
                        <td>{monster.weaponSkill}%</td>
                        <td>{monster.balisticSkill}%</td>
                        <td>{monster.strength}%</td>
                        <td>{monster.toughness}%</td>
                        <td>{monster.agility}%</td>
                        <td>{monster.intelligence}%</td>
                        <td>{monster.willPower}%</td>
                        <td>{monster.fellowship}%</td>
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
                        <td>{monster.actions}</td>
                        <td>{monster.wounds}</td>
                        <td>{monster.strengthBonus}</td>
                        <td>{monster.toughnessBonus}</td>
                        <td>{monster.movement}</td>
                        <td>{monster.magic}</td>
                        <td>{monster.insanityPoints}</td>
                        <td>{monster.fatePoints}</td>
                      </tr>
                    </tbody>
                  </table>
        </div>
    )
}

export default CharacterCard
