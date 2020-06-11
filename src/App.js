import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import UserList from "./components/UserList";
import MainArea from "./components/MainArea";

const App = (props) => {
  const [authorList, setAuthorList] = useState(() => null);
  const [authorSelected, setAuthorSelected] = useState(() => null);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);

      setAuthorList(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header
        {...props}
        authorSelected={authorSelected}
        setAuthorSelected={setAuthorSelected}
      />

      <div className="app-content">
        <div className="UserList segment ui middle aligned divided list">
          {authorList && (
            <UserList
              setAuthorSelected={setAuthorSelected}
              authorList={authorList}
            />
          )}
        </div>

        <Route
          path="/author/:id"
          render={(props) => (
            <MainArea
              {...props}
              authorList={authorList}
              setAuthorSelected={setAuthorSelected}
              authorSelected={authorSelected}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
