// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Overview, Item, Value, Wrapper, Amount } from "./styles";
import {connect} from "react-redux";
import {getBalances} from "../../../actions";


class Menu extends Component {


  componentDidMount() {

      this.props.getBalances();

  }



  render() {


    return (
      <Container>
        <Overview>
          <Wrapper>
            <Amount>{this.props.balance}</Amount>
            <Value>Total Balance (XHV)</Value>
          </Wrapper>
        </Overview>

        <Item to="/wallet/assets">Assets</Item>
        <Item to="/wallet/exchange">Exchange</Item>
        <Item to="/wallet/transfer">Transfer</Item>
        <Item to="/wallet/settings">Settings</Item>
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
    ...state.balance
});

export default connect(
    mapStateToProps,
    { getBalances }
)(Menu);
