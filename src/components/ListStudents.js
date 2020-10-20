import React from 'react';
import {connect } from 'react-redux';
import{Person} from '@material-ui/icons';
import 
{ 
  Table ,
  TableContainer ,
  TableCell,
  TableBody ,
  TableRow ,
} from '@material-ui/core';

import {listStudent } from '../actions';
import TableHeader  from './UI/TableHeader';



class ListStudents extends React.Component{
    componentDidMount(){
        this.props.listStudent(); 
        console.log(this.props);
    }

    renderList(){
      

        return (
            <TableContainer >
              <Table size="large">
                <TableHeader />
                <TableBody>
                  {this.props.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell  >
                      <Person color="primary" />  {student.name}
                      </TableCell>
                      
                      <TableCell align="right">{student.status}</TableCell>
                      <TableCell align="right">{student.major}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
            </TableContainer>
          );
        
        
    }


    render(){
        
          return (
            <div >
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps =state => {
    return {students: state.students}
}


export default connect(mapStateToProps, {listStudent}) (ListStudents);