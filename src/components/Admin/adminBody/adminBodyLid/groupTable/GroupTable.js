import React from 'react'
import './groupTable.css'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

function GroupTable() {
  return (
    <div className='groupTable'>
        <div className="lidTable">
      <div className="lidTableHeader">
        <div className="lidBreadCrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Guruhlar</Breadcrumb.Item>
            <Breadcrumb.Item active>Guruhlar ro'yhati</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="lidAddButton">
          <a href="btn">+ Guruh qo'shish</a>
        </div>
      </div>
      <div className="lidHeaderSecond">
        <h2>Guruhlar ro'yhati</h2>
        <Pagination>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{21}</Pagination.Item>
        </Pagination>
      </div>
      <div className="lidTableBody">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="tartib">No.</th>
              <th className="ism">Guruh nomi</th>
              <th className="familiya">Fan nomi</th>
              <th className="raqam">Xona raqami</th>
              <th className="haqida">Dars hafta kun</th>
              <th className="guruh">Dars vaqti</th>
              <th className="sinov">Davomat qilish</th>
            </tr>
          </thead>
          <tbody>
            <tr className="searchRow">
              <td className="tartib"></td>
              <td>
                <input
                  type="search"
                  name="searchLid"
                  id="searchLid"
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="search"
                  name="searchLid"
                  id="searchLid"
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="search"
                  name="searchLid"
                  id="searchLid"
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="search"
                  name="searchLid"
                  id="searchLid"
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="search"
                  name="searchLid"
                  id="searchLid"
                  placeholder="...Izlash"
                />
              </td>
              <td>
                <input
                  type="search"
                  name="searchLid"
                  id="searchLid"
                  placeholder="...Izlash"
                />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Diyorbek</td>
              <td>Abdiqayumov</td>
              <td>+998903777337</td>
              <td>Telegram</td>
              <td>Dasturlash</td>
              <td>30.05.2023</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Abdulla</td>
              <td>Abduqayumov</td>
              <td>+998902250506</td>
              <td>Instagram</td>
              <td>Matematika</td>
              <td>29.05.2023</td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    </div>
    
    </div>
  )
}

export default GroupTable