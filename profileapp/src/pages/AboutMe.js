import React from "react";
//import image from images folder, once it's in there


const AboutMe = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="jumbotron col-sm-10">
                    <section>
                        <h1 className="display-4">About Me</h1>
                        <hr className="my-4" />
                        <p className="aboutme">
                            <img className="profilepic img-fluid" src="../images/profilepic.jpeg"
                                alt="Alison looking to the right of the screen; she is wearing a black sleeveless blouse with white medallion designs. Her hair is pulled back, and she is smiling. There is a sunset behind her."
                                width="250px" />
        Alison Lubar teaches high school English by day and yoga by night.
        Her life's work, aside from wordsmithing, has evolved into
        bringing mindfulness practices, and sometimes even poetry, to
        young people. Her work has been published by or appeared in SWWIM
        Every Day, trampset, The Esthetic Apostle, Lady Blue Literary Arts
        Journal, Cathexis Northwest Press, High Shelf, Gravitas, great
        weather for MEDIA, Toho, Rowan University’s Glassworks, Giovanni’s
        Room anthology
        <em>queerbook</em>, and Fearsome Critters' <em>Quaranzine</em>; she has work forthcoming with Apiary
        Magazine. <br /><br />
        Alison graduated from the University of Delaware in 2007, with a
        double major in Philosophy and Italian literature. In 2009, while
        teaching at University City High School in West Philadelphia, she
        received her MS Ed with a concentration in Urban Education from
        the University of Pennsylvania. In 2016, after completing a 95hr
        Kids' Yoga Teacher Training, she finished her RYT 200 with Anjali
        Power Yoga, where she teaches power vinyasa classes. Alison also
        currently teaches at a public high school in New Jersey, where she
        has created courses in philosophy, mindfulness, & yoga, and
        developed an restorative practices program.
        <br /><br />
        Though she is Californian by birth, Alison currently lives in New
        Jersey with her partner and their respective dogs. She hopes to
        one day, with her pack, return Westward.
        <br />
                        </p>

                        <hr className="my-4" />
                    </section>
                    <section>
                        <h2 className="socialMedia">CONNECT</h2>
                        <p className="aboutme smLinks">

                            LinkedIn:
        <a href="https://www.linkedin.com/in/alison-lubar-0210b31b3/"
                                target="_blank">https://www.linkedin.com/in/alison-lubar-0210b31b3/</a><br />
        GitHub:
        <a href="https://github.com/theoriginalison" target="_blank">https://github.com/theoriginalison</a>
                            <br />

        Email: <a href="mailto:aslubar@gmail.com">aslubar@gmail.com</a>
        or <a href="./contact.html">use the form on the contact page</a>.
      </p>
                    </section>
                    <section>
                        <h2 className="socialMedia">RESUME</h2>
                        <p className="aboutme smLinks">
                            Phone: (610) 730-3014 <br />
        Location: New Jersey & Philadelphia<br />
                            <a href="./Alison Lubar Resume.pdf" download>Click here to download Alison's resume.</a>
                        </p>
                    </section>
                </div>
            </div >
        </main >
    )
}

export default AboutMe;