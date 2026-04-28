import React , {useState}from 'react';

function Studentlist(props)
 {
    const students = props.students;
    return (
        <>
        
        <h2>Name : {students[0].name}</h2>
        <h2>Age : {students[0].age}</h2>
        <h2>Course : {students[0].course}</h2>
        

        <h2>Name : {students[1].name}</h2>
        <h2>Age : {students[1].age}</h2>
        <h2>Course : {students[1].course}</h2>
        

        <h2>Name : {students[2].name}</h2>
        <h2>Age : {students[2].age}</h2>
        <h2>Course : {students[2].course}</h2>
        

        <h2>Name : {students[3].name}</h2>
        <h2>Age : {students[3].age}</h2>
        <h2>Course : {students[3].course}</h2>
        
        <h2>Name : {students[4].name}</h2>
        <h2>Age : {students[4].age}</h2>
        <h2>Course : {students[4].course}</h2>

        <h2>Name : {students[5].name}</h2>
        <h2>Age : {students[5].age}</h2>
        <h2>Course : {students[5].course}</h2>

        <h2>Name : {students[6].name}</h2>
        <h2>Age : {students[6].age}</h2>
        <h2>Course : {students[6].course}</h2>
        </>
    );
}
export default Studentlist;