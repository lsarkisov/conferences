import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { getRoomsAction } from "../../actions/conference";
import { formatSeats } from "../../utils";
import Seats from "../seats";

export default function ReserveConference(props) {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [conference, setConference] = useState(null);
  const dispatch = useDispatch();
  const { conferences, conferenceId } = useSelector(state => state.conferences);
  const { all } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(getRoomsAction.request());
  }, [dispatch]);

  useEffect(() => {
    if (all) {
      const { first, second } = all;
      setFirst(first);
      setSecond(second);
    }
  }, [all]);

  useEffect(() => {
    if (conferences && conferenceId) {
      setConference(conferences.filter(
        conference => conference.id === conferenceId)[0]);
    }
  }, [dispatch, conferenceId, conferences]);

  return (
    <>
      {conference &&
        (
          <>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Card key={conference.id}>
                  <Card.Body>
                    <Card.Title>{conference.name}</Card.Title>
                    <Card.Text>
                      {conference.description}
                    </Card.Text>
                    <Card.Title>
                      <ul className="conference-date">
                        <li><b>start date: </b>{conference.start}</li>
                        <li><b>end date: </b>{conference.end}</li>
                      </ul>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                {first &&
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} eventKey="0">
                          Show seats on floor 1
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Seats rows={formatSeats(first)} />
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                }
                {second &&
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} eventKey="0">
                          Show seats on floor 2
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">

                        <Seats rows={formatSeats(second)} />
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                }
              </Col>
            </Row>
          </>
        )
      }
    </>
  );
}
