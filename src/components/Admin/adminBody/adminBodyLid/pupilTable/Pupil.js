import React,{useState} from "react";

import Table from "react-bootstrap/Table";
import "../LidTable/lidTable.css";
import Student from "../../../../json files/student.json";
import { useSearchPupil } from "../../../../context/SearchStudentContext";
import { useTheme } from "../../../../context/ThemeContext";
function Pupil() {

  const {isNightMode} = useTheme()
  const {searchValues, handleInputChange, filteredResults} = useSearchPupil()

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Student.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Student.length / recordsPerPage);
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
      <div className="lidTable">
      <div className={isNightMode ? 'lidHeaderSecond' : 'lidHeaderSecond dark'}>
      <h2 className={isNightMode ? 'titleLists' : 'titleLists dark'}>O'quvchilar ro'yhati</h2>
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
        <div className="lidTableBody">
          <table className={isNightMode ? "tables" : "tables darks"}>
            <thead>
              <tr className={isNightMode ? 'tr' : 'tr dark'}>
                <th className="tartib">No.</th>
                <th className="ism">Ism</th>
                <th className="familiya">Familiya</th>
                <th className="raqam">Telefon raqam</th>
                <th className="haqida">Ustoz</th>
                <th className="guruh">Fanlar</th>
                <th className="sinov">To'lov</th>
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
                filteredResults.map((students, id) => (
                  <tr key={students.id} className={isNightMode ? 'recordsMap' : 'recordsMap dark'}>
                    <td>{students.id}</td>
                    <td>{students.name}</td>
                    <td>{students.surname}</td>
                    <td>{students.raqam}</td>
                    <td>{students.ustoz}</td>
                    <td>{students.fanlar}</td>
                    <td>{students.tolov}</td>
                  </tr>
                ))
              ) : searchValues.category1 === "" ? (
                Student.map((students, id) => (
                  <tr key={id} className={isNightMode ? 'recordsMap' : 'recordsMap dark'}>
                    <td>{id + 1}</td>
                    <td>{students.name}</td>
                    <td>{students.surname}</td>
                    <td>{students.raqam}</td>
                    <td>{students.ustoz}</td>
                    <td>{students.fanlar}</td>
                    <td>{students.tolov}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No information found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pupil;
