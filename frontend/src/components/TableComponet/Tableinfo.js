import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import './TableInfo.css';

const FacultyArchive = () => {


    


    const [data, setData] = useState([]);


    useEffect(() => {
        (async () => {
            const result = await axios("");
            setData(result.data);
        })();
    }, []);

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])


    const columns = [
        {
            name: 'Name',
            selector: row => row.client_name,
            sortable: true,

        },
        {
            name: 'Project Link',
            selector: row => row.project_link,
            sortable: true,

        },

        {
            name: 'Project Id',
            selector: row => row.project_id,
            sortable: true,

        },
        {
            name: 'Project Budget',
            selector: row => row.actual_value,
            sortable: true,

        },
        {
            name: 'Bid Value',
            selector: row => row.bid_value,
            sortable: true,

        },
        {
            name: 'Created',
            selector: row => row.deadline,
            sortable: true,

        },
        {
            name: 'Created By',
            selector: row => row.client_name,
            sortable: true,

        },
    
        {
            name: 'Building Delay Time',
            selector: row => row.bidding_minutes,
            sortable: true,

        },
        {
            name: 'Status',
            selector: row => row.status_id,
            sortable: true,
            

        },

    ]


    const conditionalRowStyles = [
        {
          when: row => row.status_id.includes('0'),
          style: row => ({
            backgroundColor: 'green',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          }),
        }
     
      ];

    




    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        defaultColumn,
        initialState: {pageIndex:1}
    },
        useFilters,
        useGlobalFilter,
        // useSortBy,
        usePagination,);

    const { globalFilter, pageIndex, pageSize } = state;


    return (
        <>
           
            <table className='table-1' {...getTableProps()}>
                <thead>

                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                    <div>
                                        {column.canFilter ? column.render('Filter') : null}
                                    </div>

                                    {/* <span>
                                        {column.isSorted ? (column.isSortedDesc ? <i className="fa-solid fa-sort-down icon"></i> : <i className="fa-sharp fa-solid fa-sort-up icon"></i>) : <i className="fa-sharp fa-solid fa-sort icon"></i>}
                                    </span> */}

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className='flex justify-end items-center p-5 bg-slate-50'>
                <span className='text-sm'>
                    Page {' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>

                {/* <span>
                    | Go to page: {' '}
                    <input type='number' defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        style={{ width: '50px' }}
                    />
                </span> */}

                <select className='text-sm border rounded border-black mx-2 hidden md:block' value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 20, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }

                </select>


                <span>
                    <button className='btn btn-success btn-xs' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

                    <button className='btn btn-info btn-xs mr-3' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button className='btn btn-info btn-xs' onClick={() => nextPage()} disabled={!canNextPage}>Next </button>

                    <button className='btn btn-success btn-xs' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                </span>
            </div>

        </>
    );
};

export default TableInfo;