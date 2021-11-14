import {useEffect} from 'react'
//import Header from '../components/header/Header'

export default function useImageTheme() {
    useEffect(() => {


        document.body.style.marginTop = '-140px'
        // document.main.style.paddingTop = '140px'
        return () => {
            document.body.style.marginTop = '0px'

        }
    })
}


