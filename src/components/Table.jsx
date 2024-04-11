import * as React from 'react'
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './table.css'


export default function Table() {
    const [rows, setRows] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    // Functions to fetch and filter city
    const filterUsers = async (setRows, searchQuery) => {
        try {
            let response;
            if (searchQuery) {
                response = await axios.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=search(name%2C%20%22${searchQuery}%22)%20or%20search(cou_name_en%2C%20%22${searchQuery}%22)`)
                setRows(response.data.results);
            }
            else {
                response = await axios.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100`)
                setRows(response.data.results.sort((a, b) => (a.name < b.name ? -1 : 1)));
            }
        } catch (e) {
            console.log(e)
        }
    };
    React.useEffect(() => {
        filterUsers(setRows, searchQuery);

    }, [ searchQuery]);

    const link = {
        textDecoration: 'none',
        fontWeight: "600",
        color: "#13a7e1"
    }

    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <Navbar setSearchQuery={setSearchQuery} style={{ width: '100%' }} />
            <CTable>
                <CTableHead>
                    <CTableRow color="dark">
                        <CTableHeaderCell scope="col">City Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Country Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Population</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='extra'>LON</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className='extra'>LAT</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {rows.map((row) => (
                        <CTableRow key={row.geoname_id}>
                            <CTableDataCell style={{ width: "200px" }}>
                                <Link to={`/home?${new URLSearchParams({ lon: row.coordinates.lon, lat: row.coordinates.lat, name: row.name }).toString()}`} state={{ row: row }} style={link}>
                                    {row.name}
                                </Link>
                            </CTableDataCell>
                            <CTableDataCell>{row.cou_name_en}</CTableDataCell>
                            <CTableDataCell>{row.population}</CTableDataCell>
                            <CTableDataCell className='extra'>{row.coordinates.lon}</CTableDataCell>
                            <CTableDataCell className='extra'>{row.coordinates.lat}</CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    )
}