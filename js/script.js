let puan = document.getElementById("puanYazdir");
puan = 0;

const kartTemplate = `
    <div class="kart-cerceve">
    <div class="kart-onyuz">
    <img src="https://via.placeholder.com/100x100?text=?">
    </div>
    <div class="kart-arkayuz">
    <img src="">
    </div>
    </div>
`;

const fotograf = function () {
  let dizi = [];
  for (let i = 1; i < 8; i++) {
    let rastgeleBul = Math.floor(Math.random() * 99);
    dizi.push(rastgeleBul, rastgeleBul);
    if (dizi.length === 8) break;
  }

  return dizi;
};

const fotoNumaralari = fotograf();

for (fotoNumara of fotoNumaralari) {
  const yenikart = document.createElement("div");
  yenikart.innerHTML = kartTemplate;
  yenikart.classList.add("kart");
  yenikart.querySelector(
    ".kart-arkayuz img"
  ).src = `https://lipsum.app/id/${fotoNumara}/100x100`;
  document.querySelector("div#oyun-cerceve").append(yenikart);


  yenikart.addEventListener("click", kartTiklama);
}

function kartTiklama(olay) {

  const secilenKart = olay.currentTarget;

  if (secilenKart.classList.contains("eslesti") === true) {
    return;
  }

  if (secilenKart.classList.contains("acik") === true) {
    return;
  }

  const tumAcikKartlar = document.querySelectorAll(".acik");
  if (tumAcikKartlar.length === 2) {
    return;
  }

  const acikKart = document.querySelector(".acik");

  if (acikKart === null) {
    secilenKart.classList.add("acik");

    setTimeout(() => {
      secilenKart.classList.remove("acik");
    }, 1500);
    return;
  }

  secilenKart.classList.add("acik");

  const acikKartImg = acikKart.querySelector(".kart-arkayuz img");
  const secilenKartImg = secilenKart.querySelector(".kart-arkayuz img");

  if (acikKartImg.src === secilenKartImg.src) {

    acikKart.classList.add("eslesti");
    secilenKart.classList.add("eslesti");

    puan = puan + 1;
    document.getElementById("puanYazdir").innerHTML =
      puan + " puan kazandınız. ";

    acikKart.classList.remove("acik");
    secilenKart.classList.remove("acik");

    setTimeout(() => {
      acikKart.removeEventListener("click", kartTiklama);
      secilenKart.removeEventListener("click", kartTiklama);
    }, 1000);

    if (puan == 4) {
      let helal = document.createElement("img");
      helal.src = "https://media.tenor.com/M88VZJz-F5wAAAAd/katana-in-my-backpack.gif";
      resimOlustur = document.querySelector("body").appendChild(helal);
      setTimeout(function () {
        resimOlustur.remove();
      }, 5000);
    }


  } else {

    setTimeout(() => {
      acikKart.classList.remove("acik");
      secilenKart.classList.remove("acik");
    }, 1500);
  }
}

