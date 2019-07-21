import constants from "../constants/user";

export default {
  get() {
    return {
      type: constants.get
    };
  },

  delete() {
    return {
      type: constants.delete
    };
  },

  save(id, name, token) {
    return {
      id: id,
      name: name,
      token: token,
      type: constants.save
    };
  }
};
