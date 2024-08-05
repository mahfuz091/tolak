"use client"
import React, { useEffect, useState } from 'react';

const NewsLetterForm = ({ status, message, onValidated, mail }) => {
    const [isMount, setIsMount] = useState(false)
    console.log(status);


    useEffect(() => {
        setIsMount(true)
    }, [])
    let email;

    const submit = () =>

        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    if (!isMount) {
        return null
    }
    return (
        <>
            <div className={`${mail ? "mail-section__newsletter" : "sidebar-one__newsletter"} mc-form"`}>
                <input ref={(node) => (email = node)} type="text" name="EMAIL" placeholder="Email address" />
                {
                    mail ? <>
                        <button onClick={submit} type="submit" className="tolak-btn">
                            <b>Subscribe</b><span></span>
                            <span className="sr-only">Subscribe</span>
                        </button>
                    </> :
                        <>
                            <button onClick={submit} type="submit" className="fas fa-paper-plane">
                                <span className="sr-only">submit</span>
                            </button>
                        </>
                }

            </div>
            <div className="mc-form__response">
                {status === "sending" && <div >sending...</div>
                }
                {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" && <div >Subscribed !</div>}</div>
        </>
    );
};

export default NewsLetterForm;