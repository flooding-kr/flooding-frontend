type TableItem = {
  id: number | string;
  name: string;
  capacity: number;
  gridArea: string;
  border?: string;
};

const wall: TableItem = {
  id: 'wall',
  name: '칸막이',
  capacity: 0,
  gridArea: 'wall',
  border: 'bottom',
};

export const tables2f = {
  floor: '2F',
  style: {
    gridTemplateAreas: ` "top top top" "table3 wall table1" "table3 wall table2" "bottom bottom bottom" `,
    gridTemplateColumns: '4fr 1fr 4fr',
    gridTemplateRows: '2fr 3fr 3fr 2fr',
  },
  list: [
    { id: 1, name: '테이블 1', capacity: 4, gridArea: 'table1', border: 'bottom,right,left' },
    { id: 2, name: '테이블 2', capacity: 4, gridArea: 'table2', border: 'right,left' },
    { id: 3, name: '테이블 3', capacity: 6, gridArea: 'table3', border: 'left,right' },
    wall,
  ] as TableItem[],
};

export const tables3f = {
  floor: '3F',
  style: {
    gridTemplateAreas: ` "top top top top top top top top top" "table1 table1 table1 table1 wall table2 table2 table2 table2" "table3 table3 table3 table4 table4 table4 table5 table5 table5" "bottom bottom bottom bottom bottom bottom bottom bottom bottom" `,
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '2fr 3fr 3fr 2fr',
  },
  list: [
    { id: 1, name: '테이블 1', capacity: 4, gridArea: 'table1', border: 'left,right,bottom' },
    { id: 2, name: '테이블 2', capacity: 4, gridArea: 'table2', border: 'left,right,bottom' },
    { id: 3, name: '테이블 3', capacity: 6, gridArea: 'table3', border: 'left,right' },
    { id: 4, name: '테이블 4', capacity: 4, gridArea: 'table4' },
    { id: 5, name: '테이블 5', capacity: 6, gridArea: 'table5', border: 'left,right' },
    wall,
  ] as TableItem[],
};

export const tables4f = {
  floor: '4F',
  style: {
    gridTemplateAreas: ` "top top top top top top top top top" "table1 table1 table1 table1 wall table2 table2 table2 table2" "table3 table3 table3 table3 table3 table4 table4 table4 table4" "bottom bottom bottom bottom bottom bottom bottom bottom bottom" `,
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '2fr 3fr 3fr 2fr',
  },
  list: [
    { id: 1, name: '테이블 1', capacity: 4, gridArea: 'table1', border: 'left,right,bottom' },
    { id: 2, name: '테이블 2', capacity: 4, gridArea: 'table2', border: 'right,left,bottom' },
    { id: 3, name: '테이블 3', capacity: 6, gridArea: 'table3', border: 'left' },
    { id: 4, name: '테이블 4', capacity: 4, gridArea: 'table4', border: 'right,left' },
    wall,
  ] as TableItem[],
};
