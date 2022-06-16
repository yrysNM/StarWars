import { useContext, useEffect, useState } from "react";
import { DefaultContext } from "../../Context";
import { ThemeContext, themes } from "../themeContext/themeContext";


export const ItemLists = ({ item, children, type }) => {

  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

const { handleCreateFan } = useContext(DefaultContext);

return (
  <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
    <div key={item.name} className="item-list-layout">
      <div>
        <p>name: {item.name}</p>
        {children}
      </div>
      <div className="item-image-layout">
        {type === "chars" && (
          <button
            className="favorite-button"
            onClick={() => handleCreateFan(item)}
          >
            I am your fan!!
          </button>
        )}
        <img className="item-image" src={item.url} alt="asd" />
      </div>
    </div>
  </ThemeContext.Provider>
);
};
