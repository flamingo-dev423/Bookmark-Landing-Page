
// console.log('Hello, Vue')

const app = Vue.createApp({
    data ( ) {
        return {
            Nav1: 'Simple Bookmarking' , 
            Nav2: 'Speedy Searching' , 
            Nav3: 'Easy Sharing'
        }
    },
})

app.mount ('#Container-Frame')