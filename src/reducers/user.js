const user = (state = "", action) => {
  switch (action.type) {
    case "USER/SET":
      return action.user
    default:
      return state
  }
}

export default user
