import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context);

    return {
        episodeName: state.episodeName,
        setEpisodeName: (value) => setState({episodeName: value})
    };
};

export {useAppContext};