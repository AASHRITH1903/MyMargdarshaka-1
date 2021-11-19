class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")|| lowercase.includes("hi") || lowercase.includes("hey")) {
      this.actionProvider.handleSingleOption("Hello, my name is Lola! How can I help you? ", "options");
    }
    else if ((lowercase.includes("I love you")|| lowercase.includes("like you")))
    {
      this.actionProvider.handleSingleOption("I love me too! I'm Lola! How can I help you? ", "options");
    }
    else if ((lowercase.includes("how are you")|| lowercase.includes("you")))
    {
      this.actionProvider.handleSingleOption("I'm doing well, thank you! My name is Lola and my preferred pronouns are they/them. How can I help you today?", "options");
    }
    else if((lowercase.includes("joke")|| lowercase.includes("laugh")))
    {
      let joke = ""
      fetch("https://sv443.net/jokeapi/v2/joke/Pun?safe-mode&type=single")
      .then((res) => res.json())
      .then((data) => {console.log(data.joke);
        this.actionProvider.handleSingleOption("Here's something that might make you laugh. \n\n"+ data.joke, "options")})
    }
    else
    {
      this.actionProvider.handleSingleOption("I'm sorry, I didn't quite understand that. Please choose on of the options I can help you with. ", "options");     
    }
  }
}

export default MessageParser;
