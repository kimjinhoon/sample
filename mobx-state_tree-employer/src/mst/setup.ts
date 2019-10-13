import { RootModel } from "."
import { onSnapshot } from "mobx-state-tree";

export const setupRootStore = () => {
    const rootTree = RootModel.create({
        employer: {
            id: "1",
            name: "JS Sol",
            location: "Busan",
            employees: []
        }
    });
    onSnapshot(rootTree, snapshot => console.log('snapshot: ', snapshot));
    // const currentRootTree = getSnapshot(rootTree);
    // applySnapshot(rootTree, {
    //     ...currentRootTree, 
    //     employer: {...currentRootTree.employer, location: "Manhattan"}});
    return { rootTree }
}