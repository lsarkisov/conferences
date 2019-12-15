import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from 'react-bootstrap';
import { getConferencesAction } from "../../actions/conference";

export default function Home(props) {
  const dispatch = useDispatch();
  const { conferences } = useSelector(state => state.conferences);

  useEffect(() => {
    if (!conferences) {
      dispatch(getConferencesAction.request());
    }
  }, [dispatch, conferences]);

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
              <Button variant="primary">Reserve ticket</Button>
              <Button variant="danger">Cancel</Button>
            </Card.Body>
          </Card>
        ))
      }
      {conferences && conferences.length === 0 &&
        (<>
          <h2>You don't have andy conference</h2>
        </>)
      }
    </div>
  );
}
