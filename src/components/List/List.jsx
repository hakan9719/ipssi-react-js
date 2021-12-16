import { Item } from "..";

export default function List({ list }) {
  return (
    <div>
      {list
        .map(({ id, description, ...appart }) => (
          <Item key={id} {...appart}>
            {description}
          </Item>
        ))}
    </div>
  );
}
