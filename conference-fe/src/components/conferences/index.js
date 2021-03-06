import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { getConferencesAction, startReserveConferenceAction, startRemoveConferenceAction } from "../../actions/conference";

export default function Conferences(props) {
  const dispatch = useDispatch();
  const { conferences } = useSelector(state => state.conferences);

  useEffect(() => {
    dispatch(getConferencesAction.request());
  }, [dispatch]);

  function reserveConference(id) {
    dispatch(startReserveConferenceAction(id));
  }

  function removeConference(id) {
    dispatch(startRemoveConferenceAction.request({ payload: id }));
  }

  return (
    <div className="conference-list">
      {conferences && conferences.length > 0 &&
        conferences.map(conf => (
          <Card key={conf.id}>
            <Card.Body>
              <Card.Title>{conf.name}</Card.Title>
              <Card.Text>
                {conf.description}
              </Card.Text>
              <Card.Title>
                <ul className="conference-date">
                  <li><b>start date: </b>{conf.start}</li>
                  <li><b>end date: </b>{conf.end}</li>
                </ul>
              </Card.Title>
              <Button variant="primary">
                <Link to={`/conference/reserve/${conf.id}`}
                  onClick={() => reserveConference(conf.id)}
                >Reserve conference</Link>
              </Button>
              <Button onClick={() => removeConference(conf.id)} variant="danger">Cancel</Button>
            </Card.Body>
          </Card>
        ))
      }
      {conferences && conferences.length === 0 &&
        (<>
          <h2>You don't have any conference</h2>
          <p><Button><Link to="/conference/new">Create new conference</Link></Button></p>
        </>)
      }
    </div>
  );
}
