import React, {useState} from 'react';
import styles from './CategoryFull.module.css';


export default function CategoryFull({category, children}) {

    switch(category){
        case 'EW':
            return(
                <p>Extinct In The Wild</p>
            )
            break;
        case 'EX':
            return(
                <p>Extinct</p>
            )
            break;
        case 'CR':
            return(
                <p>Critically Endangered</p>
            )
            break;
        case 'EN':
            return(
                <p>Endangered</p>
            )
            break;
        case 'VU':
            return(
                <p>Vulnerable</p>
            )
            break;
        // case 'LR/cd':
        //    return(
        //        <p>Lower Risk: Conservation Dependent</p>
        //   )
        //     break;
        case 'NT':
            return(
                <p>Near Threatened</p>
            )
            break;
        case 'LR/nt':
            return(
                <p>Near Threatened</p>
            )
            break;
        case 'LC':

            return(
                <p>Least Concern</p>
            )
            break;
        case 'LR/lc':
            return(
                <p>Least Concern</p>
            )
            break;
        case 'DD':
            return(
                <p>Data Deficient</p>
            )
            break;
        case 'NA':
            return(
                <p>Not Applicable</p>
            )
            break;
        default:  ;
    }
}

