import React from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function SearchUserByUsername() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const usernameRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameRef.current?.value) {
      navigate(`/${usernameRef.current?.value}`);
      return;
    }
    enqueueSnackbar("Please enter a username", { variant: "error" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h3>Search a user by username</h3>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" ref={usernameRef} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchUserByUsername;
