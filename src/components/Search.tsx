import React, { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUserName] = useState("");

  const handleonKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
        loadUser(username);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque o usuário : </h2>
      <p>Conheça seus melhores respositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite o nome do usúario"
          onKeyDown={(e) => handleonKeyDown(e)}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
