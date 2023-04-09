import React, { useState } from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Card from "./Components/Card";
import "./App.css";

const storeItems = [
  {
    name: "Camera Lens",
    src: "camera-lens.jpg",
    price: "$420",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    name: "DSLR Camera",
    src: "camera.jpg",
    price: "$950",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    name: "Headphones",
    src: "headphones.jpg",
    price: "$45",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    name: "Shoes",
    src: "shoes.jpg",
    price: "$95",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    name: "Watch",
    src: "watch.jpg",
    price: "$200",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
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

      <Input.Wrapper>
        <Input
          pt={20}
          p={20}
          placeholder="Ara"
          onChange={(e) => setSearchValue(e.target.value)}
        ></Input>
      </Input.Wrapper>

      <SimpleGrid cols={3} className="store">
        {storeItems.map(({ name, price, src, description }) => {
          return (
            <Card
              key={name}
              name={name}
              price={price}
              src={src}
              description={description}
              onAdd={() => setBasketItems([...basketItems, { name }])}
            />
          );
        })}
      </SimpleGrid>

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
