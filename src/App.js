import React from 'react';
import ListPage from './ListPage';
import './App.css';
import { QueryRenderer, graphql } from "react-relay";
import environment from "./Environment";

const AppAllPostQuery = graphql`
  query AppAllPostQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`;

function App() {
  return (
    <div className="App">

      <QueryRenderer
        environment={environment}
        query={AppAllPostQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <ListPage viewer={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    </div>
  );
}

export default App;
