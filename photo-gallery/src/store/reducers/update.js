import { UPDATE } from "../../constants/actionTypes";

const initialState = {
  newupdate: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE.default: {
      return {
        ...state,
        newupdate: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
