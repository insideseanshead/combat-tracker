import React from "react";
import { Card, Accordion } from "react-bootstrap";

const BestiaryGrid = () => {
  return (
    <div className="p-3">
      <h3 className="text-muted ">BEASTIARY</h3>
      <Accordion defaultActiveKey="0">
        <Card className="bg-secondary">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="beastName">Beastmen</div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="beastiaryCard">
              <div className="row">
                <div className="col-6">
                  <div className="description text-left">
                    Beastmen are twisted creatures of Chaos, hideously melding
                    the features of humans and animals. They have haunted the
                    forests of the Empire for countless generations, preying on
                    humanity as hunters prey on animals. They travel in small
                    bands known as war herds, which sometimes unite under a
                    strong leader to bring death and terror to the people of the
                    Empire. Beastmen are true servants of Chaos and they hate
                    Mankind above all.
                  </div>
                </div>
                <div className="col-6">
                  <div className="profile">
                    Main
                    <table>
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
                      <tr>
                        <td>40%</td>
                        <td>25%</td>
                        <td>35%</td>
                        <td>45%</td>
                        <td>35%</td>
                        <td>25%</td>
                        <td>25%</td>
                        <td>25%</td>
                      </tr>
                    </table>
                    Secondary
                    <table>
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
                      <tr>
                        <td>1</td>
                        <td>12</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    </table>
                  </div>
                  <br />
                  <p className="text-left">
                    <strong>Skills:</strong> Concealment, Follow Trail,
                    Intimidate, Outdoor Survival, Perception, Shadowing, Silent
                    Move, Speak Language (Dark Tongue)
                  </p>
                  <p className="text-left">
                    <strong>Skills:</strong> Keen Senses, Menacing, Rover
                  </p>
                  <p className="text-left">
                    <strong>Special Rules</strong> Chaos Mutations: Animalistic
                    Legs and Horns. There is a 25% chance of an additional
                    mutation. Roll on Table 11- 1: Chaos Mutations to generate
                    the extra mutation if present and modify stats as
                    appropriate. Silent as the Beasts of the Woods: Beastmen are
                    naturally stealthy, and most are also very experienced
                    hunters and trackers. They gain +20% to Silent Move Tests
                    and +10% to Concealment Tests.
                  </p>
                  <p className="text-left">
                    <strong>Armour</strong> Light Armour (Leather Jack)
                  </p>
                  <p className="text-left">
                    <strong>Armour Points:</strong> Head 0, Arms 1, Body 1, Legs
                    0
                  </p>
                  <p className="text-left">
                    <strong>Weapons:</strong> Hand Weapon or Spear, Horns (SB–1
                    damage), and Shield
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default BestiaryGrid;
