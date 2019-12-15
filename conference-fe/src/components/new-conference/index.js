import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import { Row, Col, Form, Button, Accordion, Card } from 'react-bootstrap';

export default function NewConference(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const { conferences } = useSelector(state => state.conferences);

  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <Form.Group controlId="conference.name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="conference name" />
          </Form.Group>
          <Form.Group className="confererence-form" controlId="conference.description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
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
            <li className="submit-button"><Button variant="primary">Save</Button></li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
