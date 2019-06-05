const Auth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
    setTimeout(() => {}, 100);
  },

  signOut() {
    this.isAuthenticated = false;
    setTimeout(() => {}, 100);
  },

  getAuth() {
    return this.isAuthenticated;
  }
};

export default Auth;
