import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-4 content-center">
            <h1 className="text-center text-3xl font-bold mb-4">Nous contactez</h1>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className=' flex flex-col gap-5 py-10'>

                    <p >
                        Si vous avez des questions à propos de nos produits <br/>
                        ou de nos services, veuillez nous contacter <br/> en remplissant le formulaire
                        ci-dessous, nous vous <br/> répondrons dans les plus brefs délais. Vous avez <br/> aussi
                        la possibilité de nous appeler. <br/> Nous espérons avoir de vos nouvelles bientôt
                    </p>
                    <p>
                        Tel/Watsapp : +33 6 23 83 77 35
                    </p>
                    <p>
                        E-mail : sales@onayek.com
                    </p>
                    <p>
                        ONAYEK PERFORMANCES<br/>
                        34bis Rue de Malnoue <br/>

                        77420 CHAMPS S/MARNE <br/>

                        FRANCE
                    </p>

                </div>
                <form className=" flex-1 max-w-md mx-auto mt-8 p-4 shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                            placeholder="Entrer votre nom"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                            placeholder="Entrer votre email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                            placeholder="Entrer votre message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className=" bg-emerald-600 text-white py-2 px-4 rounded hover:bg-white hover:border-black hover:border-2 hover:text-emerald-700 focus:outline-none focus:ring focus:ring-primary"
                    >
                        Send Message
                    </button>
                </form>


            </div>

        </div>
    );
};

export default Contact;