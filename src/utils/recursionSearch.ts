import {SearchProps} from "../utils/utils.ts";

export const recursionSearch: SearchProps = (id, array) => {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }

        const subItem = recursionSearch(id, item.subTasks);

        if (subItem) {
            return subItem;
        }
    }

    return null;
};