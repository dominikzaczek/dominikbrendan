import React from "react";

const Newsletter = () => {
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const [sent, setSent] = React.useState(false);
  const [message, setMessage] = React.useState();
  const subscribeUser = async (e) => {
    e.preventDefault();
    setSent(true);

    const response = await fetch("./api/hello", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
      }),
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (json.success === true) {
        setMessage("You've been subscribed");
      } else {
        setMessage("There was an error!");
      }
    }
  };
  if (sent)
    return (
      <>
        {!message ? (
          <h4 className="animate__animated animate__flash animate__infinite	infinite">
            Give me a second!
          </h4>
        ) : (
          <h4 className="animate__animated animate__fadeIn">{message}</h4>
        )}
      </>
    );
  return (
    <form onSubmit={subscribeUser}>
      <input
        className="form-control"
        style={{ maxWidth: "20em", marginTop: 10 }}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-control animate__animated animate__fadeIn"
        style={{ maxWidth: "20em", marginTop: 10 }}
        type="text"
        placeholder="Your name :)"
        hidden={!email ? true : false}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn animate__animated animate__fadeIn"
        type="submit"
        style={{
          color: "white",
          borderColor: "white",
          border: "1px dotted",
          marginTop: "1em",
        }}
        hidden={!name ? true : false}
      >
        Sign me up!
      </button>
    </form>
  );
};

export default Newsletter;
