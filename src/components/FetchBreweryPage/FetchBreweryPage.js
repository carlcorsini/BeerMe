import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import FetchBreweryJumbo from './FetchBreweryJumbo/FetchBreweryJumbo'

import BreweryBeerCards from './BreweryBeerCards/BreweryBeerCards'

class FetchBreweryPage extends Component {
  render() {
    let { breweryBeers, brewery } = this.props.history.location.state
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <FetchBreweryJumbo brewery={brewery} breweryBeers={breweryBeers} />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <BreweryBeerCards
              history={this.props.history}
              breweryBeers={breweryBeers}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default FetchBreweryPage
