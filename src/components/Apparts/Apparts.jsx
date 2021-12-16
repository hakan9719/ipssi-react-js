import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Filter, List } from "..";
import { MainContext } from "../../contexts/MainContext";

export default function Apparts() {
    const context = useContext(MainContext);
    return (
        <div>
        <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }} to="/">
          Home
        </NavLink>
        <Filter handleChange={context.handleChange}></Filter>
        <List list={context.dataFiltred} />
      </div>
    )
}
