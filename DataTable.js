import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const TableExample = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite Food</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Ramir</DataTable.Cell>
        <DataTable.Cell>Pizza</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Jay</DataTable.Cell>
        <DataTable.Cell>Spaghetti</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Bianca</DataTable.Cell>
        <DataTable.Cell>Brownie</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Louis</DataTable.Cell>
        <DataTable.Cell>Burger</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TableExample;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#4de3db',
  },
});
