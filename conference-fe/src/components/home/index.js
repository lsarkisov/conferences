import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div>
      {conferences && conferences.length > 0 &&
        conferences.map(conf => (
          <dl key={conf.id}>
            <dt key={conf.id}>
              {conf.name}
            </dt>
            <dd><b>start date: </b>{conf.start}</dd>
            <dd><b>end date: </b>{conf.end}</dd>
          </dl>
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
