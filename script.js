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
/////////////////////////////////////////////////////////////////////////////////////////

let start = new Date();
let buyruq;
do {
  savolar = [
    {
      savol: `o'zbekistonda nechta viloyat bor`,
      javoblar: ["12", "14", "10", "4"],
      natija: "12",
    },
    {
      savol: `5*5=?`,
      javoblar: ["12", "25", "10", "4"],
      natija: "25",
    },
    {
      savol: `Buxoro viloyati necha ming yilik tarixga ega`,
      javoblar: ["1200", "2000", "2500", "400"],
      natija: "2500",
    },
    {
      savol: `Meni tug'ulgan kunim qaysi javobda`,
      javoblar: ["01.10.2003", "01.10.2005", "12.12.2003", "01.3.2003"],
      natija: "01.10.2003",
    },
  ];

  // let variant = ["a", "b", "c", "d"];

  let sonlar = +prompt(`Menu:
1.Savol qo'shish
2.Test ishlash
3.Chiqish`);
  //////////////////////////////////////////////////////////////////
  switch (sonlar) {
    case 1:
      const savolQoshish = (savolar) => {
        // console.log(savolar);
        let number = +prompt(
          `Nechta savol kiritasiz savol qo'shmoqchi bo'lmasangiz 0 ni kiriting`,
          0
        );
        let savolQosh;
        let arr_1;
        for (let i = 0; i < number; i++) {
          arr_1 = {
            savol: prompt(`savol kiriting`),
            javoblar: [],
            natija: prompt(`to'ri javob qaysi`),
          };

          for (let i = 0; i < 4; i++) {
            savolQosh = prompt(`javoblarni "javob" ko'rinishida yozing`);
            arr_1.javoblar.push(savolQosh);
          }
          savolar.push(arr_1);
        }
        return savolar;
      };
    // break;
    case 2:
      const randomSavol = (savolar) => {
        sonlar == 2 ? (fung = savolar) : (fung = savolQoshish(savolar));
        let set = new Set();
        let son = 0;
        let num = fung.length;
        let num_2;
        let j = 0;
        do {
          j = Math.floor(Math.random() * fung.length);
          set.add(fung[j]);
          num_2 = set.size;
        } while (set.size != num);

        let arr = Array.from(set);
        return arr;
      };

      //////////////////////////////////////////////////////////////////////////////////////////

      const natijaniChiqar = (savolar) => {
        let arr = randomSavol(savolar);
        let togriJavob = 0;
        let j = Math.floor(Math.random() * arr.length);
        for (let i = 0; i < arr.length; i++) {
          let javob = prompt(
            arr[i].savol +
              `\n` +
              `a: ${arr[i].javoblar.at(j - 0)}` +
              `\n` +
              `b: ${arr[i].javoblar.at(j - 1)}` +
              `\n` +
              `c: ${arr[i].javoblar.at(j - 2)}` +
              `\n` +
              `d: ${arr[i].javoblar.at(j - 3)}` +
              `\n agar tugatmoqchi bo'lsangiz "chiqish" degan so'zni kiriting`
          );
          variant = ["a", "b", "c", "d"];
          let num_3 = arr[i].javoblar.indexOf(arr[i].natija);

          if (
            variant.at(j - num_3) == javob ||
            javob == variant.at(j - num_3).toUpperCase()
          ) {
            togriJavob++;
          }
          if (javob == "chiqish") {
            break;
          }
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////

        alert(`to'g'ri javoblar soni ${togriJavob} ta`);

        if (togriJavob == savolar.length) {
          alert(
            `🎉🎊Tabriklaymiz siz barcha ${togriJavob} sini ham toptingiz🎊🎉`
          );
        } else {
          alert(
            `😢😭Afsuzki siz barcha javoblardan ${togriJavob} tasini topa oldingiz😢😭`
          );
        }
      };

      natijaniChiqar(savolar);
      break;
    case 3:
      break;
    default:
      break;
  }
  buyruq = prompt(`Test ni qayta ishlaysizmi"ha" yoki "yoq"`);
} while (buyruq == "ha");
let end = new Date();
alert(`ketgan vaxt ${end - start}`);
