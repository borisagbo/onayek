import React from 'react';
import {AiOutlineHighlight} from "react-icons/ai";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiTransparentTubes } from "react-icons/gi";
import { GiFootPlaster } from "react-icons/gi";
const items = {
    1: {
        color : 'bg-emerald-600',
        text: 'Cosmetique et SAPONIFICATION',
        data: {
            1:'Acide lactique',
            2:'Bondillons de savon ',
            3:'Detergent en poudre',
            4:'Glycérine',
            5:'lABSA',
            6: 'les huiles  (ricin,coco...)'
        }
    },

    2: {
        color : 'bg-red-400',
        text: 'Traitement d eau',
        data: {
            1:'Acide lactique',
            2:'Bondillons de savon ',
            3:'Detergent en poudre',
            4:'Glycérine',
            5:'lABSA',
            6: 'les huiles  (ricin,coco...)'
        }
    },

    5: {
        color : 'bg-violet-900',
        text: 'AUTRES  MATIERES PREMIERES CHIMIQUES',
        data: {
            1:'Acide lactique',
            2:'Bondillons de savon ',
            3:'Detergent en poudre',
            4:'Glycérine',
            5:'lABSA',
            6: 'les huiles  (ricin,coco...)'
        }
    },
    6: {
        color : 'bg-black',
        text: 'MATIERES PREMIERES PLASTIQUES',
        data: {
            'AS':{
                title: 'ABS (Acrylonitrile Bufadiène Styrène)',
                

            },
            'PE':{

            },
           'PVC': {

           },
            'PS':{

            },
            'PP':{

            },
         'PET':{

         },
            'les masterbatchez':{

            },
            'Les plastiques issus du recyclage':{

            }

        }
    }
}

const Matieres = () => {
    return (
        <div>
            <h2 className='text-center text-2xl my-10 font-bold'>Matiere Premiére</h2>

            <div className=' w-full md:h-96 bg-black flex flex-col   md:flex-row'>
                <div className='flex-1 bg-emerald-600 py-20 md:py-10 h-full gap-2 justify-end px-5 flex flex-col '>
                    <AiOutlineHighlight className='fill-amber-50 text-2xl'/>

                    <p className='text-white uppercase text-xl'>Cosmetique</p>
                    <p className='text-white underline cursor-pointer  hover:'>Visuealiser</p>

                </div>



                <div className='flex-1 bg-red-400 h-full gap-2 justify-end px-5 flex flex-col  py-20 md:py-10'>
                    <FaHandHoldingWater className='fill-amber-50 text-2xl'/>

                    <p className='text-white uppercase text-xl'>Traitement d eau</p>
                    <p className='text-white underline  cursor-pointer hover:'>Visuealiser</p>
                </div>
                <div className='flex-1 bg-violet-900 h-full gap-2 justify-end px-5 flex flex-col py-20 md:py-10'>
                    <GiTransparentTubes className='fill-amber-50 text-2xl'/>

                    <p className='text-white uppercase text-xl'>AUTRES  MATIERES PREMIERES CHIMIQUES</p>
                    <p className='text-white underline cursor-pointer hover:'>Visuealiser</p>
                </div>
                <div className='flex-1 bg-black h-full gap-2 justify-end px-5 flex flex-col py-20 md:py-10'>
                    <GiFootPlaster className='fill-amber-50 text-2xl'/>
                    <p className='text-white uppercase text-xl'>MATIERES PREMIERES PLASTIQUES</p>
                    <p className='text-white underline cursor-pointer hover:'>Visuealiser</p>
                </div>

            </div>

        </div>
    );
};

export default Matieres;