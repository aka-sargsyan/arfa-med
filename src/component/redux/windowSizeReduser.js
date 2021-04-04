const GET_SIZE = "GET_SIZE";

let initialState = {
  size: {
    width: null,
    height: null
  }
};

export let getSize = (width,height) => ({ type: GET_SIZE, width,height})

const windowSizeReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIZE:{
      return { ...state, size: {width:action.width,height:action.height}}
    }
    default:
      return state;
  }
}

export default windowSizeReduser;