import { useEffect, useState } from 'react';

import { useStore } from '@/entities/homebase/store/useStore';

import { tables2f, tables3f, tables4f } from '../../data/table';

export default function Table() {
  const [tables, setTables] = useState(tables2f);
  const { floor, classTime, selectedTable, setSelectedTable } = useStore();

  useEffect(() => {
    setSelectedTable(null);
    switch (floor) {
      case '2층':
        setTables(tables2f);
        break;
      case '3층':
        setTables(tables3f);
        break;
      case '4층':
        setTables(tables4f);
        break;
      default:
        setTables(tables2f);
    }
  }, [floor, classTime]);

  const getBorderClasses = (border?: string) =>
    border
      ? border
          .split(',')
          .map(
            type =>
              ({
                right: ' border-r',
                left: ' border-l',
                bottom: ' border-b',
              })[type] || ''
          )
          .join('')
      : '';
  return (
    <div className="text-body2B w-full h-full">
      <div
        className="text-center grid h-full  "
        style={{
          gridTemplateAreas: tables.style.gridTemplateAreas,
          gridTemplateColumns: tables.style.gridTemplateColumns,
          gridTemplateRows: tables.style.gridTemplateRows,
        }}
      >
        <div
          className="text-main-600 border border-solid border-gray-500 flex items-center justify-center"
          style={{ gridArea: 'top' }}
        >
          {tables.floor}
        </div>
        {tables.list.map(table => {
          const isSelected = selectedTable === table.id;
          const isTable = typeof table.id === 'number';
          const tableClassName = [
            'border-solid border-gray-500 flex items-center justify-center',
            isSelected && 'bg-main-100',
            isTable && 'cursor-pointer',
            getBorderClasses(table.border),
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={table.id}
              role="button"
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  if (typeof table.id === 'number') {
                    setSelectedTable(table.id);
                  }
                }
              }}
              tabIndex={0}
              onClick={() => typeof table.id === 'number' && setSelectedTable(table.id)}
              className={tableClassName}
              style={{ gridArea: table.gridArea }}
            >
              {table.name}
              {typeof table.id === 'number' && (
                <span className="text-blue-500 ml-1">({table.capacity}명)</span>
              )}
            </div>
          );
        })}
        <div
          className="border border-solid border-gray-500 flex items-center justify-center"
          style={{ gridArea: 'bottom' }}
        >
          출입문
        </div>
      </div>
    </div>
  );
}
