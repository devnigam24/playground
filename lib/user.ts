export class User {
  private userName: string;
  private loggedIn: Boolean;
  private userLoggedInSession: Array<Object> = [];
  public type: string;
  constructor(name: string) {
    this.userName = name;
    this.type = "NORMAL";
    this.loggedIn = false;
  }

  isLoggedIn(): Boolean {
    return this.loggedIn;
  }
  getLastLoggedInAt(): Object {
    const userLoggedInSession = this.userLoggedInSession;
    return userLoggedInSession[userLoggedInSession.length - 1] || null;
  }
  logIn(): void {
    const loginTimeDate = new Date();
    this.userLoggedInSession.push(loginTimeDate);
    this.loggedIn = true;
  }
  logOut(): void {
    this.loggedIn = false;
  }

  getName(): string {
    return this.userName;
  }
  setName(name: string): void {
    this.userName = name;
  }

  canEdit(comment: Comment) {
    switch(this.type) {
      case "NORMAL":
      case "MODERATE":
        return comment.author.userName === this.userName ? true : false;
      case "ADMIN": 
        return true;
      default:
        return false;
    }
  }
  canDelete(comment: Comment): Boolean {
    return this.type === "NORMAL" ? false : true;
  }
}

export class Moderator extends User {
  constructor(name: string) {
    super(name);
    this.type = "MODERATE";
  }
}

export class Admin extends Moderator {
    constructor(name: string) {
      super(name);
      this.type = "ADMIN";
    }
}


export class Comment {
  public author: User;
  private message: String;
  createdAt: Object;
  private repliedTo: Comment;
  constructor(author: User, message: String, repliedTo?: Comment) {
    this.author = author;
    this.message = message;
    this.createdAt = new Date();
    this.repliedTo = repliedTo || null;
  }

  getMessage(): String {
    return this.message;
  }
  setMessage(message: String): void {
    if (this.author.isLoggedIn) {
      this.message = message;
    }
  }
  getCreatedAt(): Object {
    return this.createdAt;
  }
  getAuthor(): User {
    return this.author;
  }
  getRepliedTo(): Comment {
    return this.repliedTo;
  }

  toString() {
    if (this.repliedTo) { return `${this.message} by ${this.author.getName()} (replied to ${this.repliedTo.getAuthor().getName()})`; }
    else { return `${this.message} by ${this.author.getName()}`;}
  }
}