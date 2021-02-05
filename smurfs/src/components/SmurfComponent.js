import axios from "axios";
import { website } from "../actions";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfComponent = (props) => {
  const [initialSmurf, setInitialSmurf] = useState([]);

  useEffect(() => {
    axios
      .get(website)
        .then((res) => {
            console.log("res from axios in SmurfComponent", res)
            setInitialSmurf(res.data)
        })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
      <div>
          {initialSmurf.map((smurf) => (
              <p>{smurf.name}</p>
          ))}
      "This is the Smurf Component"
      <button onClick={handleClick}>GET SMURFS</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    smurfs: state.smurfsReducer.smurfs,
    isLoading: state.smurfsReducer.isLoading,
    error: state.smurfsReducer.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfComponent);
