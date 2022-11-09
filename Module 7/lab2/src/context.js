import { createContext } from "react";

const EmoteContext = createContext({
    emote: ":)",
    setEmote: () => {}
});

export default EmoteContext;