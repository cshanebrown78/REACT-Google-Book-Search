import React from "react";
import { Container, Row, Col } from "../Grid";


export function List({children}) {
  return (
    // <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    // </div>
  );
}

// export function ListItem({ children }) {
//   console.log(children)
//   return <li className="list-group-item">{children}</li>;
// }

export class ListItem extends React.Component{
  render(){
    console.log(this.props);
    return (
      <li>
        <Container>
          <div className="card">
            <div className="card-header">
              <h3>{this.props.title}</h3>
            </div>
            <div className="card-body">
              <p>Written by: {this.props.author.join(", ")}</p>
              <p>{this.props.synopsis}</p>
            </div>  
          </div>
         
        </Container>
      </li>
    );
  }
}

