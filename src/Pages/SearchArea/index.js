import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardGrid() {
import './style.css'
  return (
    <Row xs={1} md={4} className="g-4 book-list">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Title>volumeInfo</Card.Title>
            <Card.Img className="book-img" variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                <p>Author</p>
                <p>Published Date</p>
                <p>ISBN</p>
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;

//Old code commented out for now



// function SearchArea() {
//   return (
//     <div className= "container">
//       <div class="row" >
//         <div class="App-searchArea col-lg-12 col-md-12 col-sm-12">
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default SearchArea;