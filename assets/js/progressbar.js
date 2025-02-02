class progressbar {
  constructor(progressBar) {
    this.progressBar = progressBar;
  }
  scrollProgress() {
    const height = document.body.scrollHeight - window.innerHeight;
    const scrollPostion = document.documentElement.scrollTop;
    const scrolled = (scrollPostion / height) * 100;
    this.progressBar.style.width = `${scrolled}%`;
  }
}
const progressbar_obj = new progressbar(document.getElementById("progressBar"));
export default progressbar_obj;
