
import React from "react";


export default function DisplayCategoryName({category}) {

    switch(category){
        case 'EW':
            return(
                <h1>Extinct In The Wild</h1>
            )
        case 'EX':
            return(
                <h1>Extinct</h1>
            )
        case 'CR':
            return(
                <h1>Critically Endangered</h1>
            )
        case 'EN':
            return(
                <h1>Endangered</h1>
            )
        case 'VU':
            return(
                <h1>Vulnerable</h1>
            )
        // case 'LR/cd':
        //    return(
        //        <h1>Lower Risk: Conservation Dependent</h1>
        //   )
        case 'NT':
            return(
                <h1>Near Threatened</h1>
            )
        case 'LR/nt':
            return(
                <h1>Near Threatened</h1>
            )
        case 'LC':

            return(
                <h1>Least Concern</h1>
            )
        case 'LR/lc':
            return(
                <h1>Least Concern</h1>
            )
        case 'DD':
            return(
                <h1>Data Deficient</h1>
            )
        case 'NA':
            return(
                <h1>Not Applicable</h1>
            )
        default:  ;
    }
}

