import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { TextField } from "../TextField";

import { FiltersContainer, Button, SuccessButton } from "./styles";
interface FiltersProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  return (
    <FiltersContainer>
      <TextField
        type="text"
        placeholder="Find a repository"
        onChange={onChange}
      />
      <div className="dropdown-container">
        <Button>
          Type <AiFillCaretDown size={12} />
        </Button>
        <Button>
          Language <AiFillCaretDown size={12} />
        </Button>
        <Button>
          Sort <AiFillCaretDown size={12} />
        </Button>
      </div>
      <div className="new-repository">
        <SuccessButton>
          <BiBookBookmark /> New
        </SuccessButton>
      </div>
    </FiltersContainer>
  );
};

export default Filters;
