import React, { useState } from "react";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  Input,
  Flex,
  Button,
  Grid,
  Group,
  Drawer,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Card from "./Components/Card";
import "./App.css";

const storeItems = [
  {
    name: "Camera Lens",
    src: "camera-lens.jpg",
    price: "$420",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "DSLR Camera",
    src: "camera.jpg",
    price: "$950",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "Headphones",
    src: "headphones.jpg",
    price: "$45",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "Shoes",
    src: "shoes.jpg",
    price: "$95",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "Watch",
    src: "watch.jpg",
    price: "$200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );

  return (
    <Container>
      <Grid className="clear">
        <Grid.Col span={8}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Ara"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            onClick={() => setSearchValue("")}
            variant="light"
            color="red"
            style={{ width: "100%" }}
          >
            Temizle
          </Button>
        </Grid.Col>

        <Grid.Col span={2}>
          <Button
            onClick={() => setOpened(true)}
            variant="filled"
            color="blue"
            style={{ width: "100%" }}
          >
            Sepeti Göster
          </Button>
        </Grid.Col>
      </Grid>

      <SimpleGrid cols={3} className="store">
        {filteredItems.map(({ name, price, src, description }) => {
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

      <Drawer opened={opened} onClose={() => setOpened(false)} title="Products" position="right">
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
          {basketItems.map(
            (
              { name },
              index // aynı itemden birden fazla oluşturulabileceği için key hatası alırız. bu yüzden key=index no yaparız.
            ) => (
              <List.Item key={index}>{name}</List.Item> // map function'ın ikinci aldığı parametre index no'dur.
            )
          )}
          <Button
            style={{ float: "right" }}
            mt={20}
            onClick={() => setBasketItems([])}
            variant="light"
            color="red"
          >
            Sepeti Temizle
          </Button>
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
