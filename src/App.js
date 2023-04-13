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
  Indicator,
  Badge,
} from "@mantine/core";
import { IconCircleCheck, IconShoppingCart } from "@tabler/icons-react";
import Card from "./Components/Card";
import "./App.css";

const storeItems = [
  {
    id:101,
    name: "Camera Lens",
    src: "camera-lens.jpg",
    price: "$420",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id:102,
    name: "DSLR Camera",
    src: "camera.jpg",
    price: "$950",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id:103,
    name: "Headphones",
    src: "headphones.jpg",
    price: "$45",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id:104,
    name: "Shoes",
    src: "shoes.jpg",
    price: "$95",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id:105,
    name: "Watch",
    src: "watch.jpg",
    price: "$200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];
let totalBasketItems = 0;

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  // let [totalBasketItems, setTotalBasketItems] = useState(0)
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );


  let addToBasket = ({name, id}) => {
    let basketIndex = basketItems.findIndex(item => item.id === id);
    totalBasketItems++

    if(basketIndex >= 0){
      let _basketItems = [...basketItems]
      _basketItems[basketIndex].counter += 1;

      setBasketItems(_basketItems)
    }else{
      setBasketItems([...basketItems, { name: name, id: id, counter: 1 }])
    }

  }

  return (
    <Container>
      <Grid className="clear">
        <Grid.Col span={9}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Ara"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            p={0}
            onClick={() => setSearchValue("")}
            variant="light"
            color="red"
            style={{ width: "100%" }}
          >
            Sonuçları Temizle
          </Button>
        </Grid.Col>

        <Grid.Col span={1}>
          <Indicator
            size={20}
            withBorder
            color="red"
            label={totalBasketItems !== 0 ? totalBasketItems : null}
          >
            {" "}
            {/* basketItems.length sıfırdan farklıysa bu değer label'a atanır. Eğer sıfırsa null değeri label'a atanır. */}
            <Button
              onClick={() => setOpened(true)}
              variant="filled"
              color="blue"
              style={{ width: "100%" }}
            >
                <IconShoppingCart/>
            </Button>
          </Indicator>
        </Grid.Col>
      </Grid>

      <SimpleGrid cols={3} className="store">
        {filteredItems.map(({ name, price, src, description, id}) => {
          return (
            <Card
              key={name}
              name={name}
              price={price}
              src={src}
              description={description}
              onAdd={() => addToBasket({name:name, id:id })}
            />
          );
        })}
      </SimpleGrid>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Products"
        position="right"
        size="sm"
      >
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
              { name, counter },
              index // aynı itemden birden fazla oluşturulabileceği için key hatası alırız. bu yüzden key=index no yaparız.
            ) => (
              <List.Item key={index}> <Group> {name} <Badge color="orange">{counter}</Badge></Group></List.Item> // map function'ın ikinci aldığı parametre index no'dur.
            )
          )}
          <Button
            style={{ float: "right" }}
            mt={20} 
            onClick={() =>{ setBasketItems([])
            totalBasketItems = 0}}
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
