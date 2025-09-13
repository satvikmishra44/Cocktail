import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';

function About() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const titlesplit = SplitText.create('#about h2', {type: 'words'});

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                top: 'top center'
            }
        })

        tl.from(titlesplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: "expo.out", stagger: 0.05
        }).from('.top-grid div, .bottom-grid div', {
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04
        }, '-=0.5')
        
    })
    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>Where Every Detail Matters <span className='text-white'>-</span>
                    from Muddle to Garnish</h2>
                </div>

                <div className='sub-content'>
                    <p>
                        Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                    </p>

                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>More Than 12000 Customers</p>
                    </div>
                </div>
                </div>

                <div className='top-grid'>
                    <div className='md:col-span-3'>
                        <div className='noisy' />
                        <img src="/images/abt1.png" />
                    </div>
                    <div className='md:col-span-6'>
                        <div className='noisy' />
                            <img src="/images/abt2.png" />
                    </div>
                    <div className='md:col-span-3'>
                        <div className='noisy' />
                            <img src="/images/abt3.png" />
                    </div>
                </div>

                <div className='bottom-grid'>
                    <div className='md:col-span-4'>
                        <div className='noisy' />
                            <img src="/images/abt4.png" />
                    </div>
                    <div className='md:col-span-8'>
                        <div className='noisy' />
                            <img src="/images/abt5.png" />
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default About;