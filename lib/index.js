import React, { Component } from 'react';

import {
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';


const isAndroid = Platform.os !== 'ios';

export default class EditText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClose: false,
    };
  }
  setClose = (value) => {
    if (isAndroid) {
      const { clearButtonMode } = this.props;
      const isEmpty = value === undefined || value === '';

      if (!isEmpty && clearButtonMode) {
        this.setState({
          showClose: true,
        });
      } else {
        this.setState({
          showClose: false,
        });
      }
    }
  }
  componentWillMount() {
    const { value } = this.props;
    this.setClose(value);
  }

  handleTextChange = (value) => {
    this.props.onChangeText(value);
    this.setClose(value);
  }

  handleClear = () => {
    this.input.clear();
    this.handleTextChange('');
  }

  render() {
    const style = [styles.container, this.props.inputStyle];

    return (
      <View style={style}>
        <TextInput
          ref={(input) => { this.input = input; }}
          {...this.props}
          onChangeText={this.handleTextChange}
        />
        {
          this.state.showClose && (
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={this.handleClear}
              hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
            >
              <Text style={styles.clearIcon}>X</Text>
            </TouchableOpacity>)
        }
      </View>
    );
  }
}

EditText.propTypes = {
  ...TextInput.defaultProps,
  inputStyle: View.propTypes.style,
};

EditText.defaultProps = {
  style: { height: 35, padding: 0 },
};
