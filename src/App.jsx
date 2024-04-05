import { useState } from "react";


function Title() {
  return <h1>BanPick for Splatoon3</h1>;
}

function Description() {
  return (
    <div>
      <p>武器をクリックすると印をつけたり消したりできます</p>
    </div>
  );
}

function ResetButoon({onClickButton}) {
  return (
    <p>
      <button onClick={onClickButton}>{'リセット'}</button>
    </p>
  )
}

function WeaponTable({all_weapon, checkedArray, setCheckedArray}) {
  return (
    <div className="table">
      <WeaponRow
        weapon_row={all_weapon[0]}  kind={0}
        checkedArray={checkedArray} name={"シューター"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[1]}  kind={1}
        checkedArray={checkedArray} name={"ローラー"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[2]}  kind={2}
        checkedArray={checkedArray} name={"チャージャー"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[3]}  kind={3}
        checkedArray={checkedArray} name={"スロッシャー"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[4]}  kind={4}
        checkedArray={checkedArray} name={"スピナー"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[5]}  kind={5}
        checkedArray={checkedArray} name={"マニューバー"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[6]}  kind={6}
        checkedArray={checkedArray} name={"シェルター"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[7]}  kind={7}
        checkedArray={checkedArray} name={"ブラスター"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow 
        weapon_row={all_weapon[8]}  kind={8}
        name={"フデ"} checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[9]}  kind={9}
        checkedArray={checkedArray} name={"ストリンガー"}
        setCheckedArray={setCheckedArray}/>
      <WeaponRow
        weapon_row={all_weapon[10]} kind={10}
        checkedArray={checkedArray} name={"ワイパー"}
        setCheckedArray={setCheckedArray}/>
    </div>
  );
}

function WeaponRow({weapon_row, kind, checkedArray, name, setCheckedArray}) {
  
  function handleClickWeapon(kind, index) {
    let l = checkedArray.slice();
    l[kind][index] = !l[kind][index];
    setCheckedArray(l);
  }

  const weapons = weapon_row.map((weapon, index) => {
    let weapon_key = kind*100+index;
    let weapon_img_name = "w" + ("0000"+String(weapon_key)).slice(-4);
    console.log("@/public/src/img/"+weapon_img_name+".png");
    if (checkedArray[kind][index]) {
      return (
        <div className="weapon_box" key={weapon_key}>
          <img
            src={"./img/"+weapon_img_name+".png"}
            alt="alternative_text_of_image"
            onClick={() => handleClickWeapon(kind, index)}>
          </img>
          <span class="material-symbols-outlined">
            close
          </span>
        </div>
      );
    } else {
      return (
        <div className="weapon_box" key={weapon_key}>
          <img
            src={"./img/"+weapon_img_name+".png"}
            alt="alternative_text_of_image"
            // src={icon_name}
            onClick={() => handleClickWeapon(kind, index)}>
          </img>
        </div>
      );
    }
    
  });

  return (
    <div className="weapon-row">
      <div className="weapon_kind">{name}</div>
      {weapons}
    </div>
  );
}

export default function App() {
  let all_weapon = [];
  const number_of_weapons = [14, 5, 6, 6, 6, 5, 3, 7, 3, 2, 2];

  for (let i = 0; i < number_of_weapons.length; i++) {
    let l = []
    for (let j = 0; j < number_of_weapons[i]; j++) {
      l.push(false);
    }
    all_weapon.push(l);
  }

  const [checkedArray, setCheckedArray] = useState(all_weapon);

  function handleClickResetButton() {
    for (let i = 0; i < all_weapon.length; i++) {
      for (let j = 0; j < all_weapon[i].length; j++) {
        all_weapon[i][j] = false;
      }
    }
    setCheckedArray(all_weapon);
    console.log('Button clicked!');
  }

  return (
    <div>
      <Title />
      <Description />
      <ResetButoon onClickButton={handleClickResetButton}/>
      <WeaponTable all_weapon={all_weapon} checkedArray={checkedArray} setCheckedArray={setCheckedArray}/>
    </div>
  );
}
