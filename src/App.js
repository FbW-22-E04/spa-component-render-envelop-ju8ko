import React from "react";
import "./app.css";
const _fromPerson = {
  name: "Julia",
  address1: "1123 Berliner plz.",
  address2: "Berlin, 14567",
};
const _toPerson = {
  name: "Oleg",
  address1: "2335 Berliner plz.",
  address2: "Berlin, 14567",
};
export default function App() {
  return <Envelop fromPerson={_fromPerson} toPerson={_toPerson} />;
}

const AddressLabel = (props) => {
  return (
    <div className={`address-label ${props.position}`}>
      <span>{props.name}</span>
      <span>{props.address1}</span>
      <span>{props.address2}</span>
    </div>
  );
};

const Envelop = (props) => {
  return (
    <div className="envelop">
      <AddressLabel
        name={props.fromPerson.name}
        address1={props.fromPerson.address1}
        address2={props.fromPerson.address2}
        position="top-left"
      />
      <AddressLabel
        name={props.toPerson.name}
        address1={props.toPerson.address1}
        address2={props.toPerson.address2}
        position="center"
      />
    </div>
  );
};
