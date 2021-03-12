import React from "react";
import { Card, Accordion } from "react-bootstrap";

const MonsterCards = ({ monster }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Card className="bg-secondary">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className="beastName">{monster.name}</div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="beastiaryCard">
            <div className="row">
              <div className="col-6">
                <div className="description text-left">
                  {monster.description}
                </div>
              </div>
              <div className="col-6">
                <div className="profile">
                  Main
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
                <br />
                <p className="text-left">
                  <strong>Skills:</strong> {monster.skills}
                </p>
                <p className="text-left">
                  <strong>Talents:</strong> {monster.talents}
                </p>
                <p className="text-left">
                  <strong>Special Rules:</strong> {monster.specialRules}
                </p>
                <p className="text-left">
                  <strong>Armour:</strong> {monster.armour}
                </p>
                <p className="text-left">
                  <strong>Armour Points:</strong> {monster.armourPoints}
                </p>
                <p className="text-left">
                  <strong>Weapons:</strong> {monster.weapons}
                </p>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MonsterCards;
