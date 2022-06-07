// make component

// props are paramenter (varibale names you give)
const Poster = ({ filePath, altText }) => {
  return (
    <div className="poster">
      <img src={filePath} alt={altText}></img>
    </div>
  );
};

export default Poster;
