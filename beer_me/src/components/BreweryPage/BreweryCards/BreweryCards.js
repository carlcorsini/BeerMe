import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreweryCard from './BreweryCard';

import {
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardSubtitle,
  Button
} from 'reactstrap';

const BreweryCards = ({ breweries }) => {
  let listOfBreweries = breweries.map(brewery => (
    <BreweryCard key={brewery.id} brewery={brewery} />
  ));
  return <Row>{listOfBreweries}</Row>;
};

const mapStateToProps = ({ breweries }) => ({
  breweries: breweries
});

export default connect(mapStateToProps, null)(BreweryCards);
