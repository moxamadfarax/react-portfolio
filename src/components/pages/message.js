function Message() {
  const styles = {
    container: { paddingbottom: "370px" },
    textArea: { height: "20em" },
  };

  return (
    <main class="container" style={styles.container}>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            style={styles.textArea}
            class="form-control"
            id="message"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Message;
