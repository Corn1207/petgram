import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import json from "../../../api/db.json";

const ListOfCategories = () => {
  return (
    <List>
      {json.categories.map((category) => (
        <Item key={category.id}>
          <Category 
            {...category}
          />
        </Item>
      ))}
    </List>
  );
};

export { ListOfCategories };
