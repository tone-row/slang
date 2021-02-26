const htmlDefault = "<html><head><title>Sup Tho</title></head></html>";
const render = {
  html: htmlDefault,
  getHtml() {
    return this.html;
  },
  setHtml(newHtml: string) {
    this.html = newHtml;
  },
  resetHtml() {
    this.html = htmlDefault;
  },
};

export { render };
