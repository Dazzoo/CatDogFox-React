import * as axios from 'axios'

const instance = axios.create({
    withCredentials: false
})

export const imagesAPI = {
    async getCat(){
        let response = await instance.get(`https://cataas.com/cat?json=true`)
        return 'https://cataas.com' + response.data.url
    },
    async getDog(){
        let response = await instance.get(`https://dog.ceo/api/breeds/image/random`)
        return response.data.message
    },
    async getFox(){debugger
        let response = await instance.get(`https://randomfox.ca/floof/`)
        return response.data.image
    }

}
