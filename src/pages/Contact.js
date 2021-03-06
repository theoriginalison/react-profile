import React from "react";

const Contact = () => {
    return (
        <main className="container">
            <section className="row">
                <div className="jumbotron col-sm-10">
                    <h1 className="display-4">CONTACT</h1>
                    <hr className="my-4" />
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">NAME</label>
                            <input className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">EMAIL</label>
                            <textarea type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">MESSAGE</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                placeholder="Type your message to Alison here." rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact;