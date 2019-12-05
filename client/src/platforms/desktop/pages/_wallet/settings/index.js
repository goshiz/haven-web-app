import React, { Component } from "react";
import { connect } from "react-redux";
import { Settings } from "../../../../../shared/pages/_wallet/settings";
import { queryMnemonicKeyRPC } from "../../../ipc/rpc/rpc";

class SettingsDesktopContainer extends Component {
  state = {
    psk: "",
    seed: "",
    sec_viewKey_string: "",
    pub_spendKey_string: "",
    pub_viewKey_string: ""
  };

  componentDidMount() {
    queryMnemonicKeyRPC().then(res => this.setState({ seed: res.key }));
  }

  render() {
    return <Settings {...this.state} />;
  }
}

const mapStateToProps = state => ({
  keys: state.keys
});

export const SettingsDesktop = connect(
  mapStateToProps,
  {}
)(SettingsDesktopContainer);