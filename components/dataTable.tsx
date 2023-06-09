import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { VscBlank } from "react-icons/vsc";
import Tooltip from "./tooltip";

type ColumnTypes = "string" | "number";

export interface Column {
  title: string;
  slug: string;
  type: ColumnTypes;
  tooltip?: string;
}

interface TableProps {
  data: any[];
  cols: Column[];
}

export default function DataTable({ data, cols }: TableProps) {
  const [intData, setIntData] = useState<any[]>();
  const [sortData, setSortData] = useState<{
    col: string;
    desc: boolean;
    type: ColumnTypes;
  }>({ col: "", desc: true, type: "string" });

  useEffect(() => {
    setIntData(data);
  }, [data]);

  useEffect(() => {
    if (!data || !sortData.col) return;
    const dat = [...data];

    if (sortData.type === "string") {
      dat.sort((a, b) => {
        const val = a[sortData.col]?.localeCompare(b[sortData.col]);
        return sortData.desc ? val : -val;
      });
    } else {
      dat.sort((a, b) => {
        const val = a[sortData.col] >= b[sortData.col] ? -1 : 1;
        return sortData.desc ? val : -val;
      });
    }

    setIntData(dat);
  }, [sortData, data]);

  const onHeaderClick = useCallback(
    (col: string, type: ColumnTypes) => {
      if (col === sortData.col) {
        setSortData({ col: sortData.col, desc: !sortData.desc, type });
      } else {
        setSortData({ col: col, desc: true, type });
      }
    },
    [sortData]
  );

  const icon = sortData.desc ? (
    <MdOutlineKeyboardArrowUp />
  ) : (
    <MdOutlineKeyboardArrowDown />
  );

  const ColHeader = ({ title, slug, type, tooltip }: Column) => (
    <td onClick={() => onHeaderClick(slug, type)} key={slug}>
      <div>
        <Tooltip delay={0} direction="top" content={tooltip}>
          <div className="title" id={slug}>
            {title}
          </div>
          {sortData.col == slug ? icon : <VscBlank />}
        </Tooltip>
      </div>
    </td>
  );

  return (
    <table className="dataTable">
      <thead>
        <tr>
          {cols.map((col) => (
            <ColHeader
              title={col.title}
              slug={col.slug}
              type={col.type}
              key={col.slug}
              tooltip={col.tooltip}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {intData?.map((row) => (
          <tr key={row.slug}>
            {cols.map((col) => {
              return (
                <td key={col.slug}>
                  <Link href={row.href}>{row[col.slug]}</Link>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
