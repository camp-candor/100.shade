import * as clone from "clone-deep";
import * as Act from "./library.action";
import { LibraryModel } from "./library.model";
import * as Buzz from "./library.buzzer";
import State from "../99.core/state";

export function reducer(model: LibraryModel = new LibraryModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_LIBRARY:
            return Buzz.updateLibrary(clone(model), act.bale, state);

        case Act.TEST_LIBRARY:
            return Buzz.testLibrary(clone(model), act.bale, state);

        case Act.INIT_LIBRARY:
            return Buzz.initLibrary(clone(model), act.bale, state);

        case Act.COUNT_LIBRARY:
            return Buzz.countLibrary(clone(model), act.bale, state);

        case Act.LIST_LIBRARY:
            return Buzz.listLibrary(clone(model), act.bale, state);

        case Act.DEV_LIBRARY:
            return Buzz.devLibrary(clone(model), act.bale, state);

        case Act.SETUP_SPECTRUM:
            return Buzz.setupSpectrum(clone(model), act.bale, state);

case Act.ASTRO_LIBRARY:
 return Buzz.astroLibrary(clone(model), act.bale, state);
 
case Act.QUEST_LIBRARY:
 return Buzz.questLibrary(clone(model), act.bale, state);
 
        default:
            return model;
    }
}
