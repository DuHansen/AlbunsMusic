import React from 'react';
import Button from 'react-bootstrap/Button'; // Importando o componente Button
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css'; // Importando o arquivo CSS
import blacksabbath from '../img/blacksabbath.jpg';
import chicletecombanana from '../img/chicletecombanana.jpg';
import ramones from '../img/ramones.jpg';

function GridExample() {
  const data = [
    { image: ramones, title: 'Ramones', description: 'Ramones foi uma banda formada em 1974, considerada como precursora do estilo punk rock.', youtube: 'https://www.youtube.com/watch?v=i3F2y2hRP4o&t=20s', mais: 'https://pt.wikipedia.org/wiki/Ramones' },
    { image: chicletecombanana, title: 'Chiclete com Banana', description: 'Chiclete com Banana é uma banda de axé music que ganhou destaque nos anos 80.', youtube: 'https://www.youtube.com/watch?v=3TJhY1zXtFk' },
    { image: blacksabbath, title: 'Black Sabbath', description: 'Black Sabbath é uma banda de heavy metal formada no ano de 1968 em Birmingham, Reino Unido.', youtube: 'https://www.youtube.com/watch?v=OnWsRUKGDeo' }
  ]; 

  return (
    <Row xs={1} md={2} className="g-4">
      {data.map((item, idx) => (
        <Col key={idx} style={{ alignItems: 'center' }}>
          <Card className="my-card">
            <Card.Img variant="top" src={item.image} style={{  height: '100px', width: '100px', alignItems: 'center' }} />
            <Card.Body>
              <Card.Title style={{ color: 'black', width: '200px' }}>{item.title}</Card.Title>
              <Card.Text style={{ color: 'black', width: '200px' }}>
                {item.description}
              </Card.Text>
              <Button variant="primary" style={{ backgroundColor:'black'}} onClick={() => window.open(item.mais, "_blank")}>Saiba mais</Button> 
              <Button variant="primary" style={{ backgroundColor:'black'}} onClick={() => window.open(item.youtube, "_blank")}>Ouvir</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;





