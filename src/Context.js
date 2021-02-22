import React from 'react'


const Context = React.createContext()

function ContextProvider({children}) {

    

    function reviewToggle(e, arr, review, setter) {
        let selection = arr[e].id
        setter(selection)
        if (selection === review) {
            setter()  
        } 
    }

    function filterSet(item, activeReview) {
        const baseOpacity = {opacity: 1}
        const hidden = {opacity: .05}
        const hightLight = {opacity: 1}
        
        if (activeReview === undefined ) {
            return baseOpacity
        } else if (item.id === activeReview) {
            return hightLight
        } else if (item.id !== activeReview) {
            return hidden
        }
    }






    function fullStarMaker(rating) {
        const  ratingSplit= rating.toString().split('.')
        const fullStarNumber = parseInt(ratingSplit[0])
        const full = Array(fullStarNumber).fill(String.fromCharCode(10029)) 
        return full   
    }

    function halfStarMaker(rating) {
        const  ratingSplit= rating.toString().split('.')
        const halfStarNumber = parseInt(ratingSplit[1])
        const half = halfStarNumber === 5 ?  '1/2' : ''
        return half   
    }
    


    return (
        <Context.Provider value={{fullStarMaker, halfStarMaker, reviewToggle,filterSet}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
