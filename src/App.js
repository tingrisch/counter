import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux"

import Plus from "./components/Plus";
import Minus from "./components/Minus";
import Counter from "./components/Counter"

import { incremented, decremented } from "./actions/counterActions.js"

import './App.css';

const App = ({ count, increment, decrement }) =>
  <div>
    <Minus decrement={ decrement } />
    <Counter count={ count } />
    <Plus increment={ increment}  />
  </div>;

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incremented()),
    decrement: () => dispatch(decremented())
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
