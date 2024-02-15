import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
export default function Event(props) {
  const [e, SetEvent]=useState(props.e)
  const bookEvent =()=>{ props.fonctionAlert()
    SetEvent((previousE)=>({
    ...previousE,
     nbParticipants: previousE.nbParticipants+1, 
    nbTickets: previousE.nbTickets-1}))}
  const changelike=()=>{
    SetEvent((previousE)=>({
      ...previousE,
      like: !previousE.like
    }))}
  
    return <>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets===0?"images/sold_out.png":`images/${e.img}`} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>{e.description}</Card.Text>
         <p>price :{e.price}</p>
         <p>nombre Participants :{e.nbParticipants}</p>
         <p>nombre de tickets :{e.nbTickets}</p>
         <Button variant="primary" onClick={bookEvent} disabled={e.nbTickets===0?true: false}>book an event</Button>
         <Button variant="danger" onClick={changelike} >{e.like?"like":"dislike"}</Button>

  
      </Card.Body>
    </Card>
 
    </>
}