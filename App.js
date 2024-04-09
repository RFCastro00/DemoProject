import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native';

import TableExample from './DataTable';

const App: () => Node = () => {
  return (
    <View>
      <TableExample />
    </View>
  );
};

export default App;
