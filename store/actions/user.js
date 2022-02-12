export const addCilp = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    clip,
  }
}

export const deleteCilp = ({ clip }) => {
    return {
      type: 'DELETE_CLIP',
      clip,
    }
  }