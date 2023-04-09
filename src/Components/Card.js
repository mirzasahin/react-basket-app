import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function CardComponent({ name, price, onAdd, src, description }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={`/assets/images/${src}`}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="red" variant="light">
          {price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onAdd}
      >
        Ekle
      </Button>
    </Card>
  );
}

export default CardComponent;
