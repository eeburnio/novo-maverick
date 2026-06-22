import menu from "../constants/menu";

function Menu() {
    return (
        <nav>
            <ul>
                {menu.map((item) => (
                    <li key={item.name}>
                        <a target="_blank" href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;