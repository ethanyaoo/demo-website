import React, { Component } from 'react';
import style from './Menu.css';

import DataTable from 'components/datatables/DataTable.jsx';

export default class KeywordsPage extends Component {
   constructor(props) {
      super(props)
      this.state = {
         companies: [
            { name: 'Uber', description: 'Wasif', size: 21, viewMore: 'wasif@email.com' },
            { name: 'Uber', description: 'Ali', size: 19, viewMore: 'ali@email.com' },
         ]
      }
   }

   renderTableData() {
      return this.state.companies.map((company, index) => {
         const { name, description, size, viewMore } = company
         return (
            <tr key={size}>
               <td>{name}</td>
               <td>{description}</td>
               <td>{size}</td>
               <td>{viewMore}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
      let header = Object.keys(this.state.companies[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
           <h1>Companies Matched</h1>
           <table id='students'>
             <tbody>
               <tr>{this.renderTableHeader()}</tr>
               {this.renderTableData()}
             </tbody>
           </table>
           <DataTable/>
         </div>
      )
   }
}
