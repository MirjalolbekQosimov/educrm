import React, { useState } from 'react'
import "../lidTable.css";
import { useSearch } from '../../../../../context/SearchContext';
// import Table from "react-bootstrap/Table";
import { useTheme } from '../../../../../context/ThemeContext';
import PeopleTables from '../../../../../json files/people.json'


function TableData() {

  const {searchValues, handleInputChange, filteredResults} = useSearch()
  
  const { isNightMode } = useTheme()
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = PeopleTables.slice(firstIndex, lastIndex);
  const npage = Math.ceil(PeopleTables.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);



  function prePage() {
    if (currentPage !== firstIndex && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id)
  }
  function nextPage() {
    if (currentPage !== lastIndex && currentPage < npage) {
      setCurrentPage(currentPage + 1)
    }
  }



  
  return (
    <div>
      <div className={isNightMode ? 'lidHeaderSecond' : 'lidHeaderSecond dark'}>
        <h2 className={isNightMode ? 'titleLists' : 'titleLists dark'}>Lidlar ro'yhati</h2>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className={isNightMode ? "page-link" : "page-link dark"} onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, id) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={id}>
                <a href="#" className={isNightMode ? "page-link" : "page-link dark "} onClick={() => changeCurrentPage(n)}  >{n}</a>
              </li>
            ))
          }
          <li className="page-item">
            <a href="#" className={isNightMode ? "page-link" : "page-link dark"} onClick={nextPage}>Next</a>
          </li>
        </ul>
      </div>
      <div className={isNightMode ? 'lidTableBody' : 'lidTableBody dark'}>
        <table  className={isNightMode ? "tables" : "tables darks"}>
          <thead>
            <tr className={isNightMode ? 'tr' : 'tr dark'}>
              <th className='tartib'>No.</th>
              <th className='ism'>Ism</th>
              <th className="familiya">Familiya</th>
              <th className="raqam">Telefon raqam</th>
              <th className="haqida">Markaz haqida</th>
              <th className="guruh">Fanlar</th>
              <th className="sinov">Bo'sh vaqt</th>
            </tr>
          </thead>
          <tbody>
            <tr className={isNightMode ? "searchRow" : "searchRow dark"}>
              <td className="tartib"></td>
              <td>
                <input
                  type="text"
                  name="searchLid"
                  className="searchLid"
                  id="searchLidName"
                  placeholder="...Izlash"
                  value={searchValues.category1}
                  onChange={(e) => handleInputChange(e, 'category1')}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="searchLid"
                  name="searchLid"
                  id="searchLidFname"
                  value={searchValues.category2}
                  onChange={(e) => handleInputChange(e, 'category2')}
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="searchLid"
                  className="searchLid"
                  id="searchLidPhone"
                  value={searchValues.category3}
                  onChange={(e) => handleInputChange(e, 'category3')}
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="searchLid"
                  className="searchLid"
                  id="searchLidAbout"
                  placeholder="...Izlash"
                  value={searchValues.category4}
                  onChange={(e) => handleInputChange(e, 'category4')}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="searchLid"
                  className="searchLid"
                  id="searchLidSubject"
                  placeholder="...Izlash"
                  value={searchValues.category5}
                  onChange={(e) => handleInputChange(e, 'category5')}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="searchLid"
                  className="searchLid"
                  id="searchLidDate"
                  placeholder="...Izlash"
                  value={searchValues.category6}
                  onChange={(e) => handleInputChange(e, 'category6')}

                />
              </td>
            </tr>
            
            {filteredResults.length > 0 ? (
              filteredResults.map((peopleTable, id) => (
                <tr key={id} className={isNightMode ? 'recordsMap' : 'recordsMap dark'}>
                  <td>{peopleTable.id}</td>
                  <td>{peopleTable.name}</td>
                  <td>{peopleTable.surname}</td>
                  <td>{peopleTable.raqam}</td>
                  <td>{peopleTable.haqida}</td>
                  <td>{peopleTable.fanlar}</td>
                  <td>{peopleTable.sinov}</td>
                </tr>
              ))
            ) : (
              searchValues.category1 === "" ? (
                records.map((peopleTable, id) => (
                  <tr key={id} className={isNightMode ? 'recordsMap' : 'recordsMap dark'}>
                    <td>{peopleTable.id}</td>
                    <td>{peopleTable.name}</td>
                    <td>{peopleTable.surname}</td>
                    <td>{peopleTable.raqam}</td>
                    <td>{peopleTable.haqida}</td>
                    <td>{peopleTable.fanlar}</td>
                    <td>{peopleTable.sinov}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No information found</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableData