class Elem {
  constructor(szuloElem) {
    this.node = szuloElem;
    this.node.append("<div><p></p></div>");
    this.elem = this.node.children("div:last");
    this.pElem = this.elem.children("p");
    this.aktiv = true;
    this.ertek = "-";
    this.elem.on("click", () => {
      if (this.aktiv) {
        this.aktiv = false;
        this.kattintasTrigger();
      }
    });
  }

  setElem(ertek) {
    this.ertek = ertek;
    this.pElem.html(ertek);
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("elemkattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

class Jatekter {
  constructor(tomb) {
    this.tomb = tomb;
    this.ujJatekElem = $("#ujJatek");
    const szuloElem = $("article");
    szuloElem.empty();
    for (let index = 0; index < 9; index++) {
      tomb.push(new Elem(szuloElem));
    }

    this.ujJatekElem.on("click", () => this.ujJatekElemTrigger());
  }

  ujJatekElemTrigger() {
    let esemeny = new CustomEvent("ujJatekElemkattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
  setInaktiv() {
    this.tomb.forEach((element) => {
      element.aktiv = false;
    });
  }
}

class InfoView {
  constructor() {
    this.xNevElem = $("#xNev");
    this.oNevElem = $("#oNev");
    this.kovetkezoJElem = $(".kovetkezoJatekos");
    this.vegeElem = $(".jatekvege");
    this.kovetkezoJElem.text("");
    this.vegeElem.text("");
  }
  getxNevElem() {
    return this.xNevElem.val();
  }
  getoNevElem() {
    return this.oNevElem.val();
  }

  setkovElem(ertek) {
    this.kovetkezoJElem.text(ertek);
  }
  setvegeelem(ertek) {
    this.vegeElem.text(ertek);
  }
}
