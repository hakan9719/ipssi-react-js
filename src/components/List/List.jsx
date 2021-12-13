import data from "../../data.json";
import { Item } from "..";

export default function List({ elementFilter }) {
  return (
    <div>
      {data
        .filter((element) =>
          elementFilter
            ? element.title.toLowerCase().includes(elementFilter.toLowerCase())
            : ""
        )

        .map(({ id , description, ...appart }) => (
          <Item key={id}  {...appart}>
            {description}
          </Item>
        ))
      }

    </div>
  );
}
