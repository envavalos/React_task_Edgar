function Menu({ canviarTasca }) {
  const menuItems = [
    "Exercici 1",
    "Exercici 2",
    "Exercici 3",
    "Exercici 4",
    "Exercici 1_2",
    "Exercici 2_2",
    "Exercici 1_3",
    "Exercici 1_4",
    "Exercici 1_4_2",
    "Exercici 1_5",
  ];

  function onClickMenuItem(item) {
    canviarTasca(item);
  }

  return (
    <div className="medio"> 
      {menuItems.map((item, index) => {
        return (
          <button 
            key={index} 
            onClick={() => onClickMenuItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Menu;