import React from 'react';
import {BiSolidComponent} from "react-icons/bi";
import Image from "next/image";
import {log} from "next/dist/server/typescript/utils";
const items = {
    1: {
        icon : '',
        message: 'Les produits chimique'
    },

    2: {
        icon : '',
        message: 'Un service logistique experimenté'
    },
    3: {
        icon : '',
        message: 'Matiére  recyclees '
    },
    4: {
        icon : '',
        message: 'Cosmetique  '
    },
    5: {
        icon : '',
        message: 'MATIERES PREMIERES PLASTIQUES'
    },
    6: {
        icon : '',
        message: 'SOUDES CAUSTIQUES\n' +
            '\n' +
            'MPG\n' +
            '\n' +
            'TIO2\n' +
            '\n' +
            'HYPOCHLORITE DE CALCIUM'
    }
}
const Showroom = () => {
    return (
        <div className='justify-center gap-2 mx-auto flex py-10 flex-wrap '>

            {Object.keys(items).map((key) => (
                <div key={key} className=' flex flex-col gap-5 content-center items-center justify-center py-10 h-56 w-64 border-b-emerald-600 border rounded-l'>
                    <BiSolidComponent/>
                    <p className='text-center'>
                        {items[key].message}
                    </p>


                </div>            ))}






        </div>
    );
};

export default Showroom;