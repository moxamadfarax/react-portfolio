import { useState } from "react";

function Message() {
  const styles = {
    container: { paddingBottom: "505px" },
    textArea: { height: "20em" },
    space: { marginBottom: "10px" },
    error: { color: "red", paddingTop: "10px" },
    success: { color: "green", paddingTop: "10px" },
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const message = event.target.elements.message.value;
    if (!message) {
      setErrorMessage("Please add a message.");
      setMessageReceived(false);
    } else {
      setErrorMessage("");
      setMessageReceived(true);
      event.target.reset();
    }
  }

  return (
    <main class="container" style={styles.container}>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            style={styles.space}
          />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            name="email"
            style={styles.space}
          />
        </div>
        <div class="form-group" style={styles.space}>
          <label htmlFor="message">Message:</label>
          <textarea
            style={styles.textArea}
            class="form-control"
            id="message"
            placeholder="Enter your message"
            name="message"
          ></textarea>
          {errorMessage && <div style={styles.error}>{errorMessage}</div>}
          {messageReceived && (
            <div style={styles.success}>Message Received</div>
          )}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Message;
