import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("Web Developer.")
          .pause(750)
          .delete(14)
          .pause(500)
          .type("Back end Developer.")
          .pause(750)
          .delete(19)
          .type("OpenSource Contributor.");

        // Remember to return it!
        return instance;
      }}
    />
  );
}

export default Intro;
