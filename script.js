// let savol = prompt(`o'zbekistonda nechta viloyat bor
// a) 12
// b) 13
// c) 14
// d) 4
// `);
// const natija = (savol) => {
//   if (savol == `a`) return 1 + togriJavob;
// };

// let son = natija(savol);
// alert(`to'g'ri javoblar soni ${son}`);

let start = new Date();
savolar = [
  {
    savol: `o'zbekistonda nechta viloyat bor`,
    javoblar: ["a: 12", "b: 14", "c: 10", "d: 4"],
    natija: "a",
  },
  {
    savol: `5*5=?`,
    javoblar: ["a: 12", "b: 25", "c: 10", "d: 4"],
    natija: "b",
  },
  {
    savol: `Buxoro viloyati necha ming yilik tarixga ega`,
    javoblar: ["a: 1200", "b: 2000", "c: 2500", "d: 400"],
    natija: "c",
  },
  {
    savol: `Meni tug'ulgan kunim qaysi javobda`,
    javoblar: [
      "a: 01.10.2003",
      "b: 01.10.2005",
      "c: 12.12.2003",
      "d: 01.3.2003",
    ],
    natija: "a",
  },
];

let togriJavob = 0;

for (let i = 0; i < savolar.length; i++) {
  let javob = prompt(
    savolar[i].savol +
      `\n` +
      savolar[i].javoblar.join("\n") +
      `\n agar tugatmoqchi bo'lsangiz "chiqish" degan so'zni kiriting`
  );

  if (savolar[i].natija == javob || javob == savolar[i].natija.toUpperCase()) {
    togriJavob++;
  }
  if (javob == "chiqish") {
    break;
  }
}

alert(`to'g'ri javoblar soni ${togriJavob} ta`);

if (togriJavob == savolar.length) {
  alert(`🎉🎊Tabriklaymiz siz barcha ${togriJavob} sini ham toptingiz🎊🎉`);
} else {
  alert(
    `😢😭Afsuzki siz barcha javoblardan ${togriJavob} tasini topa oldingiz😢😭`
  );
}

let end = new Date();
alert(`ketgan vaxt ${end - start}`);
