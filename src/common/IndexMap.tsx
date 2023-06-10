const IndexMap = () => {
  const Hello = ["one", "two", "Three", "Four", "Six"];

  const hellomAp = Hello.map((index) => index.split("  "));
  return (
    <div>
      <p>Map of Array</p>
      {hellomAp}
    </div>
  );
};

export default IndexMap;
