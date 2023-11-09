import { Table as MantineTable } from '@mantine/core';
import { FC, useEffect, useState } from 'react';

interface TColumnDef {
  header: string;
  accessorKey: string;
}

interface BodyRow {
  [key: string]: unknown;
}

interface TableProps {
  columns: TColumnDef[];
  data: BodyRow[];
  actions: {
    edit: (id: string) => void;
    delete: (id: string) => void;
  };
}

const Table: FC<TableProps> = ({ columns, data, actions }) => {
  const [localData, setLocalData] = useState({ columns: [], data: [] });

  const parseTableData = () => {
    const sortedRowsData = data.map((row) => {
      const rowEntries = Object.entries(row);
      const rowData = [];

      columns.forEach((column) => {
        const [matchedRowKey, matchedRowValue] = rowEntries.find(
          ([key]) => key === column.accessorKey
        );

        rowData.push({
          variant: '',
          value: matchedRowValue,
          id: matchedRowKey,
        });
      });
      return rowData;
    });
    return sortedRowsData;
  };

  useEffect(() => {
    setLocalData(() => ({ columns, data: parseTableData() }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, data]);

  return (
    <MantineTable withTableBorder>
      <thead>
        <tr>
          {localData.columns.map(({ header, accessorKey }) => (
            <th key={accessorKey} style={{ textAlign: 'center' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody style={{ textAlign: 'center' }}>
        {localData.data.map((row, key) => {
          return (
            <tr key={key}>
              {row.map((rowData) => {
                if (rowData.id === 'image') {
                  return (
                    <td key={rowData.id}>
                      <img src={rowData.value as string} alt="user" />
                    </td>
                  );
                }
                if (rowData.id === 'actions') {
                  return (
                    <td key={rowData.id}>
                      <button
                        onClick={() => actions.edit(rowData.id)}
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => actions.delete(rowData.id)}
                        type="button"
                      >
                        Delete
                      </button>
                    </td>
                  );
                }
                return <td key={rowData.id}>{rowData.value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </MantineTable>
  );
};

export default Table;
