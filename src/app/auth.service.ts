
export class AuthenticationService {
  isLoogedIn= false;

  isAuthenciatedUser() {
    const promise = new Promise(
      (resolve, reject) => {
      setTimeout(() => { resolve(this.isLoogedIn) }, 1000)
    }
    );
    return promise;
  }

  login() {
    this.isLoogedIn = true;
  }

  logout() {
    this.isLoogedIn = false;
  }
}
