import './about.css'

import Whatsapp from '../myImages/whatsapp.jpg';
import Facebook from '../myImages/facebook.jpg';
import Instagram from '../myImages/instagram.jpg';
import Youtube from '../myImages/youtube.jpg';

import Card from './Card';




let details = [
    {image : Whatsapp, title : 'Whatsapp Group', desc : 'Please join this group using the below link!', link: 'https://chat.whatsapp.com/Lx12JwQCiZx8Fo3wswGSvv', linkText:"Join - Let's JavaScript"},
    {image : Facebook, title : 'Facebook', desc : 'some description some description', link: '#', linkText:"Invalid Link"},
    {image : Instagram, title : 'Instagram', desc : 'some description some description', link: '#', linkText:"Invalid Link"},
    {image : Youtube, title : 'Youtube', desc : 'some description some description', link: '#', linkText:"Invalid Link"}
]

function About(){
    return (
        <div className='mainContainer'>
            <div className='header'>
                <h2>About this page.</h2>
                <p>The sole purpose behind starting this group is to help eachother in growing knowledge!</p>
                <p>I would like to add a quote -</p>
                <p><blockquote> "Be Shameless Here, So That You Are Not Ashamed Outside!" </blockquote></p>
                <p>Feel free to drop your queries - whoever knows the answer will help you out!</p>
                <p>Alert! [ if ( your contribution == null ) console.log ( 'Feel free to Exit.' ) ]</p>
                <p>Also, i am thinking to continue with this group forever! Hahaa, Let's see!</p>
            </div>

            <div className='cardContainer'>
                {
                    details.map((item)=>{
                        return(
                            <Card image={item.image} title={item.title} desc={item.desc} link={item.link} linkText={item.linkText}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About;