import React from "react";
import { Card, Accordion } from "react-bootstrap";

const BestiaryGrid = () => {
  return (
    <div className="p-3">
      <h3 className="text-muted ">BEASTIARY</h3>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="beastName">Beastmen</div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="description">
                Beastmen are twisted creatures of Chaos, hideously melding the
                features of humans and animals. They have haunted the forests of
                the Empire for countless generations, preying on humanity as
                hunters prey on animals. They travel in small bands known as war
                herds, which sometimes unite under a strong leader to bring
                death and terror to the people of the Empire. Beastmen are true
                servants of Chaos and they hate Mankind above all.
              </div>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default BestiaryGrid;
