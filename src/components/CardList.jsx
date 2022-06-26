const CardList = starShipID => {
  return Object.entries(starShipID).map(([key, value], i) => (
    <li key={key + i}>
      {key}: {value}
    </li>
  ))
}

export default CardList
