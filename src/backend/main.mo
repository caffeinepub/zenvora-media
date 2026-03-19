import Text "mo:core/Text";

actor {
  public query ({ caller }) func getStatus() : async Text {
    "Zenvora Media is online. Welcome to our static landing page!";
  };

  public query ({ caller }) func greet(name : Text) : async Text {
    "Hello, " # name # "! Thanks for visiting Zenvora Media.";
  };
};
