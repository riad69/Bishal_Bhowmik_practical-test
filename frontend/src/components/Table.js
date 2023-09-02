import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function Table() {

    const [tableInfo, setTableInfo] = useState();

//   https://seopage1erp.website/api/leads

    useEffect(() => {
        axios.get('seopage1.json')
            .then(res => setTableInfo(res.data))
            .catch(err => console.log(err))
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
            style:row=> ({
               backgroundColor : "green"
            }) 

        },

    ]


    // const conditionalRowStyles = [
    //     {
    //       when: row => row.status_id.includes('0'),
    //       style: row => ({
    //       status_id ='1' ? backgroundColor: 'red'
    //       }),
    //     }
       
     
    //   ];

    
    return (
        <div>


            <div className='w-[90%]'>
                <DataTable
                    cls
                    columns={columns}
                    data={tableInfo}
                    selectableRows
                    fixedHeader
                    pagination
                    expandableRows
                    highlightOnHover
                    // conditionalRowStyles={conditionalRowStyles}

                >

                </DataTable>

            </div>

            


        </div>
    )
}

export default Table