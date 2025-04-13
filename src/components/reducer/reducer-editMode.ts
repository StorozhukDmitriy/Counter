//
// type ActionTypesTrue = ReturnType<typeof useTrue>
// type ActionTypes = ActionTypesTrue
//
//
//
// const reducerMode = (state: boolean, action: ActionTypes): boolean => {
//     switch (action.type) {
//         case 'TRUE':
//             return state = true
//         case 'FALSE':
//             return state = false
//         default:
//             return state
//
//     }
// }
//
// const useTrue = (state: boolean) => ({
//     type:"TRUE",
//     payload:{mode:state}
// } as const)