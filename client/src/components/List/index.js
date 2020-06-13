import React from "react";


export function List({children}) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

// export class ListItem extends React.Component{
//   render() {
//     console.log(this.props);
  
//   return (
//     <div className="text-center">
//       <img alt={this.props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
//       <h3>{this.props.title}</h3>
//       <p>{this.props.authors}</p>
//       <p>{this.props.description}</p>
//     </div>
//   );
// }
// }

