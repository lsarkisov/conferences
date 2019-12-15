import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { saveConferenceAction } from "../../actions/conference";
import { formatDate } from "../../utils";

export default function NewConference(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const { conferences } = useSelector(state => state.conferences);
  const history = useHistory();

  function onClick() {
    dispatch(saveConferenceAction.request({payload: {
      name, 
      description, 
      start: formatDate(startDate),
      end: formatDate(endDate)
    }}));
  }

  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <Form.Group controlId="conference.name">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="conference name" />
          </Form.Group>
          <Form.Group className="confererence-form" controlId="conference.description">
            <Form.Label>Description</Form.Label>
            <Form.Control value={description} onChange={e => setDescription(e.target.value)} as="textarea" rows="3" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <ul className="date-pcikers">
            <li>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
              />
            </li>
            <li>
              <DatePicker
                selected={startDate > endDate ? startDate : endDate}
                onChange={date => setEndDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
                minDate={startDate}
              />
            </li>
            <li className="submit-button"><Button onClick={onClick} variant="primary">Save</Button></li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
