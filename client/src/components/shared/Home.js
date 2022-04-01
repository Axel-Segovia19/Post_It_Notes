import { MainHeader } from "../styles/shared";
import { MainTitle } from "../styles/shared";
import { Container, Row, Col , Button, Card} from "react-bootstrap";
import { Info } from  "../styles/shared";



const Home = () => (
  <>

  <MainTitle>
  <MainHeader>Welcome <br />To  <br /> Post It Notes! </MainHeader>
  </MainTitle>


  
  <Container>
  <Row>
    <Col><img src="https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    style=
    {{marginLeft:'50px',marginTop: '100px'}} alt= "note">
      </img>
  </Col>
    <Col style={{marginLeft:'40px'}}>
    
    <Info>
      <h1 style={{marginTop:'50px', textAlign:'center'}}>Features that are <br /> amazing</h1>
    <p style={{color:'black',
              fontWeight:'300',
              marginTop:'20px',
              textAlign:'center'
  
  }}>
     
        simply dummy text printing and typesetting industry.been the industry's standard dummy text ever since < br />the 1500s, wh
     
      </p>
      <div style={{textAlign:'center'}}>
    <Button variant="outline-secondary" style={{marginTop:' 25px',fontWeight:'300'}}>Meet the Creator</Button>{' '}
    </div>
    <br/>
    <br/>
    <br />
    <div style={{ textAlign:'center'}}>
    <Button variant="outline-secondary" style={{fontWeight:'300',marginBottom:'20px'}}> 801-069-4200</Button>{' '}
    </div>
    </Info>
    </Col>
  </Row >
  
</Container>

<br/>


<Container >
  <Row md={4}>
    <Col ><Card style={{ width: '25rem' }}>
  <Card.Img style={{width:'150px',height:'150px', marginLeft:'125px', marginTop:'10px'}} src="https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg" />
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}>Creator</Card.Title>
    <Card.Text style={{textAlign: 'center'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card></Col>
  </Row>
</Container>





  </>




)
export default Home;
