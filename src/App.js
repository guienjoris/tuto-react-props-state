import React , {Component} from 'react';
import './App.css';
import Client from './Client';
import ClientForm from './ClientForm';
  
class App extends Component {
  state= {
    clients:[
      {id:1, nom:"Joris Guien"},
      {id:2, nom: "Smaelle Lefort"},
      {id:3, nom: "Gramos Imeri"}
    ]
  }
  handleDelete =id=>{
    const clients = [...this.state.clients];
    const index = clients.findIndex(client=>{return client.id === id;})
    clients.splice(index,1);
    this.setState({clients})
  }
  handleAdd = client =>{
    const clients = [...this.state.clients];
        clients.push(client);
        this.setState({clients})
  }
  
  render(){
    const title = " Liste des clients";
  return (
    <div className="App">
      <h1>{title}</h1>
      <ul>
      {this.state.clients.map(client=>
      <Client details={client} onDelete={this.handleDelete} />
    )}
      </ul>
      <ClientForm onClientAdd = {this.handleAdd} />
    </div>
  );
}
}

export default App;
