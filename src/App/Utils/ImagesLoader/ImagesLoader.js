const ImagesLoader = (props) => {
  return (
    <div>
      {props.selectedImage && (
        <div >
          <img
            alt="no file"
            width={"250px"}
            src={URL.createObjectURL(props.selectedImage)}
          />
          <br />
          <button onClick={() => props.setSelectedImage(null)}>Usuń</button>
        </div>
      )}
      <br />
      <br />
      <input
        type="file"
        name="imageLocation"
        onChange={(event) => {
          props.setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default ImagesLoader;