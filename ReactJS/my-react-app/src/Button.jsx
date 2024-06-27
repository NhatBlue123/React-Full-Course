function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    fontFamily: "Arial,sans-serif",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const main = {
    maxWidth: "300px",
    textAlign: "center",
  };
  const handleClick = ((e)=>{
      if(e.target.textContent === "OUCH! 😆")
      {
        e.target.textContent = "Click me! 😎"
      }
      else if(e.target.textContent === "Click me! 😎")
      {
        e.target.textContent = "OUCH! 😆"
      }

  })
  return (
    <div style={main}>
      <button style={styles} onClick={(e) => handleClick(e)}>Click me! 😎</button>
    </div>
  );
}

export default Button;
