import React, { useState } from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Card from "./Components/Card";
import "./App.css";

const storeItems = [
  {
    name: "Çikolata",
    price: "20",
  },
  {
    name: "Masa Lambası",
    price: "10",
  },
  {
    name: "Duvar Saati",
    price: "15",
  },
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = basketItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );

  return (
    <Container>
      <SimpleGrid cols={3} className="store">
        {storeItems.map(({ name, price }) => {
          return (
            <Card
              key={name}
              name={name}
              price={price}
              onAdd={() => setBasketItems([...basketItems, { name }])}
            />
          );
        })}
      </SimpleGrid>
      <Input.Wrapper>
        <Input
          placeholder="Ara"
          onChange={(e) => setSearchValue(e.target.value)}
        ></Input>
      </Input.Wrapper>
      <List
        className="list"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        {filteredItems.map(
          (
            { name },
            index // aynı itemden birden fazla oluşturulabileceği için key hatası alırız. bu yüzden key=index no yaparız.
          ) => (
            <List.Item key={index}>{name}</List.Item> // map function'ın ikinci aldığı parametre index no'dur.
          )
        )}
      </List>
    </Container>
  );
}

export default App;
