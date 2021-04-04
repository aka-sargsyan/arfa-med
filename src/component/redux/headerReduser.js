
const TOGGLE_GET_APPOINTMENT = "TOGGLE_GET_APPOINTMENT";

let initialState = {
  isGetAppointment: false,
};

export let toggleGetAppointment = () => ({ type: TOGGLE_GET_APPOINTMENT })
const headerReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GET_APPOINTMENT:{
      return { ...state, isGetAppointment: state.isGetAppointment ? false : true }
    }
    default:
      return state;
  }
}

export default headerReduser;