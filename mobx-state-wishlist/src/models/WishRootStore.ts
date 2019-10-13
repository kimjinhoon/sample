import { RootModel } from "./WishList"
import { onSnapshot } from "mobx-state-tree";

export const setupRootStore = () => {
    const grouplist = localStorage.getItem("group");
    let group: any = null;
    if(grouplist) {
      const json = JSON.parse(grouplist);
      if (RootModel.is(json)) {
        console.log('group: ', json)
        group = RootModel.create(json); 
      }
    } else {
      group = RootModel.create({
        users: [
          {
            id: "a342",
            name: "Homer",
            gender: "m"
          },
          {
            id: "5fc2",
            name: "Marge",
            gender: "f"
          },
          {
            id: "663b",
            name: "Bart",
            gender: "m"
          },
          {
            id: "65aa",
            name: "Maggie",
            gender: "f"
          },
          {
            id: "ba32",
            name: "Lisa",
            gender: "f"
          }
        ]
      });
    }

    onSnapshot(group, snapshot => {
      console.log('snapshot: ', snapshot); 
      localStorage.setItem("group", JSON.stringify(snapshot));
    });

    return { group };
}