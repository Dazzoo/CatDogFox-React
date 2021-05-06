import { imagesAPI } from './API'

let initialState = {
    CatUrlImg: null,
    DogUrlImg: null,
    FoxUrlImg: null

}

const commonReducer = (state = initialState, action) => {
    switch (action.type){
        case 'COMMON-GET-CAT-IMG':
            return{...state,
                CatUrlImg: action.cat
            }
        case 'COMMON-GET-DOG-IMG':
            return{...state,
                DogUrlImg: action.dog
            }
        case 'COMMON-GET-FOX-IMG':
            return{...state,
                FoxUrlImg: action.fox
            }
        default:
            return state;
    }
}


export const SetCatImg = (cat) => ({type: 'COMMON-GET-CAT-IMG', cat})
export const SetDogImg = (dog) => ({type: 'COMMON-GET-DOG-IMG', dog})
export const SetFoxImg = (fox) => ({type: 'COMMON-GET-FOX-IMG', fox})

export const UpdateCatImg = (milliSeconds) => async (dispatch) => {
    try {
        let FirstCat = await imagesAPI.getCat()
        dispatch(SetCatImg(FirstCat))
        setInterval( async () => {
            let cat = await imagesAPI.getCat()
            dispatch(SetCatImg(cat))
        }, milliSeconds)

    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const UpdateDogImg = (milliSeconds) => async (dispatch) => {
    try {
        let FirstDog = await imagesAPI.getDog()
        dispatch(SetDogImg(FirstDog))
        setInterval( async () => {
            let dog = await imagesAPI.getDog()
            dispatch(SetDogImg(dog))
        }, milliSeconds)

    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const UpdateFoxImg = (milliSeconds) => async (dispatch) => {
    try {
        let FirstFox = await imagesAPI.getFox()
        dispatch(SetFoxImg(FirstFox))
        setInterval( async () => {
            let fox = await imagesAPI.getFox()
            dispatch(SetFoxImg(fox))
        }, milliSeconds)

    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}


export default commonReducer