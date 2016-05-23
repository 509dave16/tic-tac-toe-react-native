import React, {Component} from 'react'
import {
  View
} from 'react-native';
import LabelKeyValue from './LabelKeyValue.js';

const LabelKeyValueList = ({keyValuePairs}) => {
  const filteredKeyValuePairs = () => {
    const list = [];
    for(const key in keyValuePairs) {
      const value = keyValuePairs[key];
      if(value) {
        list.push(<LabelKeyValue key={key} keyValue={key} value={value} />);
      }
    }
    return list;
  };

  return (
    <View style={{
			flexDirection: 'column',
			alignItems: 'flex-start'
		}}>
      {filteredKeyValuePairs()}
    </View>
  );
};

LabelKeyValueList.propTypes = {
  keyValuePairs: React.PropTypes.object.isRequired
};

export default LabelKeyValueList;
