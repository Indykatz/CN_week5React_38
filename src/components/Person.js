const Person = ({ name, age, handleClick }) => {
  //   const [persons, setPersons] = useState([
  //     { name: "Tracy", age: "21" },
  //     { name: "Kat", age: "38" },
  //   ]);
  //   const handleClick = (index) => {
  //     let storedPeople = [...persons];
  //     storedPeople.splice(index, 1);
  //     setPersons(storedPeople);
  //     console.log("button was clicked");
  //   };
  return (
    <div>
      <p>
        My name is {name} and I am {age} years old
      </p>
      <button onClick={handleClick} className="removeButton">
        Remove
      </button>
    </div>
  );
};

export default Person;
