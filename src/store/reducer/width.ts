import { StoreWidth } from '../../constant/store'
import { TypeWidth, ADD_WIDTH } from '../../constant/type'


const initState: StoreWidth  = {
  width: 0,
}

export const width = ( state = initState , action: TypeWidth ) => {
  switch (action.type) {
    case ADD_WIDTH  : {
      return {
        width: action.width
      }
    }
    default:
      return state
  }
}