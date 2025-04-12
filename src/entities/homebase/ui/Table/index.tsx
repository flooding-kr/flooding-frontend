'use client';

import { useEffect, useState } from 'react';

import { useStore } from '@/entities/homebase/store/useStore';

import { getHomebasedata } from '../../api/getHomebasedata';
import { tables2f, tables3f, tables4f } from '../../data/table';

interface HomebaseData {
  floor: number;
  period: number;
}

export default function Table() {
  const [tables, setTables] = useState(tables2f);
  const [data, setData] = useState<any>(null);
  const { floor, period, selectedTable, setSelectedTable, setSelectedTableCapacity } = useStore();

  const getHomebase = async ({ floor: selectedFloor, period: selectedPeriod }: HomebaseData) => {
    try {
      const response = await getHomebasedata({ floor: selectedFloor, period: selectedPeriod });
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
  useEffect(() => {
    if (period && floor) {
      getHomebase({ floor, period });
    }
  }, [selectedTable]);
  useEffect(() => {
    setSelectedTable(null);

    if (period && floor) {
      getHomebase({ floor, period });
    }

    switch (floor) {
      case 2: {
        setTables(tables2f);
        break;
      }
      case 3:
        setTables(tables3f);
        break;
      case 4:
        setTables(tables4f);
        break;
      default:
        setTables(tables2f);
    }
  }, [floor, period, setSelectedTable]);

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
        className="text-center grid h-full"
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
          const isAttended = data?.find(
            (d: { table_number: string | number }) => d.table_number === table.id
          )?.is_attended;
          const tableClassName = [
            'flex flex-col border-solid border-gray-500 flex items-center justify-center',
            isSelected && 'bg-main-100',
            isTable && 'cursor-pointer',
            isAttended && 'bg-gray-100 cursor-not-allowed',
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
                    setSelectedTableCapacity(table.capacity);
                  }
                }
              }}
              tabIndex={0}
              onClick={() =>
                typeof table.id === 'number' && !isAttended && setSelectedTable(table.id)
              }
              className={tableClassName}
              style={{ gridArea: table.gridArea }}
            >
              <div>
                {table.name}
                {typeof table.id === 'number' &&
                  (isAttended ? (
                    <span className="text-error ml-1"> 마감</span>
                  ) : (
                    <span className="text-blue-500 ml-1">({table.capacity}명)</span>
                  ))}
              </div>
              <div className="flex flex-wrap justify-center gap-1 text-body3R text-gray-500 max-w-44 mt-1">
                {data
                  ?.find((d: { table_number: string | number }) => d.table_number === table.id)
                  ?.participants?.map((participant: { school_number: any; name: any }) => (
                    <span key={participant.school_number}>
                      {participant.school_number} {participant.name}
                    </span>
                  )) || ''}
              </div>
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
