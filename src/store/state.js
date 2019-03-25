let defaultCity =  '芜湖'

try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (error) {

}


export default {
    city : defaultCity
}
